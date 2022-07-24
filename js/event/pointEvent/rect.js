//#region leftTop
function pointLTDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const pointId = target.getAttribute('id')
	const point = pointArr.find(point => pointId === point.id)
	pointArr.map(point => {
		point.current = false
		return point
	})
	point.current = true
	const rectId = point.rectId
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	originX = point.cx
	originY = point.cy
	originWidth = rect.width
	originHeight = rect.height
	svgDom.addEventListener('mousemove', pointLTDomMove)
	svgDom.addEventListener('mouseup', pointLTDomUp)
}
function pointLTDomMove(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换rect
	const rect = rectArr.find(rect => rect.current)
	if (originWidth - offsetX > rect.minWidth) {
		point.setLocation(originX + offsetX, undefined)
		rect.width = originWidth - offsetX
		rect.x = originX + offsetX
	} else {
		rect.width = rect.minWidth
	}
	if (originHeight - offsetY > rect.minHeight) {
		point.setLocation(undefined, originY + offsetY)
		rect.height = originHeight - offsetY
		rect.y = originY + offsetY
	} else {
		rect.height = rect.minHeight
	}
	svg.movePoint(point)
	svg.translateRect(rect)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveOtherPoints(rect, otherPoints)
}
function pointLTDomUp() {
	svgDom.removeEventListener('mousemove', pointLTDomMove)
}
//#endregion

//#region leftCenter
function pointLCDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const pointId = target.getAttribute('id')
	const point = pointArr.find(point => pointId === point.id)
	pointArr.map(point => {
		point.current = false
		return point
	})
	point.current = true
	const rectId = point.rectId
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	originX = point.cx
	originY = point.cy
	originWidth = rect.width
	svgDom.addEventListener('mousemove', pointLCDomMove)
	svgDom.addEventListener('mouseup', pointLCDomUp)
}
function pointLCDomMove(e) {
	const { clientX } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	// 变换rect
	const rect = rectArr.find(rect => rect.current)
	if (originWidth - offsetX > rect.minWidth) {
		point.setLocation(originX + offsetX, undefined)
		rect.width = originWidth - offsetX
		rect.x = originX + offsetX
	} else {
		rect.width = rect.minWidth
	}
	svg.movePoint(point)
	svg.translateRect(rect)
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveOtherPoints(rect, otherPoints)
}
function pointLCDomUp() {
	svgDom.removeEventListener('mousemove', pointLCDomMove)
}
//#endregion

//#region leftBottom
function pointLBDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const pointId = target.getAttribute('id')
	const point = pointArr.find(point => pointId === point.id)
	pointArr.map(point => {
		point.current = false
		return point
	})
	point.current = true
	const rectId = point.rectId
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	originX = point.cx
	originY = point.cy
	originWidth = rect.width
	originHeight = rect.height
	svgDom.addEventListener('mousemove', pointLBDomMove)
	svgDom.addEventListener('mouseup', pointLBDomUp)
}
function pointLBDomMove(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换rect
	const rect = rectArr.find(rect => rect.current)
	if (originWidth - offsetX > rect.minWidth) {
		point.setLocation(originX + offsetX, undefined)
		rect.width = originWidth - offsetX
		rect.x = originX + offsetX
	} else {
		rect.width = rect.minWidth
	}
	if (originHeight + offsetY > rect.minHeight) {
		point.setLocation(undefined, originY + offsetY)
		rect.height = originHeight + offsetY
	} else {
		rect.height = rect.minHeight
	}
	svg.movePoint(point)
	svg.translateRect(rect)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveOtherPoints(rect, otherPoints)
}
function pointLBDomUp() {
	svgDom.removeEventListener('mousemove', pointLBDomMove)
}
//#endregion

