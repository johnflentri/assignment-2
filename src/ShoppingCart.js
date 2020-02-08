class ShoppingCart {
  constructor() {
    this.items = []
  }
  addItem(name, quantity, pricePerUnit) {
    this.items.push({ name, quantity, pricePerUnit })
  }
  getItems() {
    return this.items
  }
  clear() {
    return this.items = []
  }
  total() {
    this.getItems()
    const a = this.items.map()
    // const b = a.map(this.items.quantity * this.items.pricePerUnit)
    const c = b.reduce((acc, curr) => acc + curr, 0)
    return c
  }
}

module.exports = ShoppingCart