const mongoose = require('mongoose')
const mongoURI ='mongodb+srv://pain00217:pain00217@cluster0.xakmyzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURI)
  .then(() => console.log('Connected!'));