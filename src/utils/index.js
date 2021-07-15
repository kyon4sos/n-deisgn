const fabric = require('fabric').fabric;
fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = '#313';
fabric.Object.prototype.cornerStyle = 'circle';
let delta = 0;
let zoom = 1;

const setGuideLine = (canvas, num, d, factor = 1) => {
  const res = [];
  for (let i = 1; i < num; i++) {
    let left = d == 'x' ? 30 * i : 4;
    let top = d == 'x' ? 4 : 30 * i;
    const t = new fabric.Text(String(i * factor), {
      left,
      top,
      hasControls: false,
      lockMovementX: true,
      lockMovementY: true,
      hasBorders: false,
      selectable: false,
      fontSize: '8',
      fill: '#999',
    });
    res.push(t);
    canvas.add(t);
  }
  return res;
};
const getCanvas = (canvasId, { width, height }) => {
  return new fabric.Canvas(canvasId, { width, height });
};

const choose = (type, opt) => {
  console.log(type);
  if (type == 'rect') {
    return drawRect(opt);
  }
  if (type == 'board') {
    return drawBoard();
  }
  if (type == 'text') {
    return drawTextBox('你好');
  }
  if (type == 'polygon') {
    return drawRect('你好');
  }
  if (type == 'circle') {
    return drawTextBox('你好');
  }
  if (type == 'triangle') {
    return drawTriangle('你好');
  }
  if (type == 'line') {
    return drawLine('你好');
  }
  if (type == 'start') {
    return drawStar('你好');
  }
};
const drawBoard = () => {};
const drawTriangle = (txt, opt = {}) => {
  return new fabric.Textbox(txt, { editable: true, ...opt });
};
const drawLine = (txt, opt = {}) => {
  return new fabric.Textbox(txt, { editable: true, ...opt });
};
const drawStar = (txt, opt = {}) => {
  return new fabric.Textbox(txt, { editable: true, ...opt });
};
const drawTextBox = (txt, opt = {}) => {
  return new fabric.Textbox(txt, { editable: true, ...opt });
};
const drawRect = (opt) => {
  const { x, y } = opt;
  const rect = new fabric.Rect({
    left: x,
    top: y,
    fill: '#fff',
    width: 50,
    height: 50,
    strokeWidth: 1,
    stroke: '#d55f64',
    hasControls: true,
  });
  return rect;
};
const setZoom = (canvas, opt) => {
  delta = opt.e.deltaY;
  zoom = canvas.getZoom();
  console.log(delta, zoom);
  zoom *= 0.999 ** delta;
  if (zoom > 20) zoom = 20;
  if (zoom < 0.01) zoom = 0.01;
  canvas.setZoom(zoom);
  opt.e.preventDefault();
  opt.e.stopPropagation();
};
const drawText = (text, opt) => {
  return new fabric.Text(text, opt);
};
const setZoomFocus = (canvas, opt) => {
  delta = opt.e.deltaY;
  zoom = canvas.getZoom();
  zoom *= 0.999 ** delta;
  if (zoom > 20) zoom = 20;
  if (zoom < 0.01) zoom = 0.01;
  canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
  opt.e.preventDefault();
  opt.e.stopPropagation();
  console.log(zoom);
  return zoom;
};
export {
  drawRect,
  getCanvas,
  choose,
  setZoom,
  setZoomFocus,
  drawText,
  drawTextBox,
  setGuideLine,
};
