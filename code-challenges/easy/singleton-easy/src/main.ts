// App Configuration Manager
class ConfigManager {
    private static instace: ConfigManager = new ConfigManager();
    private appName: string = "";
    private version: number = 0;
    private apiUrl: string = "";
    private theme: string = "";

    private constructor() {}

    public static getInstance() {
        return this.instace;
    }

    public changeTheme() {

    }

    public getTheme() {

    }

    showConfig() {

    }
}

const config1 = ConfigManager.getInstance();
const config2: ConfigManager = ConfigManager.getInstance();

// console.log(config1 === config2);



///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game Score Manager
class ScoreManager {
    private score: number = 0;
    private highScore: number = 0;
    private static instance: ScoreManager = new ScoreManager();

    private constructor(){}

    public static get getInstance() {
        return ScoreManager.instance;
    }

    public addPoints(points: number): void {
        this.score += points;
        console.log("+" + points);
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
    }

    public losePoints(points: number): void {
        this.score -= points;
        if (this.score < 0) this.score = 0;
        console.log("-" + points);
    }

    public reset(): void {
        this.score = 0;
    }

    public showScore(): void {
        console.log(this.score);
    }
}

const scoreManager = ScoreManager.getInstance;
scoreManager.addPoints(30);
