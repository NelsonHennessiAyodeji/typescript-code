const employess: [number, string, number, string][] = [[101, "David", 22000, "HR"], [102, "Tayo", 5000, "Tech"], 
[103, "Mary", 6700, "Law"], [104, "Hume", 11000, "HR"], [105, "Sarah", 14000, "Egnineering"]];

// Log employess earning above 10,000
for (let i: number = 0; i < employess.length; i++) {
    if ((employess[i]?.[2] ?? 0) > 10000) {
        console.log(employess[i]);        
    }
}