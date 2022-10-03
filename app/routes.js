const router = require("express").Router();
const applicationRouter = require("../routes");
router.get("/health", (_req, res) => {
  res.status(200).json({ message: "success" });
});

router.use(applicationRouter);

module.exports = router;
