const store = require("./store");

const newsStore = new store({ local: [], international: [] });

module.exports = newsStore;
