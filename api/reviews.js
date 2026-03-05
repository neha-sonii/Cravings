const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const crypto = require("node:crypto");

const TMP_REVIEWS_FILE = path.join(os.tmpdir(), "cravings-reviews.json");

const SEED_REVIEWS = [
  {
    id: "cd976db0-749c-45ee-845b-fa3966592959",
    name: "Michael R.",
    rating: 5,
    text: "The Gut Shot burger is absolutely unreal. Hands down the best late-night food I have ever had. Massive portions and the meat actually tastes fresh.",
    createdAt: "2026-02-19T08:00:00.000Z"
  },
  {
    id: "f02655f0-fbd1-4bc3-bc27-1ec9bc42a1f7",
    name: "Sarah T.",
    rating: 5,
    text: "Ordered the Jackpot Platter for a group after a night out. It was absurd in the best way possible. The dry ribs and mac and cheese bites were stars.",
    createdAt: "2026-02-05T08:00:00.000Z"
  },
  {
    id: "90853252-eb2f-4d22-a852-d13eac6f8be5",
    name: "David L.",
    rating: 4,
    text: "Saved my life at 3 AM. The poutine is incredible, real cheese curds and super rich gravy. Deducting one star only because I was too full to finish it.",
    createdAt: "2026-02-12T08:00:00.000Z"
  },
  {
    id: "dcf6283e-ec28-406b-8676-6aaa076b524f",
    name: "Emma W.",
    rating: 5,
    text: "The spicy chicken wrap hits different when you are craving something with a kick. Love that they are open till 4am on weekends.",
    createdAt: "2026-01-05T08:00:00.000Z"
  }
];

module.exports = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "GET, POST, OPTIONS");
    return res.status(204).end();
  }

  if (req.method === "GET") {
    try {
      const reviews = await readReviews();
      return res.status(200).json(sortReviews(reviews));
    } catch (error) {
      console.error("GET /api/reviews failed:", error);
      return res.status(500).json({ error: "Unable to load reviews." });
    }
  }

  if (req.method === "POST") {
    try {
      const body = await getJsonBody(req);
      const name = normalizeString(body.name);
      const text = normalizeString(body.text);
      const rating = Number.parseInt(String(body.rating ?? ""), 10);

      if (!name || name.length > 80) {
        return res.status(400).json({
          error: "Name is required and must be 80 characters or fewer."
        });
      }

      if (!text || text.length > 1000) {
        return res.status(400).json({
          error: "Review text is required and must be 1000 characters or fewer."
        });
      }

      if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        return res.status(400).json({ error: "Rating must be a number from 1 to 5." });
      }

      const review = {
        id: crypto.randomUUID(),
        name,
        text,
        rating,
        createdAt: new Date().toISOString()
      };

      const reviews = await readReviews();
      reviews.unshift(review);
      await writeReviews(reviews);

      return res.status(201).json(review);
    } catch (error) {
      console.error("POST /api/reviews failed:", error);
      return res.status(500).json({ error: "Unable to save review right now." });
    }
  }

  res.setHeader("Allow", "GET, POST, OPTIONS");
  return res.status(405).json({ error: "Method not allowed." });
};

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

async function getJsonBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8").trim();
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function readReviews() {
  try {
    const content = await fs.readFile(TMP_REVIEWS_FILE, "utf8");
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    return [...SEED_REVIEWS];
  }
  return [...SEED_REVIEWS];
}

async function writeReviews(reviews) {
  await fs.writeFile(TMP_REVIEWS_FILE, JSON.stringify(reviews, null, 2), "utf8");
}
