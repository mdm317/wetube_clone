export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "MDM Movies";
  next();
};
