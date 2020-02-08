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
    const a = this.items.filter(item => item.quantity > 0)
    const b = a.filter(item => item.pricePerUnit > 0)
    const multipliedItems = b.map(x => x.quantity * x.pricePerUnit)
    const reducedItems = multipliedItems.reduce((accumulator, currentValue) => {
      accumulator + currentValue
      return accumulator + currentValue

    }, 0)
    return reducedItems
  }
}

module.exports = ShoppingCart

// total() {
//   this.getItems()
//   const a = this.items.map()
//   // const b = a.map(this.items.quantity * this.items.pricePerUnit)
//   const c = b.reduce((acc, curr) => acc + curr, 0)
//   return c
// }