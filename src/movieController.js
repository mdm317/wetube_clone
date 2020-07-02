/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie.js";

export const home = async(req,res)=>{
  try {
    const movieList = await Movie.find({});
    res.render('home',{pageTitle:"HOME",movies:movieList});
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }

}
export const getCreateMovie = (req,res)=>res.render('addMovie',{pageTitle:"createMovie"});
export const postCreateMovie = async(req,res)=>{
  try {
  const {body:{title,year, rating, synopsis, genres }} = req;
  const genreses = genres.split(',').filter(item=>{
    item = item.trim();
    return item !== "";
  })
  
    const movie = await Movie.create({
      title,year, rating, synopsis, genres:genreses
    });
    res.redirect(`/${movie.id}`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }

}
export const movieDetail = async(req,res)=>{
  const {params:{id}} = req;
  try {
    const movie = await Movie.findById(id);
    res.render('detail', {movie,pageTitle:movie.title});
  } catch (error) {
    console.log(error);
    return res.render("404", { pageTitle: "Movie not found" });
  }

}
export const getEditMovie = async(req,res)=>{
  const {params:{id}} = req;
  //console.log(id);
  try{
    const movie = await Movie.findById(id);
    res.render('editMovie', {movie,pageTitle:"Edit-Movie"});
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }

}

export const postEditMovie = async(req,res)=>{
  const {params:{id}} = req;
  const {body:{title,year, rating, synopsis, genres }} = req;
  const genreses = genres.split(',').filter(item=>{
    item = item.trim();
    return item !== "";
  });
  try {
    await Movie.findOneAndUpdate({_id:id},{
      title,year, rating, synopsis, genres:genreses
    });
    res.redirect(`/${id}`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }

}
export const deleteMovie = async(req,res)=>{
  const {params:{id}} = req;
  try {
    await Movie.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }

}

export const filterMovie = async(req, res) => {
  try {
    const {
      query: { rating, year }
    } = req;
    if (rating !== undefined) {
      const movies = await Movie.find({'rating':{'$gte' : rating }});
      res.render("home", {
        movies,
        pageTitle: `Searching by rating: ${rating}`,
        title: "Movies!"
      });
    }
    else if (year !== undefined) {
      const movies = await Movie.find({'year':{'$gte' : year }});
      res.render("home", {
        movies,
        pageTitle: `Searching by year: ${year}`,
        title: "Movies!"
      });
    }
    else{
      res.redirect('/');
    }
    
  } catch (error) {
    res.redirect('/');
  }
};
// Add your magic here!
