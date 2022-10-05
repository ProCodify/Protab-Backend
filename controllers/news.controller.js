const newsService = require("../services/news.service");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");
const { isEmpty } = require("../util/object-utils");
const store = require("../store/news.store");

const updateCache = async () => {
  store.updateData({
    local: await newsService.getNews({ type: "LC" }),
    international: await newsService.getNews({ type: "IN" }),
  });
};

const getLocalNews = async (length = 5) => {
  if (isEmpty(store.data.local)) await updateCache();
  return {
    news: store.data.local.slice(0, length),
    lastUpdatedAt: store.data.lastUpdatedAt,
    lastUpdatedAtRelative: formatDistanceToNow(store.data.lastUpdatedAt),
  };
};

const getInternationalNews = async (length = 5) => {
  if (isEmpty(store.data.international)) await updateCache();

  return {
    international: store.data.international.slice(0, length),
    lastUpdatedAt: store.data.lastUpdatedAt,
    lastUpdatedAtRelative: formatDistanceToNow(store.data.lastUpdatedAt),
  };
};
module.exports = { getInternationalNews, getLocalNews, updateCache };
