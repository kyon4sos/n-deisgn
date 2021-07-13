const fabric = require('fabric').fabric;
fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = '#313';
fabric.Object.prototype.cornerStyle = 'circle';
const drawRect = () => {
  const rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: '#D81B60',
    width: 50,
    height: 50,
    strokeWidth: 2,
    stroke: '#880E4F',
    rx: 10,
    ry: 10,
    angle: 45,
    scaleX: 3,
    scaleY: 3,
    hasControls: true,
  });
  return rect;
};
const getCanvas = (canvasId, arg) => {
  return new fabric.Canvas(canvasId, arg);
};

const choose = (type) => {
  if (type == 'rect') {
    return drawRect();
  }
  return null;
};
export { drawRect, getCanvas, choose };
