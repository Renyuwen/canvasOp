function ellipseDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const ellipseId = target.getAttribute('id')
	const ellipse = ellipseArr.find(ellipse => ellipse.id === ellipseId)
	ellipseArr.map(ellipse => {
		ellipse.current = false
		return ellipse
	})
	ellipse.current = true
	// 选中 则重新渲染此ellipse，并显示控制点
	const ellipseDom = document.getElementById(ellipse.id)
	svg.removeChild(ellipseDom)
	const newEllipseDom = svg.drawEllipse(ellipse)
	newEllipseDom.addEventListener('mousedown', ellipseDomDown)
	svg.appendChild(newEllipseDom)
	showEllipsePoints(ellipse)

	originX = ellipse.cx
	originY = ellipse.cy
	svgDom.addEventListener('mousemove', ellipseDomMove)
	svgDom.addEventListener('mouseup', ellipseDomUp)
	svgDom.addEventListener('mouseout', ellipseDomUp)
}
function ellipseDomMove(e) {
	const { clientX, clientY } = e
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	ellipse.setLocation(originX + offsetX, originY + offsetY)
	svg.moveEllipse(ellipse)
	svg.moveEllipseOtherPoints(ellipse, pointArr)
	moveDashLine(ellipse)
}
function ellipseDomUp() {
	svgDom.removeEventListener('mousemove', ellipseDomMove)
}