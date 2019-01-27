import Vue from 'vue'

class Breakpoint {
  constructor (options = {}) {
    Object.assign(this, {
      thresholds: {
        xs: [0, 768],
        sm: [768, 992],
        md: [992, 1200],
        lg: [1200, 1920],
        xl: [1920, Infinity]
      }
    }, options)
  }

  is (sizeName) {
    const min = this.thresholds[sizeName][0]
    const max = this.thresholds[sizeName][1]
    return window.innerWidth >= min && window.innerWidth < max
  }
  isAndDown (sizeName) {
    const max = this.thresholds[sizeName][1]
    return window.innerWidth < max
  }
  isAndUp (sizeName) {
    const min = this.thresholds[sizeName][0]
    return window.innerWidth >= min
  }
  curSize () {
    for (const sizeName in this.thresholds) {
      if (this.is(sizeName)) {
        return sizeName
      }
    }
  }
}

Vue.prototype.$breakpoint = new Breakpoint()
