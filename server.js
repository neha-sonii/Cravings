const express = require("express");
const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, "data");
const REVIEWS_FILE = path.join(DATA_DIR, "reviews.json");

const SEED_REVIEWS = [
  {
    id: crypto.randomUUID(),
    name: "Michael R.",
    rating: 5,
    text: "The Gut Shot burger is absolutely unreal. Hands down the best late-night food I have ever had. Massive portions and the meat actually tastes fresh.",
    createdAt: "2026-02-19T08:00:00.000Z"
  },
  {
    id: crypto.randomUUID(),
    name: "Sarah T.",
    rating: 5,
    text: "Ordered the Jackpot Platter for a group after a night out. It was absurd in the best way possible. The dry ribs and mac and cheese bites were stars.",
    createdAt: "2026-02-05T08:00:00.000Z"
  },
  {
    id: crypto.randomUUID(),
    name: "David L.",
    rating: 4,
    text: "Saved my life at 3 AM. The poutine is incredible, real cheese curds and super rich gravy. Deducting one star only because I was too full to finish it.",
    createdAt: "2026-02-12T08:00:00.000Z"
  },
  {
    id: crypto.randomUUID(),
    name: "Emma W.",
    rating: 5,
    text: "The spicy chicken wrap hits different when you are craving something with a kick. Love that they are open till 4am on weekends.",
    createdAt: "2026-01-05T08:00:00.000Z"
  }
];

app.use(express.json({ limit: "100kb" }));

app.get("/api/reviews", async (_req, res) => {
  try {
    const reviews = await readReviews();
    res.json(sortReviews(reviews));
  } catch (error) {
    console.error("Failed to read reviews:", error);
    res.status(500).json({ error: "Failed to load reviews" });
  }
});

app.post("/api/reviews", async (req, res) => {
  const name = normalizeString(req.body?.name);
  const text = normalizeString(req.body?.text);
  const rating = Number.parseInt(String(req.body?.rating ?? ""), 10);

  if (!name || name.length > 80) {
    return res.status(400).json({ error: "Name is required and must be 80 characters or fewer." });
  }

  if (!text || text.length > 1000) {
    return res.status(400).json({ error: "Review text is required and must be 1000 characters or fewer." });
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Rating must be a number from 1 to 5." });
  }

  const review = {
    id: crypto.randomUUID(),
    name,
    rating,
    text,
    createdAt: new Date().toISOString()
  };

  try {
    const reviews = await readReviews();
    reviews.unshift(review);
    await writeReviews(reviews);
    res.status(201).json(review);
  } catch (error) {
    console.error("Failed to save review:", error);
    res.status(500).json({ error: "Failed to save review" });
  }
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Cravings server running at http://localhost:${PORT}`);
});

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function sortReviews(reviews) {
  return [...reviews].sort((a, b) => {
    const aTime = Number(new Date(a.createdAt));
    const bTime = Number(new Date(b.createdAt));
    return bTime - aTime;
  });
}

async function ensureReviewsFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(REVIEWS_FILE);
  } catch {
    await fs.writeFile(REVIEWS_FILE, JSON.stringify(SEED_REVIEWS, null, 2), "utf8");
  }
}

async function readReviews() {
  await ensureReviewsFile();
  const content = await fs.readFile(REVIEWS_FILE, "utf8");
  const parsed = JSON.parse(content);
  if (!Array.isArray(parsed)) {
    return [];
  }
  return parsed.filter((review) => typeof review === "object" && review !== null);
}

async function writeReviews(reviews) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(REVIEWS_FILE, JSON.stringify(reviews, null, 2), "utf8");
}
