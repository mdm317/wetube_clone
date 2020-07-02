import routes from "../routes.js";
import Video from "../models/Video.js";
export const home = async(req, res) => {
  console.log('home');
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });

  } catch (error) {
    console.log(error);
    res.render("upload", { pageTitle: "Upload" });
    //res.render('upload', { pageTitle,  videos:[] })
  }
  

  
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async(req, res) => {
  const {
    body: { title, description },
    file:{path}
  } = req;
  const newFile = await Video.create({
    fileUrl:path,
    title,
    description,
  });
  console.log(newFile);
  res.redirect(routes.home);
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
