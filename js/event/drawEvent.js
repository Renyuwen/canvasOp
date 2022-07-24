function svgDomDown(e) {
	hidePoints()
	const { clientX, clientY } = e
	downX = clientX
	downY = clientY
	if (toolType === 'rect') {
		let rect = new Rect(downX, downY, 0, 0, 5, '#000')
		rectArr.map(rect => {
			rect.current = false
			return rect
		})
		rect.current = true
		rectArr.push(rect)
		svgDom.addEventListener('mousemove', drawRectMove)
		svgDom.addEventListener('mouseup', drawRectUp)
	} else if (toolType === 'ellipse') {
		let ellipse = new Ellipse(downX, downX, 0, 0, 5, '#000')
		ellipseArr.map(ellipse => {
			ellipse.current = false
			return ellipse
		})
		ellipse.current = true
		ellipseArr.push(ellipse)
		svgDom.addEventListener('mousemove', drawEllipseMove)
		svgDom.addEventListener('mouseup', drawEllipseUp)
	}
	
}

function drawRectMove(e) {
	const { clientX, clientY } = e
 	const offsetX = clientX - downX
	const offsetY = clientY - downY
	const rect = rectArr.find(rect => rect.current)
	const oldRectDom = document.getElementById(rect.id)
	if (oldRectDom) {
		svg.removeChild(oldRectDom)
	}
	if (offsetX < 0) {
		rect.x = clientX
		rect.width = -offsetX
	} else {
		rect.width = offsetX
	}
	if (offsetY < 0) {
		rect.y = clientY
		rect.height = -offsetY
	} else {
		rect.height = offsetY
	}
	const rectDom = svg.drawRect(rect)
	rectDom.addEventListener('mousedown', rectDomDown)
	svg.appendChild(rectDom)
}
function drawRectUp() {
	svgDom.removeEventListener('mousemove', drawRectMove)
}

function drawEllipseMove(e) {
	const { clientX, clientY } = e
 	const offsetX = clientX - downX
	const offsetY = clientY - downY
	const ellipse = ellipseArr.find(ellipse => ellipse.current)
	const oldEllipseDom = document.getElementById(ellipse.id)
	if (oldEllipseDom) {
		svg.removeChild(oldEllipseDom)
	}
	if (offsetX < 0) {
		ellipse.cx = downX + offsetX / 2
	} else {
		ellipse.cx = downX + offsetX / 2
	}
	ellipse.rx = Math.abs(offsetX / 2)
	if (offsetY < 0) {
		ellipse.cy = downY + offsetY / 2
	} else {
		ellipse.cy = downY + offsetY / 2
	}
	ellipse.ry = Math.abs(offsetY / 2)
	const ellipseDom = svg.drawEllipse(ellipse)
	ellipseDom.addEventListener('mousedown', ellipseDomDown)
	svg.appendChild(ellipseDom)
}

function drawEllipseUp() {
	svgDom.removeEventListener('mousemove', drawEllipseMove)
}