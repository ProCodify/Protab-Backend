const router = require("express").Router();
const newsController = require("../controllers/news.controller");
router.get("/", async (_req, res, next) => {
  try {
    const news = await newsController.getInternationalNews();

    res.status(200).json({ news });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
