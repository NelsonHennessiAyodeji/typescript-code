// App Configuration Manager
class ConfigManager {
    static instace = new ConfigManager();
    appName = "";
    version = 0;
    apiUrl = "";
    theme = "";
    constructor() { }
    static getInstance() {
        return this.instace;
    }
    changeTheme() {
    }
    getTheme() {
    }
    showConfig() {
    }
}
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();
// console.log(config1 === config2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game Score Manager
class ScoreManager {
    score = 0;
    highScore = 0;
    static instance = new ScoreManager();
    constructor() { }
    static get getInstance() {
        return ScoreManager.instance;
    }
    addPoints(points) {
        this.score += points;
        console.log("+" + points);
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
    }
    losePoints(points) {
        this.score -= points;
        if (this.score < 0)
            this.score = 0;
        console.log("-" + points);
    }
    reset() {
        this.score = 0;
    }
    showScore() {
        console.log(this.score);
    }
}
const scoreManager = ScoreManager.getInstance;
scoreManager.addPoints(30);
export {};
//# sourceMappingURL=main.js.map