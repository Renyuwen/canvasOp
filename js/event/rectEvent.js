function rectDomDown(e) {
	e.stopPropagation()
	const { clientX, clientY, target } = e
	downX = clientX
	downY = clientY
	const rectId = target.getAttribute('id')
	const rect = rectArr.find(rect => rect.id === rectId)
	rectArr.map(rect => {
		rect.current = false
		return rect
	})
	rect.current = true
	// 选中 则重新渲染此rect，并显示控制点
	const rectDom = document.getElementById(rect.id)
	svg.removeChild(rectDom)
	const newRectDom = svg.drawRect(rect)
	newRectDom.addEventListener('mousedown', rectDomDown)
	svg.appendChild(newRectDom)
	showRectPoints(rect)

	originX = rect.x
	originY = rect.y
	svgDom.addEventListener('mousemove', rectDomMove)
	svgDom.addEventListener('mouseup', rectDomUp)
	svgDom.addEventListener('mouseout', rectDomUp)
}
function rectDomMove(e) {
	const { clientX, clientY } = e
	const rect = rectArr.find(rect => rect.current)
	const offsetX = clientX - downX
	const offsetY = clientY - downY
	rect.setLocation(originX + offsetX, originY + offsetY)
	svg.moveRect(rect)
	svg.moveRectOtherPoints(rect, pointArr)
}
function rectDomUp() {
	svgDom.removeEventListener('mousemove', rectDomMove)
}