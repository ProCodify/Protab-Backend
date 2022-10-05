class store {
  data = {};

  constructor(initialData) {
    this.data = { ...initialData, lastUpdatedAt: Date.now() };
  }
  getData() {
    return this.data;
  }
  updateData(newData) {
    this.data = { ...this.data, ...newData, lastUpdatedAt: Date.now() };
  }
}

module.exports = store;