//#region topCenter
function pointTCDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const pointId = target.getAttribute('id')
	const point = pointArr.find(point => pointId === point.id)
	pointArr.map(point => {
		point.current = false
		return point
	})
	point.current = true
	const rectId = point.rectId
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	originX = point.cx
	originY = point.cy
	originWidth = rect.width
	originHeight = rect.height
	svgDom.addEventListener('mousemove', pointTCDomMove)
	svgDom.addEventListener('mouseup', pointTCDomUp)
}
function pointTCDomMove(e) {
	const { clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetY = clientY - downY
	// 变换rect
	const rect = rectArr.find(rect => rect.current)
	if (originHeight - offsetY > rect.minHeight) {
		point.setLocation(undefined, originY + offsetY)
		rect.y = originY + offsetY
		rect.height = originHeight - offsetY
	} else {
		rect.height = rect.minHeight
	}
	svg.movePoint(point)
	svg.translateRect(rect)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveOtherPoints(rect, otherPoints)
}
function pointTCDomUp() {
	svgDom.removeEventListener('mousemove', pointTCDomMove)
}
//#endregion

//#region rightTop
function pointRTDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const pointId = target.getAttribute('id')
	const point = pointArr.find(point => pointId === point.id)
	pointArr.map(point => {
		point.current = false
		return point
	})
	point.current = true
	const rectId = point.rectId
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	originX = point.cx
	originY = point.cy
	originWidth = rect.width
	originHeight = rect.height
	svgDom.addEventListener('mousemove', pointRTDomMove)
	svgDom.addEventListener('mouseup', pointRTDomUp)
}
function pointRTDomMove(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换rect
	const rect = rectArr.find(rect => rect.current)
	if (originWidth + offsetX > rect.minWidth) {
		point.setLocation(originX + offsetX, undefined)
		rect.width = originWidth + offsetX
	} else {
		rect.width = rect.minWidth
	}
	if (originHeight - offsetY > rect.minHeight) {
		point.setLocation(undefined, originY + offsetY)
		rect.height = originHeight - offsetY
		rect.y = originY + offsetY
	} else {
		rect.height = rect.minHeight
	}
	svg.movePoint(point)
	svg.translateRect(rect)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveOtherPoints(rect, otherPoints)
}
function pointRTDomUp() {
	svgDom.removeEventListener('mousemove', pointRTDomMove)
}
//#endregion

//#region rightCenter
function pointRCDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const pointId = target.getAttribute('id')
	const point = pointArr.find(point => pointId === point.id)
	pointArr.map(point => {
		point.current = false
		return point
	})
	point.current = true
	const rectId = point.rectId
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	originX = point.cx
	originY = point.cy
	originWidth = rect.width
	originHeight = rect.height
	svgDom.addEventListener('mousemove', pointRCDomMove)
	svgDom.addEventListener('mouseup', pointRCDomUp)
}
function pointRCDomMove(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换rect
	const rect = rectArr.find(rect => rect.current)
	if (originWidth + offsetX > rect.minWidth) {
		point.setLocation(originX + offsetX, undefined)
		rect.width = originWidth + offsetX
	} else {
		rect.width = rect.minWidth
	}
	svg.movePoint(point)
	svg.translateRect(rect)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveOtherPoints(rect, otherPoints)
}
function pointRCDomUp() {
	svgDom.removeEventListener('mousemove', pointRCDomMove)
}
//#endregion

//#region rightBottom
function pointRBDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const pointId = target.getAttribute('id')
	const point = pointArr.find(point => pointId === point.id)
	pointArr.map(point => {
		point.current = false
		return point
	})
	point.current = true
	const rectId = point.rectId
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	originX = point.cx
	originY = point.cy
	originWidth = rect.width
	originHeight = rect.height
	svgDom.addEventListener('mousemove', pointRBDomMove)
	svgDom.addEventListener('mouseup', pointRBDomUp)
}
function pointRBDomMove(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换rect
	const rect = rectArr.find(rect => rect.current)
	if (originWidth + offsetX > rect.minWidth) {
		point.setLocation(originX + offsetX, undefined)
		rect.width = originWidth + offsetX
	} else {
		rect.width = rect.minWidth
	}
	if (originHeight + offsetY > rect.minHeight) {
		point.setLocation(undefined, originY + offsetY)
		rect.height = originHeight + offsetY
	} else {
		rect.height = rect.minHeight
	}
	svg.movePoint(point)
	svg.translateRect(rect)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveOtherPoints(rect, otherPoints)
}
function pointRBDomUp() {
	svgDom.removeEventListener('mousemove', pointRBDomMove)
}
//#endregion

//#region bottomCenter
function pointBCDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const pointId = target.getAttribute('id')
	const point = pointArr.find(point => pointId === point.id)
	pointArr.map(point => {
		point.current = false
		return point
	})
	point.current = true
	const rectId = point.rectId
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	originX = point.cx
	originY = point.cy
	originHeight = rect.height
	svgDom.addEventListener('mousemove', pointBCDomMove)
	svgDom.addEventListener('mouseup', pointBCDomUp)
}
function pointBCDomMove(e) {
	const { clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetY = clientY - downY
	// 变换rect
	const rect = rectArr.find(rect => rect.current)
	if (originHeight + offsetY > rect.minHeight) {
		point.setLocation(undefined, originY + offsetY)
		rect.height = originHeight + offsetY
	} else {
		rect.height = rect.minHeight
	}
	svg.movePoint(point)
	svg.translateRect(rect)
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveOtherPoints(rect, otherPoints)
}
function pointBCDomUp() {
	svgDom.removeEventListener('mousemove', pointBCDomMove)
}