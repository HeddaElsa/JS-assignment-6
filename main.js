let running = true;
let search = true;
let searchtitle;

const library = []

console.log(library);

const logic = {
    addMovie: function() {
        title = prompt ("What is the Movies title?")
        director = prompt ("Who directed the movie?")
        const Movie = {
            title: title,
            director: director,
            isSeen: false,
        }
        library.push(Movie);
    },
    listMovies: function() {
        console.log(library)
    },
    MarkAsSeen: function() {
        while(search) {
            const targetMovie = library.find(Movie => Movie.title == searchtitle)
            if (targetMovie != undefined) {
                targetMovie.isSeen = true;
                search = false;
                alert("The movie is now marked as seen");
            } else {
                alert("That movie does not exist in the library (or you miss spelled it)")
            }

        } 
    },
}

while (running) {
    const choice = prompt(`
        Movie tracker
        1. Add Movie
        2. List Movies
        3. Mark Movie as seen
        4. Exit
        Enter your choice:`);

    switch(choice) {
        case "1":
            logic.addMovie();
            break;
        case "2":
            logic.listMovies();
            break;
        case "3":
            searchtitle = prompt("Enter the title of the Movie to mark as seen");
            logic.MarkAsSeen(searchtitle);
            break;
        case "4":
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("invalid choice");
    }
}