import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear
  } from "./db.js";
  
  export const home = (req, res) => {
      const videos = getMovies();
    //console.log(videos[0]);
      res.render("movies", {
        videos,
        title: "Movies!",
        pageTitle: "Movies!",
    });
  };
  export const movieDetail = (req, res) => {
      const {params:{id}} = req;
      const movie  = getMovieById(id);
      if(movie){
        res.render("detail", {
            movie,
            title:movie.title
        });
      }else{
        res.render("404");
      }
      
  };
export const filterMovie = (req, res) => {
    console.log(req.query);
    const {query:{rating, year}} = req;
    console.log(rating, year);
    if(rating !== undefined){
        const videos = getMovieByMinimumRating(rating);
        res.render('movies',{
            videos,
            pageTitle:`Searching by rating: ${rating}`,
            title:"Movies!"
        })
    }
    if(year!== undefined){
        const videos = getMovieByMinimumYear(year);
        res.render('movies',{
            videos,
            pageTitle:`Searching by year: ${year}`,
            title:"Movies!"
        })
    }
    
};
  