export const localMiddleware = (req,res,next)=>{
    res.locals.siteName = "Wetube";
    next();
}