import app from "./app.js";
import "./db.js"
import dotenv from 'dotenv';
import "./models/Video.js";
import "./models/Comment.js";
dotenv.config();
const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
