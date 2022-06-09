const prefix = name => `BG-${name}`

export const storage = {
  setItem: (name, item) => {
    localStorage.setItem(prefix(name), JSON.stringify(item))
  },
  getItem: name => {
    const item = localStorage.getItem(prefix(name))
    console.log(item)
    if (item) {
      return JSON.parse(item)
    }
  }
}
