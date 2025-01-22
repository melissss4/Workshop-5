// let table, yaris, miata, bus, demio;

// function setup() {
//   createCanvas(700, 400);
// }

// function preload() {
//   table = loadTable('workshop5.csv', 'csv', 'header');
//   yaris = loadImage("Vehicles/yaris.png");
//   miata = loadImage("Vehicles/miata.png");
//   bus = loadImage("Vehicles/bus.png");
//   demio = loadImage("Vehicles/demio.png");
// }

// function drawLabels() {
//   const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
//   for (let x = 0; x < days.length; x++) {
//     textAlign(CENTER);
//     text(days[x], 50 + x * 90, 350);
//   }
// }

// function drawVehicles() {
//   const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
//   for (let x = 0; x < days.length; x++) {
//     for (let y = 0; y < table.getRowCount(); y++) {
//       let vehicle = table.getString(y, days[x]);
//       let img = vehicle === "yaris" ? yaris : vehicle === "miata" ? miata : vehicle === "bus" ? bus : demio;
//       if (vehicle) image(img, 50 + x * 90, 300 - y * 50, 40, 40);
//     }
//   }
// }

// function draw() {
//   background(250, 200, 200);
//   drawLabels();
//   drawVehicles();
//   textAlign(CENTER);
//   text("Days", width / 2, 380);
  
// }

let table, yaris, miata, bus, demio;
let slider;

function setup() {
  createCanvas(700, 400);
  slider = createSlider(0, 6, 0); 
  slider.position(10, 370);
  slider.style('width', '680px');
}

function preload() {
  table = loadTable('workshop5.csv', 'csv', 'header');
  yaris = loadImage("Vehicles/yaris.png");
  miata = loadImage("Vehicles/miata.png");
  bus = loadImage("Vehicles/bus.png");
  demio = loadImage("Vehicles/demio.png");
}

function drawLabels(dayIndex) {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  textAlign(CENTER);
  textSize(20);
  text(days[dayIndex], width / 2, 350); 
}

function drawVehicles(dayIndex) {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  for (let y = 0; y < table.getRowCount(); y++) {
    let vehicle = table.getString(y, days[dayIndex]);
    let img = vehicle === "yaris" ? yaris : vehicle === "miata" ? miata : vehicle === "bus" ? bus : demio;
    if (vehicle) image(img, width / 2 - 20, 300 - y * 50, 40, 40);
  }
}

function draw() {
  background(250, 200, 200);
  let dayIndex = slider.value(); 
  drawLabels(dayIndex);
  drawVehicles(dayIndex);
  textAlign(CENTER);
  textSize(16);
  text("Slide to View Days", width / 2, 390);
}
