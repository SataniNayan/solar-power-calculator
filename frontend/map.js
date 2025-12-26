let map;
let drawingManager;
let selectedShape;
let selectedArea = 0;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.0225, lng: 72.5714 }, // Ahmedabad
    zoom: 14
  });

  drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.POLYGON,
    drawingControl: true,
    drawingControlOptions: {
      drawingModes: ["polygon"]
    }
  });

  drawingManager.setMap(map);

  google.maps.event.addListener(drawingManager, "overlaycomplete", function (event) {
    if (selectedShape) {
      selectedShape.setMap(null);
    }
    selectedShape = event.overlay;

    selectedArea = google.maps.geometry.spherical.computeArea(
      selectedShape.getPath()
    );

    document.getElementById("mapArea").innerText = selectedArea.toFixed(2);
    document.getElementById("area").value = selectedArea.toFixed(2);
  });
}

window.onload = initMap;
