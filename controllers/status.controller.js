const formatDistanceToNow = require("date-fns/formatDistanceToNow");
const createdAt = Date.now();

const getStatus = () => {
  return {
    data: { status: "running" },
    createdTimestamp: createdAt,
    createdTimestampRelative: formatDistanceToNow(createdAt),
  };
};

module.exports = {
  getStatus,
};
