import axios from "axios";
import Movie from "./src/models/Movie.js";
const YIFY_URL = "https://yts.lt/api/v2/";
const client = axios.create({
  baseURL: YIFY_URL
});

const startDB = async () => {
  try {
    console.log("⏳  Starting Movie DB");
    const {data:{data:{movies}}}
      
     = await client.get("/list_movies.json", { params: { limit: 50 } });

    console.log("✅  Movie data Ready!");
    movies.forEach(movie => {
        const {title, year, synopsis, rating, genres}= movie;
        if(synopsis===''){
            Movie.create({
                title,
                year,
                synopsis:"no synopsis",
                rating,
                genres,
            });
        }else{
            Movie.create({
                title,
                year,
                synopsis,
                rating,
                genres,
            });
        }
        
        
        
    });


  } catch (e) {
    console.log(e.message);
    console.log("❌ Can't initialize DB, contact Nico");
  }
};
startDB();
