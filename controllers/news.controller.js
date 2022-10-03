const newsService = require("../services/news.service");
const error = require("../error/error");

const getInternationalNews = async () => {
  const news = await newsService.getInternationalNews();

  return news;
};

module.exports = { getInternationalNews };
