import { getMovieById, getMovies, addMovie } from "./db.js";

export const home = (req, res) =>
    res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

  

export const movieDetail = (req, res) => {
    console.log('detail is called');
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};
export const getAddMovie= (req, res)=>res.render("addMovie");

export const postAddMovie= (req, res)=>{
    const {body:{title, synopsis, genres}}= req;
    const genreses = genres.split(',').filter(item=>{
        item = item.trim();
        return item !== "";
    })
    const movie ={
        title,
        synopsis,
        genres:genreses
    };
    addMovie(movie);
    res.redirect('/');
}
/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
