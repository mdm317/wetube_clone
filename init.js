import app from './app.js';

const PORT = 3000;
const HandleListening = ()=>console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, HandleListening);