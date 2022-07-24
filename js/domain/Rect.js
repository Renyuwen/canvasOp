class Rect {
	constructor(x, y, width, height, strokeWidth, strokeColor) {
		this.id = uuid()
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.strokeColor = strokeColor
		this.strokeWidth = strokeWidth
		this.minWidth = 0
		this.minHeight = 0
		this.current = false
	}

	setLocation(x, y) {
		this.x = x
		this.y = y
	}

	setStrokeWidth(strokeWidth) {
		this.strokeWidth = strokeWidth
	}

	setStrokeColor(strokeColor) {
		this.strokeColor = strokeColor
	}
}