module.exports = {
  rate: {
    time: 10, // in minute
    limit: 100, // limitation on that amount of time
  },
  cron: {
    weather: "*/5 * * * *",
    news: "*/15 * * * *",
  },
};
