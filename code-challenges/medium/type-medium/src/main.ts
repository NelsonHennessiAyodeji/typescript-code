type Movie = {
    title: string;
    genre: string;
    rating: number;
    released: boolean;
}

const movie1: Movie = {
    title: "Walking Dead",
    genre: "Horror",
    rating: 9,
    released: true,
}

const movie2: Movie = {
    title: "Regular Show",
    genre: "Adventure",
    rating: 10,
    released: true,
}

const movie3: Movie = {
    title: "From",
    genre: "Horror",
    rating: 9,
    released: true,
}

const movie4: Movie = {
    title: "scandal",
    genre: "Drama",
    rating: 5,
    released: true,
}

const movie5: Movie = {
    title: "Superdirl",
    genre: "Fiction",
    rating: 6,
    released: true,
}

const movie6: Movie = {
    title: "Bliss",
    genre: "Romance",
    rating: 3,
    released: true,
}

const movie7: Movie = {
    title: "First Date",
    genre: "Romcom",
    rating: 7,
    released: true,
}

const movie8: Movie = {
    title: "King of Boys",
    genre: "Action",
    rating: 7,
    released: true,
}

const movie9: Movie = {
    title: "Nightfall",
    genre: "Mystery",
    rating: 6,
    released: true,
}

const movie10: Movie = {
    title: "Gumball",
    genre: "Comedy",
    rating: 8,
    released: true,
}

const movies: Movie[] = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];

// Print movies rating above 8 
for (let i: number = 0; i < movies.length; i++) {
    if ((movies[i]?.rating ?? 0) > 8) {
        console.log(movies[i]);        
    }
}
