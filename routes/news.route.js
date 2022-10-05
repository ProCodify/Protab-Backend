const httpError = require("../error/httpError");
const router = require("express").Router();
const newsController = require("../controllers/news.controller");

router.get("/", async (req, res, next) => {
  try {
    const { type, limit } = req.query;
    let news;
    if (type === "IN") news = await newsController.getInternationalNews(limit);
    else if (type === "LC") news = await newsController.getLocalNews(limit);
    else httpError("Invalid type query", 400);
    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
