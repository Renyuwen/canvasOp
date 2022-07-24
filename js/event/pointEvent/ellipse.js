//#region leftTop
function pointLTDomDownE(e) {
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
	const ellipseId = point.ellipseId
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	originX = point.cx
	originY = point.cy
	originWidth = ellipse.rx
	originHeight = ellipse.ry
	svgDom.addEventListener('mousemove', pointLTDomMoveE)
	svgDom.addEventListener('mouseup', pointLTDomUpE)
}
function pointLTDomMoveE(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换ellipse
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
  if (originWidth - offsetX > 0) {
    point.cx = originX + offsetX
    ellipse.rx = originWidth - offsetX
  } else {
    ellipse.rx = 0
  }
	if (originHeight - offsetY > 0) {
    point.cy = originY + offsetY
    ellipse.ry = originHeight - offsetY
  } else {
    ellipse.ry = 0
  }
	svg.movePoint(point)
	svg.translateEllipse(ellipse)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveEllipseOtherPoints(ellipse, otherPoints)
  moveDashLine(ellipse)
}
function pointLTDomUpE() {
	svgDom.removeEventListener('mousemove', pointLTDomMoveE)
}
//#endregion

//#region leftCenter
function pointLCDomDownE(e) {
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
	const ellipseId = point.ellipseId
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	originX = point.cx
	originY = point.cy
	originWidth = ellipse.rx
	originHeight = ellipse.ry
	svgDom.addEventListener('mousemove', pointLCDomMoveE)
	svgDom.addEventListener('mouseup', pointLCDomUpE)
}
function pointLCDomMoveE(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换ellipse
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
  if (originWidth - offsetX > 0) {
    point.cx = originX + offsetX
    ellipse.rx = originWidth - offsetX
  } else {
    ellipse.rx = 0
  }
	svg.movePoint(point)
	svg.translateEllipse(ellipse)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveEllipseOtherPoints(ellipse, otherPoints)
  moveDashLine(ellipse)
}
function pointLCDomUpE() {
	svgDom.removeEventListener('mousemove', pointLCDomMoveE)
}
//#endregion

//#region leftBottom
function pointLBDomDownE(e) {
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
	const ellipseId = point.ellipseId
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	originX = point.cx
	originY = point.cy
	originWidth = ellipse.rx
	originHeight = ellipse.ry
	svgDom.addEventListener('mousemove', pointLBDomMoveE)
	svgDom.addEventListener('mouseup', pointLBDomUpE)
}
function pointLBDomMoveE(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换ellipse
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
  if (originWidth - offsetX > 0) {
    point.cx = originX + offsetX
    ellipse.rx = originWidth - offsetX
  } else {
    ellipse.rx = 0
  }
	if (originHeight + offsetY > 0) {
    point.cy = originY + offsetY
    ellipse.ry = originHeight + offsetY
  } else {
    ellipse.ry = 0
  }
	svg.movePoint(point)
	svg.translateEllipse(ellipse)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveEllipseOtherPoints(ellipse, otherPoints)
  moveDashLine(ellipse)
}
function pointLBDomUpE() {
	svgDom.removeEventListener('mousemove', pointLBDomMoveE)
}
//#endregion

//#region topCenter
function pointTCDomDownE(e) {
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
	const ellipseId = point.ellipseId
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	originX = point.cx
	originY = point.cy
	originWidth = ellipse.rx
	originHeight = ellipse.ry
	svgDom.addEventListener('mousemove', pointTCDomMoveE)
	svgDom.addEventListener('mouseup', pointTCDomUpE)
}
function pointTCDomMoveE(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换ellipse
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
	if (originHeight - offsetY > 0) {
    point.cy = originY + offsetY
    ellipse.ry = originHeight - offsetY
  } else {
    ellipse.ry = 0
  }
	svg.movePoint(point)
	svg.translateEllipse(ellipse)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveEllipseOtherPoints(ellipse, otherPoints)
  moveDashLine(ellipse)
}
function pointTCDomUpE() {
	svgDom.removeEventListener('mousemove', pointTCDomMoveE)
}
//#endregion

