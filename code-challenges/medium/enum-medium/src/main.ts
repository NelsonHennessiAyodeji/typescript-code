enum TrafficLight {
    Red,
    Yellow,
    Green
}
// Return the appropriate value of each color
const trafficLighting = (color: TrafficLight) => {
    if (color == 0) {
        console.log("Stop");
    } else if (color == 1) {
        console.log("Slow Down");
    } else if (color == 2) {
        console.log("Go");
    }
}

trafficLighting(TrafficLight.Green);