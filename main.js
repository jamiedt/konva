// create a stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: 500,
  height: 500,
});

const firstLayer = new Konva.Layer();

const circle = new Konva.Circle({ x: 250, y: 260, radius: 50, fill: "red" });
circle.draggable("true");
firstLayer.add(circle);

stage.add(firstLayer);
