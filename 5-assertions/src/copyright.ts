// Original JS code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;



// My 1st try correct
// const year = document.getElementById("year") as HTMLSpanElement;
// const thisYear = <string> (new Date().getFullYear() as unknown);
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;



// My 2nd try correct
// const year = document.getElementById("year") as HTMLSpanElement;
// const thisYear = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;



// Tutor solution 1 (Legitimate code and good, but too long)
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }



// Tutor solution 2
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
