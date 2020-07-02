import mongoose from "mongoose";

/*
PLEASE ADD YOUR USERNAME IN THIS LINE.
ALL THE MODELS YOU WILL CREATE WILL HAVE YOUR USERNAME APPENDED TO THEM
SO YOU CAN SEARCH / ADD / EDIT / DELETE YOUR DOCUMENTS ONLY.
PLEASE FOLLOW THIS STEP
WE NEED TO SHARE THE SAME DB SO NICO CAN CHECK OUT EVERYBODYS PROJECT.
*/
const YOUR_USERNAME = "mdm317";

const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      year: {
        type: Number,
        required: true
      },
      synopsis: {
        type:String,
          required: true
      },
      rating: {
        type: Number,
        required: true
      },
      uploadedAt: {
        type: Date,
        default: Date.now
      },
      genres: [
        {
          type: String,
        }
      ]
});

if (YOUR_USERNAME === null || typeof YOUR_USERNAME !== "string") {
  /*
  PLEASE ADD YOUR USERNAME ON THE LINE 10
  THIS LINE WILL REMIND YOU IF YOU HAVEN'T ADDED IT
  PLEASE DONT REMOVE THIS LINE
  */
  throw Error(
    "❌  Please add your username in the line 10 of models/Movie.js  ❌"
  );
}

if (YOUR_USERNAME.includes("@")) {
  throw Error("❌  Please remove the @ from your username  ❌");
}

const model = mongoose.model(`Movie_${YOUR_USERNAME}`, MovieSchema);

export default model;
