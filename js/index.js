const rectArr = []
const ellipseArr = []
let pointArr = []

let toolType = 'none'

let downX = 0
let downY = 0
let originX = 0
let originY = 0
let originWidth = 0
let originHeight = 0

const svg = new SVG()
svg.init('100%', '100%')
const svgDom = document.querySelector('svg')
svgDom.addEventListener('mousedown', svgDomDown)

const tools = document.querySelector('.tools')
tools.addEventListener('click', chooseTool)

const directArr = [
  'leftTop', 'leftCenter', 'leftBottom', 'topCenter', 'rightTop', 'rightCenter', 'rightBottom', 'bottomCenter'
]
directArr.forEach(direct => {
  const point = new Point(direct)
  pointArr.push(point)
})

function showRectPoints (rect) {
  hidePoints()
  pointArr.forEach(point => {
    let pointDom
    const direct = point.direct
    switch (direct) {
      case 'leftTop':
        // 判断是否已存在
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          point.cx = rect.x
          point.cy = rect.y
          point.rectId = rect.id
          pointDom = svg.drawRectPoint(point)
          pointDom.addEventListener('mousedown', pointLTDomDown)
          svg.appendChild(pointDom)
        }
        break;
      case 'leftCenter':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { x, y, width, height } = rect
          point.cx = x
          point.cy = y + height / 2
          point.rectId = rect.id
          pointDom = svg.drawRectPoint(point)
          pointDom.addEventListener('mousedown', pointLCDomDown)
          svg.appendChild(pointDom)
        }
        break;
      case 'leftBottom':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { x, y, width, height } = rect
          point.cx = x
          point.cy = y + height
          point.rectId = rect.id
          pointDom = svg.drawRectPoint(point)
          pointDom.addEventListener('mousedown', pointLBDomDown)
          svg.appendChild(pointDom)
        }
        break;
      case 'topCenter':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { x, y, width, height } = rect
          point.cx = x + width / 2
          point.cy = y
          point.rectId = rect.id
          pointDom = svg.drawRectPoint(point)
          pointDom.addEventListener('mousedown', pointTCDomDown)
          svg.appendChild(pointDom)
        }
        break;
      case 'rightTop':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { x, y, width, height } = rect
          point.cx = x + width
          point.cy = y
          point.rectId = rect.id
          pointDom = svg.drawRectPoint(point)
          pointDom.addEventListener('mousedown', pointRTDomDown)
          svg.appendChild(pointDom)
        }
        break;
      case 'rightCenter':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { x, y, width, height } = rect
          point.cx = x + width
          point.cy = y + height / 2
          point.rectId = rect.id
          pointDom = svg.drawRectPoint(point)
          pointDom.addEventListener('mousedown', pointRCDomDown)
          svg.appendChild(pointDom)
        }
        break;
      case 'rightBottom':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { x, y, width, height } = rect
          point.cx = x + width
          point.cy = y + height
          point.rectId = rect.id
          pointDom = svg.drawRectPoint(point)
          pointDom.addEventListener('mousedown', pointRBDomDown)
          svg.appendChild(pointDom)
        }
        break;
      case 'bottomCenter':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { x, y, width, height } = rect
          point.cx = x + width / 2
          point.cy = y + height
          point.rectId = rect.id
          pointDom = svg.drawRectPoint(point)
          pointDom.addEventListener('mousedown', pointBCDomDown)
          svg.appendChild(pointDom)
        }
        break;
      default:
        break;
    }
  })
  const rectDom = document.getElementById(rect.id)
  rectDom.setAttribute('stroke', 'red')
}

