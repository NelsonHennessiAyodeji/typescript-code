// class Coder {
//     name: string; // Property needs to exist alongside the constructure sorting the info out
//     music: string;
//     age: number;
//     lang: string;

//     constructor(name: string, music: string, age: number, lang: string) { // This code too is always important for proprties when you write it this way
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
// }



// The code above seems a little redundate because the constructor is needed. Note the propeties above are public by default
// These metrhod is called Visibility/Data Access modifiers
class Coder {
    // name: string; // We can now remove this one after making the identifier public or private (basically after giving it an identifier) in the constructor method, because it will see it as duplicates
    // music: string;
    // age: number;
    // lang: string; Same thin applies here too

    secondLang!: string // This "!" is a way of letting the class know that this it does not need to be initialised or identified right away
    // It is not advicable for begginers, probably best to use when all chips are down or some unique logic

    // Readonly means it cannot be changed after being assigned
    // Protected means it can only be accessed in deriving or inheritting classes
    constructor(public readonly name: string, public music: string, private age: number, protected lang: string = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // We do not need these assignments anymore because of the identifiers
    }

    public getAge() {
        return `Hello, I'm ${this.age}`;
    } // We can use this to access the age method 


}


const Dave = new Coder("Dave", "Rock", 42); // We can make the lang optional by adding a default param above in the class

console.log(Dave.getAge());
// console.log(Dave.age); // Remember, the JS version is still legal, therefore it is going to print in the browser anyways, even though TS is not happy about it
// console.log(Dave.lang); Both cannot be accessed outsode classes






class WebDev extends Coder {
    constructor(public computer: string, name: string, music: string, age: number) {
        super(name, music, age); // Makes sure that it recieves everything from the super class. And we must porovide the properties. We must do this before assigning anything else in the constructor
    }

    public GetLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 23);

console.log(Sara.GetLang());
// console.log(Sara.lang);
// console.log(Sara.age); // Same thing here


////////////////////////////////////////////////////////////////////
// Applying interfaces to classes
interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    // I will take the long inital route we started with...
    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("Strum"));


////////////////////////////////////////////////////////////////////
class Peeps {
    // Static is a variable or method that does not apply to any instantiation of the class, it applies to the class
    // directly itslef. In this example, count would be keeping count in the class, not in any instance of it
    static count: number = 0; //Static applies directly to the class, not specifially to any instance

    static getCount(): number {
        return Peeps.count; // no need for the "this" keyword
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count; // ID will be set automatcially
    }
}


const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Steve.id);
console.log(Peeps.count); // This should tell us how many times the class has been instantiated



/////////////////////////////////////////////////////////////////////
// Getters and Setters
class Bands {
    private dataState: string[];

    constructor () {
        this.dataState = []; // This is fine because we need to first assign an array
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        // Making sure we get an array and they are all strings
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        } else throw new Error("Parama is not an arrya of strings");
    }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"]; // Setting
console.log(MyBands.data); // Getting
MyBands.data = [...MyBands.data, 'ZZ Top'] // Spreading so we dont erase the rest
console.log(MyBands.data); // Getting them all
// MyBands.data = ["G", 8]; // Our error