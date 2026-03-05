const FEATURED_ITEMS = [
  {
    title: "The Gut Shot",
    desc: "2 fresh patties with all the trimmings and a perfectly fried egg.",
    img: "assets/images/featured-1.jpg"
  },
  {
    title: "Signature Wings",
    desc: "Platters stacked high. Pick from our legendary flavour roster.",
    img: "assets/images/featured-2.jpg"
  },
  {
    title: "Loaded Pizza",
    desc: "Hand-tossed 13-inch pies layered with premium fresh toppings.",
    img: "assets/images/featured-3.jpg"
  },
  {
    title: "Classic Poutine",
    desc: "Crispy fries smothered in rich gravy and real cheese curds.",
    img: "assets/images/featured-4.jpg"
  },
  {
    title: "The Cold Call Clubhouse",
    desc: "Turkey, ham, chicken, bacon, lettuce, tomato and cheddar piled high.",
    img: "assets/images/featured-5.jpg"
  },
  {
    title: "Mac and Cheese Bites",
    desc: "Golden-fried macaroni bites with a gooey, cheesy center.",
    img: "assets/images/featured-6.jpg"
  }
];

const INITIAL_REVIEWS = [
  {
    name: "Michael R.",
    date: "2 weeks ago",
    rating: 5,
    text: "The Gut Shot burger is absolutely unreal. Hands down the best late-night food I have ever had. Massive portions and the meat actually tastes fresh."
  },
  {
    name: "Sarah T.",
    date: "1 month ago",
    rating: 5,
    text: "Ordered the Jackpot Platter for a group after a night out. It was absurd in the best way possible. The dry ribs and mac and cheese bites were stars."
  },
  {
    name: "David L.",
    date: "3 weeks ago",
    rating: 4,
    text: "Saved my life at 3 AM. The poutine is incredible, real cheese curds and super rich gravy. Deducting one star only because I was too full to finish it."
  },
  {
    name: "Emma W.",
    date: "2 months ago",
    rating: 5,
    text: "The spicy chicken wrap hits different when you are craving something with a kick. Love that they are open till 4am on weekends."
  }
];

let reviewsState = [...INITIAL_REVIEWS];

