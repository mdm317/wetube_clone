import routes from "../routes.js";

export const login = (req,res)=>res.render('login',{title:"Login"});
export const getJoin = (req,res)=>res.render('join',{title:"join"});
export const postJoin = (req,res)=>{
    console.log(req.body);
    const {body:{name,email,password, password2 }}= req;
    if(password !== password2){
        res.status(400);
        res.render('join',{title:"join"});
    }else{
        //todo register user
        res.redirect(routes.home);
    }
    
}

export const editProfile = (req,res)=> res.render('editProfile');
export const changePassword = (req,res)=> res.render('changePassword');

