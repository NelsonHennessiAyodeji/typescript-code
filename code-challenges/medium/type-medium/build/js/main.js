const movie1 = {
    title: "Walking Dead",
    genre: "Horror",
    rating: 9,
    released: true,
};
const movie2 = {
    title: "Regular Show",
    genre: "Adventure",
    rating: 10,
    released: true,
};
const movie3 = {
    title: "From",
    genre: "Horror",
    rating: 9,
    released: true,
};
const movie4 = {
    title: "scandal",
    genre: "Drama",
    rating: 5,
    released: true,
};
const movie5 = {
    title: "Superdirl",
    genre: "Fiction",
    rating: 6,
    released: true,
};
const movie6 = {
    title: "Bliss",
    genre: "Romance",
    rating: 3,
    released: true,
};
const movie7 = {
    title: "First Date",
    genre: "Romcom",
    rating: 7,
    released: true,
};
const movie8 = {
    title: "King of Boys",
    genre: "Action",
    rating: 7,
    released: true,
};
const movie9 = {
    title: "Nightfall",
    genre: "Mystery",
    rating: 6,
    released: true,
};
const movie10 = {
    title: "Gumball",
    genre: "Comedy",
    rating: 8,
    released: true,
};
const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];
// Print movies rating above 8 
for (let i = 0; i < movies.length; i++) {
    if ((movies[i]?.rating ?? 0) > 8) {
        console.log(movies[i]);
    }
}
export {};
//# sourceMappingURL=main.js.map