//#region rightTop
function pointRTDomDownE(e) {
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
	const ellipseId = point.ellipseId
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	originX = point.cx
	originY = point.cy
	originWidth = ellipse.rx
	originHeight = ellipse.ry
	svgDom.addEventListener('mousemove', pointRTDomMoveE)
	svgDom.addEventListener('mouseup', pointRTDomUpE)
}
function pointRTDomMoveE(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换ellipse
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
  if (originWidth + offsetX > 0) {
    point.cx = originX + offsetX
    ellipse.rx = originWidth + offsetX
  } else {
    ellipse.rx = 0
  }
	if (originHeight - offsetY > 0) {
    point.cy = originY + offsetY
    ellipse.ry = originHeight - offsetY
  } else {
    ellipse.ry = 0
  }
	svg.movePoint(point)
	svg.translateEllipse(ellipse)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveEllipseOtherPoints(ellipse, otherPoints)
  moveDashLine(ellipse)
}
function pointRTDomUpE() {
	svgDom.removeEventListener('mousemove', pointRTDomMoveE)
}
//#endregion

//#region rightCenter
function pointRCDomDownE(e) {
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
	const ellipseId = point.ellipseId
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	originX = point.cx
	originY = point.cy
	originWidth = ellipse.rx
	originHeight = ellipse.ry
	svgDom.addEventListener('mousemove', pointRCDomMoveE)
	svgDom.addEventListener('mouseup', pointRCDomUpE)
}
function pointRCDomMoveE(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换ellipse
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
  if (originWidth + offsetX > 0) {
    point.cx = originX + offsetX
    ellipse.rx = originWidth + offsetX
  } else {
    ellipse.rx = 0
  }
	svg.movePoint(point)
	svg.translateEllipse(ellipse)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveEllipseOtherPoints(ellipse, otherPoints)
  moveDashLine(ellipse)
}
function pointRCDomUpE() {
	svgDom.removeEventListener('mousemove', pointRCDomMoveE)
}
//#endregion

//#region rightBottom
function pointRBDomDownE(e) {
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
	const ellipseId = point.ellipseId
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	originX = point.cx
	originY = point.cy
	originWidth = ellipse.rx
	originHeight = ellipse.ry
	svgDom.addEventListener('mousemove', pointRBDomMoveE)
	svgDom.addEventListener('mouseup', pointRBDomUpE)
}
function pointRBDomMoveE(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换ellipse
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
  if (originWidth + offsetX > 0) {
    point.cx = originX + offsetX
    ellipse.rx = originWidth + offsetX
  } else {
    ellipse.rx = 0
  }
	if (originHeight + offsetY > 0) {
    point.cy = originY + offsetY
    ellipse.ry = originHeight + offsetY
  } else {
    ellipse.ry = 0
  }
	svg.movePoint(point)
	svg.translateEllipse(ellipse)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveEllipseOtherPoints(ellipse, otherPoints)
  moveDashLine(ellipse)
}
function pointRBDomUpE() {
	svgDom.removeEventListener('mousemove', pointRBDomMoveE)
}
//#endregion

//#region bottomCenter
function pointBCDomDownE(e) {
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
	const ellipseId = point.ellipseId
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	originX = point.cx
	originY = point.cy
	originWidth = ellipse.rx
	originHeight = ellipse.ry
	svgDom.addEventListener('mousemove', pointBCDomMoveE)
	svgDom.addEventListener('mouseup', pointBCDomUpE)
}
function pointBCDomMoveE(e) {
	const { clientX, clientY } = e
	const point = pointArr.find(point => point.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	// 变换ellipse
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
	if (originHeight + offsetY > 0) {
    point.cy = originY + offsetY
    ellipse.ry = originHeight + offsetY
  } else {
    ellipse.ry = 0
  }
	svg.movePoint(point)
	svg.translateEllipse(ellipse)
	// 同时更改其他点的坐标
	const otherPoints = pointArr.filter(p => p.id !== point.id)
	svg.moveEllipseOtherPoints(ellipse, otherPoints)
  moveDashLine(ellipse)
}
function pointBCDomUpE() {
	svgDom.removeEventListener('mousemove', pointBCDomMoveE)
}