class store {
  data;

  constructor(initialData) {
    this.data = { data: initialData, lastUpdatedAt: Date.now() };
  }
  getData() {
    return this.data;
  }
  updateData(newData) {
    this.data = { data: newData, lastUpdatedAt: Date.now() };
  }
}

module.exports = store;
