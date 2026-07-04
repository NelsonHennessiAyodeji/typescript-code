var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
// Return the appropriate value of each color
const trafficLighting = (color) => {
    if (color == 0) {
        console.log("Stop");
    }
    else if (color == 1) {
        console.log("Slow Down");
    }
    else if (color == 2) {
        console.log("Go");
    }
};
trafficLighting(TrafficLight.Green);
export {};
//# sourceMappingURL=main.js.map