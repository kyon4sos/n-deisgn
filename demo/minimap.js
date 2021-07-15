createCanvasEl() {
  var designSize = { width: 700, height: 600 };
  var originalVPT = this.design.viewportTransform;
  // zoom to fit the design in the display canvas
  var designRatio = fabric.util.findScaleToFit(designSize, this.design);

  // zoom to fit the display the design in the minimap.
  var minimapRatio = fabric.util.findScaleToFit(this.design, this.minimap);

  var scaling = this.minimap.getRetinaScaling();

  var finalWidth = designSize.width * designRatio;
  var finalHeight = designSize.height * designRatio;

  this.design.viewportTransform = [
    designRatio,
    0,
    0,
    designRatio,
    (this.design.getWidth() - finalWidth) / 2,
    (this.design.getHeight() - finalHeight) / 2,
  ];
  var canvas = this.design.toCanvasElement(minimapRatio * scaling);
  this.design.viewportTransform = originalVPT;
  return canvas;
},
updateMiniMap() {
  var canvas = this.createCanvasEl();
  this.minimap.backgroundImage._element = canvas;
  this.minimap.requestRenderAll();
},
updateMiniMapVP() {
  var designSize = { width: 800, height: 600 };
  var rect = this.minimap.getObjects()[0];
  var designRatio = fabric.util.findScaleToFit(designSize, this.design);
  var totalRatio = fabric.util.findScaleToFit(designSize, this.minimap);
  var finalRatio = designRatio / this.design.getZoom();
  rect.scaleX = finalRatio;
  rect.scaleY = finalRatio;
  rect.top =
    this.minimap.backgroundImage.top -
    (this.design.viewportTransform[5] * totalRatio) / this.design.getZoom();
  rect.left =
    this.minimap.backgroundImage.left -
    (this.design.viewportTransform[4] * totalRatio) / this.design.getZoom();
  this.minimap.requestRenderAll();
},
initMinimap() {
  var canvas = this.createCanvasEl();
  var backgroundImage = new fabric.Image(canvas);
  backgroundImage.scaleX = 1 / this.design.getRetinaScaling();
  backgroundImage.scaleY = 1 / this.design.getRetinaScaling();
  this.minimap.centerObject(backgroundImage);
  this.minimap.backgroundColor = 'white';
  this.minimap.backgroundImage = backgroundImage;
  this.minimap.requestRenderAll();
  var minimapView = new fabric.Rect({
    top: backgroundImage.top,
    left: backgroundImage.left,
    width: backgroundImage.width / this.design.getRetinaScaling(),
    height: backgroundImage.height / this.design.getRetinaScaling(),
    fill: 'rgba(0, 0, 255, 0.3)',
    cornerSize: 6,
    transparentCorners: false,
    cornerColor: 'blue',
    strokeWidth: 0,
  });
  minimapView.controls = {
    br: fabric.Object.prototype.controls.br,
  };
  this.minimap.add(minimapView);
},
zoom(opt) {
  this.updateMiniMapVP();
  this.scale = setZoomFocus(this.design, opt);
  this.x.forEach((x) => {
    if (this.scale == 20 || this.scale == 0.01) return;
    let s = Math.round(this.scale);

    let t = parseInt(x.text);
    x.text = (t * s * 10).toString();
    this.guide.add(x);
  });
},