const MENU = [
  {
    category: "Burgers, Sandwiches and Wraps",
    note: "All burgers are 8 oz fresh patties. Items include fries.",
    items: [
      { name: "The Wild One", desc: "Mushrooms, onions and wild rice", price: "$14.00" },
      { name: "The Gut Shot", desc: "2 patties with all trimmings and fried egg", price: "$18.00" },
      { name: "The Spicy One", desc: "Pickles, chipotle mayo, jalapenos and cheddar", price: "$14.00" },
      { name: "The Chick", desc: "Spicy chicken breast, bacon, lettuce, tomato, cheddar", price: "$13.00" },
      { name: "Chicken Caesar Wrap", desc: "Romaine, bacon and sliced chicken breast", price: "$13.00" }
    ]
  },
  {
    category: "Popular Picks",
    items: [
      { name: "Dry Ribs and Caesar Salad", desc: "", price: "$12.75" },
      { name: "Chicken Fingers and Fries", desc: "", price: "$11.25" },
      { name: "Breaded Wings and Fries", desc: "", price: "$11.75" },
      { name: "Chef's Salad", desc: "", price: "$11.75" }
    ]
  },
  {
    category: "Pizzas (13 inch)",
    note: "One size only. Hand-crafted pies baked to perfection.",
    items: [
      { name: "Pepperoni", desc: "", price: "$24.25" },
      { name: "All Meat", desc: "", price: "$24.25" },
      { name: "Hawaiian", desc: "", price: "$24.25" },
      { name: "Loaded", desc: "", price: "$26.50" }
    ]
  },
  {
    category: "Platters",
    items: [
      { name: "Wing Platter", desc: "30 wings in 5 flavours", price: "$23.50" },
      { name: "Pocket Aces Platter", desc: "Dry ribs, wings, fingers, fries", price: "$21.25" },
      { name: "Jackpot Platter (Large)", desc: "Dry ribs, wings, fingers, onion rings, fries, pickle chips", price: "$42.50" }
    ]
  },
  {
    category: "On the Side",
    items: [
      { name: "Poutine", desc: "", price: "$7.00" },
      { name: "Fries", desc: "", price: "$4.75" },
      { name: "Onion Rings", desc: "", price: "$5.50" },
      { name: "Chicken Wings (15)", desc: "Pick a flavour", price: "$11.75" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Pop", desc: "", price: "$2.75" },
      { name: "Coffee", desc: "One refill", price: "$1.75" },
      { name: "Tea", desc: "One refill", price: "$1.75" },
      { name: "Milkshake", desc: "", price: "$4.25" }
    ]
  }
];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderFeatured() {
  const track = document.getElementById("featuredTrack");
  if (!track) return;
  track.innerHTML = FEATURED_ITEMS.map((item) => {
    return `<article class="featured-card">
      <div class="featured-media">
        <img src="${item.img}" alt="${escapeHtml(item.title)}" />
        <span class="featured-arrow">-></span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.desc)}</p>
    </article>`;
  }).join("");
}

function renderReviews() {
  const track = document.getElementById("reviewsTrack");
  if (!track) return;
  track.innerHTML = reviewsState.map((review) => {
    const rating = clampRating(review.rating);
    const stars = `${"*".repeat(rating)}${"-".repeat(5 - rating)}`;
    const dateLabel = review.date || formatRelativeDate(review.createdAt) || "just now";
    return `<article class="review-card">
      <div class="review-head">
        <div>
          <h4>${escapeHtml(review.name)}</h4>
          <small>${escapeHtml(dateLabel)}</small>
        </div>
        <div class="stars">${stars}</div>
      </div>
      <p>"${escapeHtml(review.text)}"</p>
    </article>`;
  }).join("");
}

function clampRating(value) {
  const numericValue = Number.parseInt(String(value ?? ""), 10);
  if (!Number.isFinite(numericValue)) {
    return 5;
  }
  return Math.min(5, Math.max(1, numericValue));
}

function formatRelativeDate(isoDateString) {
  if (!isoDateString) {
    return "";
  }

  const timestamp = Number(new Date(isoDateString));
  if (!Number.isFinite(timestamp)) {
    return "";
  }

  const diffMs = Date.now() - timestamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;

  if (diffMs < minute) return "just now";
  if (diffMs < hour) return `${Math.floor(diffMs / minute)} min ago`;
  if (diffMs < day) return `${Math.floor(diffMs / hour)} hour${Math.floor(diffMs / hour) > 1 ? "s" : ""} ago`;
  if (diffMs < week) return `${Math.floor(diffMs / day)} day${Math.floor(diffMs / day) > 1 ? "s" : ""} ago`;
  if (diffMs < month) return `${Math.floor(diffMs / week)} week${Math.floor(diffMs / week) > 1 ? "s" : ""} ago`;
  return `${Math.floor(diffMs / month)} month${Math.floor(diffMs / month) > 1 ? "s" : ""} ago`;
}

async function loadReviewsFromApi() {
  try {
    const response = await fetch("/api/reviews");
    if (!response.ok) {
      return;
    }

    const payload = await response.json();
    if (!Array.isArray(payload)) {
      return;
    }

    reviewsState = payload.map((review) => ({
      id: review.id,
      name: String(review.name ?? "").trim(),
      text: String(review.text ?? "").trim(),
      rating: clampRating(review.rating),
      createdAt: review.createdAt || new Date().toISOString()
    }));
    renderReviews();
  } catch (error) {
    console.error("Failed to load reviews from API:", error);
  }
}

function renderMenu() {
  const list = document.getElementById("menuList");
  if (!list) return;
  list.innerHTML = MENU.map((section) => {
    const items = section.items
      .map((item) => {
        return `<article class="menu-item">
          <div class="menu-row">
            <b>${escapeHtml(item.name)}</b>
            <i></i>
            <span>${escapeHtml(item.price)}</span>
          </div>
          ${item.desc ? `<p>${escapeHtml(item.desc)}</p>` : ""}
        </article>`;
      })
      .join("");
    return `<section class="menu-category">
      <h4>${escapeHtml(section.category)}</h4>
      ${section.note ? `<p class="note">${escapeHtml(section.note)}</p>` : ""}
      ${items}
    </section>`;
  }).join("");
  list.innerHTML += `<p class="menu-foot">Prices do not include taxes. Thank you for your business.</p>`;
}

function setupMenuOverlay() {
  const overlay = document.getElementById("menuOverlay");
  if (!overlay) return;

  const openButtons = document.querySelectorAll("[data-open-menu]");
  const closeButtons = overlay.querySelectorAll("[data-close-menu]");

  const open = () => {
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  };

  const close = () => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  openButtons.forEach((button) => button.addEventListener("click", open));
  closeButtons.forEach((button) => button.addEventListener("click", close));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("open")) {
      close();
    }
  });
}

