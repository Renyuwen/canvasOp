class Point {
  constructor (direct) {
    this.id = uuid()
    this.direct = direct
    this.cx = 0
    this.cy = 0
    this.r = 5
    this.rectId = undefined
    this.current = false
  }

  setLocation (cx, cy) {
    if (cx) {
      this.cx = cx
    }
    if (cy) {
      this.cy = cy
    }
  }
}