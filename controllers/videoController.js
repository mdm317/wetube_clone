import routes from "../routes.js";
import Video from "../models/Video.js";
import Comment from "../models/Comment";

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
    creator: req.user.id
  });
  req.user.videos.push(newFile.id);
  req.user.save();
  res.redirect(routes.home);
  res.redirect(routes.videoDetail(newFile.id));
};
export const postUploadUrl = async(req,res)=>{

  const {body:{title,description,fileUrl}}=req;
  const newVideo = await Video.create({
    fileUrl,
    title,
    description,
    creator: req.user.id
  });
  req.user.videos.push(newVideo.id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));

};
export const getUploadUrl = async(req,res)=>{
  res.render('uploadUrl',{ pageTitle: "Upload" })
}
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id)
    .populate("creator")
    .populate("comments");
    console.log(video.id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

// Delete Video

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
export const postAddView = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    console.log(video);
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user
  } = req;
  try {

    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id
    });
    video.comments.push(newComment.id);
    video.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};