function setupReviewForm() {
  const toggle = document.getElementById("reviewToggle");
  const close = document.getElementById("reviewClose");
  const wrap = document.getElementById("reviewWrap");
  const form = document.getElementById("reviewForm");

  if (!toggle || !close || !wrap || !form) return;

  const setState = (open) => {
    wrap.classList.toggle("open", open);
    toggle.textContent = open ? "Cancel Review" : "Leave a Review";
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    setState(!wrap.classList.contains("open"));
  });

  close.addEventListener("click", () => {
    setState(false);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const nameField = form.querySelector('input[name="name"]');
    const ratingField = form.querySelector('select[name="rating"]');
    const reviewField = form.querySelector('textarea[name="review"]');

    if (!submitButton || !nameField || !ratingField || !reviewField) {
      return;
    }

    const payload = {
      name: nameField.value.trim(),
      rating: clampRating(ratingField.value),
      text: reviewField.value.trim()
    };

    if (!payload.name || !payload.text) {
      return;
    }

    submitButton.disabled = true;
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = "Submitting...";

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Review submission failed with ${response.status}`);
      }

      const createdReview = await response.json();
      reviewsState = [
        {
          id: createdReview.id,
          name: createdReview.name,
          text: createdReview.text,
          rating: clampRating(createdReview.rating),
          createdAt: createdReview.createdAt
        },
        ...reviewsState
      ];
      renderReviews();
      form.reset();
      setState(false);
    } catch (error) {
      console.error("Failed to submit review:", error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}

function setupCarouselButtons() {
  const prevButtons = document.querySelectorAll("[data-carousel-prev]");
  const nextButtons = document.querySelectorAll("[data-carousel-next]");

  const getStepSize = (track) => {
    if (!track) return 0;
    const firstCard = track.firstElementChild;
    if (!firstCard) return Math.max(280, track.clientWidth * 0.8);
    const computed = window.getComputedStyle(track);
    const gap = Number.parseFloat(computed.columnGap || computed.gap || "0") || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const trackId = button.getAttribute("data-carousel-prev");
      const track = trackId ? document.getElementById(trackId) : null;
      if (!track) return;
      const step = getStepSize(track);
      track.scrollBy({ left: -step, behavior: "smooth" });
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const trackId = button.getAttribute("data-carousel-next");
      const track = trackId ? document.getElementById(trackId) : null;
      if (!track) return;
      const step = getStepSize(track);
      track.scrollBy({ left: step, behavior: "smooth" });
    });
  });
}

function setupYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

async function init() {
  renderFeatured();
  renderReviews();
  renderMenu();
  setupMenuOverlay();
  setupReviewForm();
  setupCarouselButtons();
  setupYear();
  await loadReviewsFromApi();
}

init();
