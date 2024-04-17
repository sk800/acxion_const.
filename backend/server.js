
import express from "express"
import cors from "cors"
const app = express();


import userRoutes from "./routes/auth.js"
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Sample route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const mongoose = require('mongoose')
const mongoURI ='mongodb+srv://pain00217:pain00217@cluster0.xakmyzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURI,{useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>{console.log(`connected`)}))
  .catch((error)=>console.log(error.message))

  app.use("/user", userRoutes);

