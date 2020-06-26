import {videos} from '../db.js';
export const home = (req,res)=>res.render('home',{title:"Home",videos});

export const search = (req,res)=>{
    const {query:{term}}= req;
    console.log(term);
    res.render('search', {title:"Search",term, videos});
}
export const editVideo = (req, res)=>res.render('videoEdit',{title:"videoEdit"})



