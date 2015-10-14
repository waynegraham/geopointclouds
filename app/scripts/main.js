console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

var pointSize = 1,
    pointCountTarget = 1,
    opacity = 1,
    pointSizeType = Potree.PointSizeType.ADAPTIVE,
    pointColorType = Potree.PointColorType.RGB,
    pointShape = Potree.PointShape.SQUARE,
    interpolate = false;

var pointclousdPath = ""

// var WGS84 = proj4.defs("WGS84");
// var webMercator = proj4.def("EPSG:3857");

// ol3 stuff
var featureVector,
    camFrustrumFeatureVector,
    camFrustrum,
    visibleBounds;

// threejs stuff (and potree)
var renderer,
    scene,
    sceneHUD,
    referenceFrame,
    camera,
    cameraHUD,
    skybox,
    pointcloud,
    clock = new THREE.Clock(),
    showCoordinates = false,
    mouse = {x: 0, y: 0},
    elCoordinates = document.getElementById("lblCoordinates"),
    showSkybox = true,
    elRenderArea = document.getElementById("renderArea"),
    progressBar = new Progressbar();
