class SVG {
	init(width, height) {
		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
		svg.setAttribute('width', width)
		svg.setAttribute('height', height)
		document.body.appendChild(svg)
		return svg
	}
	appendChild(child) {
		const svg = document.querySelector('svg')
		svg.appendChild(child)
	}
	removeChild(child) {
		const svg = document.querySelector('svg')
		svg.removeChild(child)
	}
	drawRect({ id, x, y, width, height, strokeWidth, strokeColor }) {
		const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
		rect.setAttribute('id', id)
		rect.setAttribute('x', x)
		rect.setAttribute('y', y)
		rect.setAttribute('width', width)
		rect.setAttribute('height', height)
		rect.setAttribute('stroke-width', strokeWidth)
		rect.setAttribute('stroke', strokeColor)
		rect.setAttribute('fill', 'transparent')
		return rect
	}
	moveRect(rect) {
		const rectDom = document.getElementById(rect.id)
		rectDom.setAttribute('x', rect.x)
		rectDom.setAttribute('y', rect.y)
	}
	translateRect(rect) {
		const rectDom = document.getElementById(rect.id)
		rectDom.setAttribute('x', rect.x)
		rectDom.setAttribute('y', rect.y)
		rectDom.setAttribute('width', rect.width)
		rectDom.setAttribute('height', rect.height)
	}
	translateEllipse(ellipse) {
		const ellipseDom = document.getElementById(ellipse.id)
		ellipseDom.setAttribute('cx', ellipse.cx)
		ellipseDom.setAttribute('cy', ellipse.cy)
		ellipseDom.setAttribute('rx', ellipse.rx)
		ellipseDom.setAttribute('ry', ellipse.ry)
	}
	drawRectPoint({id, cx, cy, r, rectId}) {
		const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
		circle.setAttribute('id', id)
		circle.setAttribute('cx', cx)
		circle.setAttribute('cy', cy)
		circle.setAttribute('r', r)
		circle.setAttribute('rectid', rectId)
		circle.setAttribute('stroke-width', 1)
		circle.setAttribute('fill', '#fff')
		circle.setAttribute('stroke', 'red')
		return circle
	}
	drawEllipsePoint({id, cx, cy, r, ellipseId}) {
		const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
		circle.setAttribute('id', id)
		circle.setAttribute('cx', cx)
		circle.setAttribute('cy', cy)
		circle.setAttribute('r', r)
		circle.setAttribute('ellipseid', ellipseId)
		circle.setAttribute('stroke-width', 1)
		circle.setAttribute('fill', '#fff')
		circle.setAttribute('stroke', 'red')
		return circle
	}
	movePoint(point) {
		const pointDom = document.getElementById(point.id)
		if (pointDom) {
			pointDom.setAttribute('cx', point.cx)
			pointDom.setAttribute('cy', point.cy)
		}
	}
	moveRectOtherPoints(rect, otherPoints) {
		otherPoints.forEach(p => {
			let cx
			let cy
			const { x, y, width, height } = rect
			if (p.direct === 'leftTop') {
				cx = x
				cy = y
			} else if (p.direct === 'leftCenter') {
				cx = x
				cy = y + height / 2
			} else if (p.direct === 'leftBottom') {
				cx = x
				cy = y + height
			} else if (p.direct === 'topCenter') {
				cx = x + width / 2
				cy = y
			} else if (p.direct === 'rightTop') {
				cx = x + width
				cy = y
			} else if (p.direct === 'rightCenter') {
				cx = x + width
				cy = y + height / 2
			} else if (p.direct === 'rightBottom') {
				cx = x + width
				cy = y + height
			} else if (p.direct === 'bottomCenter') {
				cx = x + width / 2
				cy = y + height
			}
			p.setLocation(cx, cy)
			this.movePoint(p)
		})
	}
	moveEllipseOtherPoints(ellipse, otherPoints) {
		otherPoints.forEach(p => {
			let cx
			let cy
			const { rx, ry } = ellipse
			const ecx = ellipse.cx
			const ecy = ellipse.cy
			if (p.direct === 'leftTop') {
				cx = ecx - rx
				cy = ecy - ry
			} else if (p.direct === 'leftCenter') {
				cx = ecx - rx
				cy = ecy
			} else if (p.direct === 'leftBottom') {
				cx = ecx - rx
				cy = ecy + ry
			} else if (p.direct === 'topCenter') {
				cx = ecx
				cy = ecy - ry
			} else if (p.direct === 'rightTop') {
				cx = ecx + rx
				cy = ecy - ry
			} else if (p.direct === 'rightCenter') {
				cx = ecx + rx
				cy = ecy
			} else if (p.direct === 'rightBottom') {
				cx = ecx + rx
				cy = ecy + ry
			} else if (p.direct === 'bottomCenter') {
				cx = ecx
				cy = ecy + ry
			}
			p.setLocation(cx, cy)
			this.movePoint(p)
		})
	}
	drawEllipse({ id, cx, cy, rx, ry, strokeWidth, strokeColor }) {
		const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
		ellipse.setAttribute('id', id)
		ellipse.setAttribute('cx', cx)
		ellipse.setAttribute('cy', cy)
		ellipse.setAttribute('rx', rx)
		ellipse.setAttribute('ry', ry)
		ellipse.setAttribute('stroke-width', strokeWidth)
		ellipse.setAttribute('stroke', strokeColor)
		ellipse.setAttribute('fill', 'transparent')
		return ellipse
	}
	moveEllipse(ellipse) {
		const ellipseDom = document.getElementById(ellipse.id)
		ellipseDom.setAttribute('cx', ellipse.cx)
		ellipseDom.setAttribute('cy', ellipse.cy)
	}
}