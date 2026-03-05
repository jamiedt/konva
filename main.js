// create a stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: 500,
  height: 500,
});

const firstLayer = new Konva.Layer();

const circle = new Konva.Circle({ x: 250, y: 260, radius: 50, fill: "red" });
circle.draggable("true");
circle.on("mouseenter", function () {
  stage.container().style.cursor = "pointer";
});
circle.on("mouseleave", function () {
  stage.container().style.cursor = "default";
});
circle.on("mousedown", function () {
  stage.container().style.cursor = "grab";
});
circle.on("mouseup", function () {
  stage.container().style.cursor = "pointer";
});
firstLayer.add(circle);

stage.add(firstLayer);
