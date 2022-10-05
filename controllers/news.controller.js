const newsService = require("../services/news.service");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");

const app = require("../app/app");
const getLocalNews = async (length = 5) => {
  let newsData = await newsService.getNews({ type: "LC" });

  return {
    news: newsData.splice(0, length),
    // lastUpdatedAt: formatDistanceToNow(localStore.lastUpdatedAt),
  };
};

const getInternationalNews = async (length = 5) => {
  let newsData = await newsService.getNews({ type: "IN" });

  return {
    news: newsData.splice(0, length),
    // lastUpdatedAt: formatDistanceToNow(newsData.lastUpdatedAt),
  };
};
module.exports = { getInternationalNews, getLocalNews };