function showEllipsePoints (ellipse) {
  hidePoints()
  showDashLine(ellipse)
  pointArr.forEach(point => {
    let pointDom
    const direct = point.direct
    switch (direct) {
      case 'leftTop':
        // 判断是否已存在
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          point.cx = ellipse.cx - ellipse.rx
          point.cy = ellipse.cy - ellipse.ry
          point.ellipseId = ellipse.id
          pointDom = svg.drawEllipsePoint(point)
          pointDom.addEventListener('mousedown', pointLTDomDownE)
          svg.appendChild(pointDom)
        }
        break;
      case 'leftCenter':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { cx, cy, rx } = ellipse
          point.cx = cx - rx
          point.cy = cy
          point.ellipseId = ellipse.id
          pointDom = svg.drawEllipsePoint(point)
          pointDom.addEventListener('mousedown', pointLCDomDownE)
          svg.appendChild(pointDom)
        }
        break;
      case 'leftBottom':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { cx, cy, rx, ry } = ellipse
          point.cx = cx - rx
          point.cy = cy + ry
          point.rectId = rect.id
          point.ellipseId = ellipse.id
          pointDom = svg.drawEllipsePoint(point)
          pointDom.addEventListener('mousedown', pointLBDomDownE)
          svg.appendChild(pointDom)
        }
        break;
      case 'topCenter':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { cx, cy, ry } = ellipse
          point.cx = cx
          point.cy = cy - ry
          point.ellipseId = ellipse.id
          pointDom = svg.drawEllipsePoint(point)
          pointDom.addEventListener('mousedown', pointTCDomDownE)
          svg.appendChild(pointDom)
        }
        break;
      case 'rightTop':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { cx, cy, rx, ry } = ellipse
          point.cx = cx + rx
          point.cy = cy - ry
          point.ellipseId = ellipse.id
          pointDom = svg.drawEllipsePoint(point)
          pointDom.addEventListener('mousedown', pointRTDomDownE)
          svg.appendChild(pointDom)
        }
        break;
      case 'rightCenter':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { cx, cy, rx } = ellipse
          point.cx = cx + rx
          point.cy = cy
          point.rectId = rect.id
          point.ellipseId = ellipse.id
          pointDom = svg.drawEllipsePoint(point)
          pointDom.addEventListener('mousedown', pointRCDomDownE)
          svg.appendChild(pointDom)
        }
        break;
      case 'rightBottom':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { cx, cy, rx, ry } = ellipse
          point.cx = cx + rx
          point.cy = cy + ry
          point.ellipseId = ellipse.id
          pointDom = svg.drawEllipsePoint(point)
          pointDom.addEventListener('mousedown', pointRBDomDownE)
          svg.appendChild(pointDom)
        }
        break;
      case 'bottomCenter':
        pointDom = document.getElementById(point.id)
        if (!pointDom) {
          const { cx, cy, ry } = ellipse
          point.cx = cx
          point.cy = cy + ry
          point.ellipseId = ellipse.id
          pointDom = svg.drawEllipsePoint(point)
          pointDom.addEventListener('mousedown', pointBCDomDownE)
          svg.appendChild(pointDom)
        }
        break;
      default:
        break;
    }
  })
  const ellipseDom = document.getElementById(ellipse.id)
  ellipseDom.setAttribute('stroke', 'red')
}

function showDashLine(ellipse) {
  const { cx, cy, rx, ry } = ellipse
  const x = cx - rx
  const y = cy - ry
  const width = rx * 2
  const height = ry * 2
  const rectDashDom = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rectDashDom.style.pointerEvents = 'none'
  rectDashDom.setAttribute('id', 'rectDash')
  rectDashDom.setAttribute('stroke-dasharray', 2)
  rectDashDom.setAttribute('x', x)
  rectDashDom.setAttribute('y', y)
  rectDashDom.setAttribute('width', width)
  rectDashDom.setAttribute('height', height)
  rectDashDom.setAttribute('strokeWidth', 2)
  rectDashDom.setAttribute('stroke', '#DD444C')
  rectDashDom.setAttribute('fill', 'transparent')
  svg.appendChild(rectDashDom)
}
function hideDashLine() {
  const rectDash = document.getElementById('rectDash')
  if (rectDash) svg.removeChild(rectDash)
}
function moveDashLine(ellipse) {
  const rectDashDom = document.getElementById('rectDash')
  const { cx, cy, rx, ry } = ellipse
  const x = cx - rx
  const y = cy - ry
  const width = rx * 2
  const height = ry * 2
  rectDashDom.setAttribute('x', x)
  rectDashDom.setAttribute('y', y)
  rectDashDom.setAttribute('width', width)
  rectDashDom.setAttribute('height', height)
}

function hidePoints() {
  pointArr.forEach(point => {
    const pointDom = document.getElementById(point.id)
    if (pointDom) {
      svg.removeChild(pointDom)
    }
  })
  hideDashLine()
  rectArr.forEach(rect => {
    const rectDom = document.getElementById(rect.id)
    if (rectDom) {
      rectDom.setAttribute('stroke', rect.strokeColor)
    }
  })
  ellipseArr.forEach(ellipse => {
    const ellipseDom = document.getElementById(ellipse.id)
    if (ellipseDom) {
      ellipseDom.setAttribute('stroke', ellipse.strokeColor)
    }
  })
}
function chooseTool(e) {
  const tool = e.target
  const tools = document.querySelectorAll('.tool-item')
  tools.forEach(tool => {
    tool.classList.remove('active')
  })
  if (tool.getAttribute('id') === 'ellipse') {
    tool.classList.add('active')
    toolType = 'ellipse' 
  } else if (tool.getAttribute('id') === 'rect') {
    tool.classList.add('active')
    toolType = 'rect' 
  } else {
    toolType = 'none'
  }
}

