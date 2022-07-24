class Ellipse {
  constructor(cx, cy, rx, ry, strokeWidth, strokeColor) {
    this.id = uuid()
    this.cx = cx
    this.cy = cy
    this.rx = rx
    this.ry = ry
    this.strokeWidth = strokeWidth
    this.strokeColor = strokeColor
    this.current = false
  }

  setLocation(cx, cy) {
    this.cx = cx
    this.cy = cy
  }

  setStrokeWidth(strokeWidth) {
		this.strokeWidth = strokeWidth
	}

	setStrokeColor(strokeColor) {
		this.strokeColor = strokeColor
	}
}