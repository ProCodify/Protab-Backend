const newsService = require("../services/news.service");
const store = require("../store/news.store");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");

const getInternationalNews = async () => {
  let newsData = store.getData();

  if (!newsData.data.length) {
    let newData = await newsService.getInternationalNews();
    store.updateData(newData);
  }
  newsData = store.getData();

  return {
    news: newsData.data,
    lastUpdatedAt: formatDistanceToNow(newsData.lastUpdatedAt),
  };
};

module.exports = { getInternationalNews };
