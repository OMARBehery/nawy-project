const express=require('express')
const apartRoutes = require('./routes/apartRoutes');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors=require('cors')



const app=express();



// middleware


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// database connection
const dbURI = 'mongodb+srv://omar:dbpass1234@cluster0.huymcu2.mongodb.net/node_course?retrywrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

app.get('/',(req,res)=>{
  res.send('home')
})

  
// routes
app.use(apartRoutes);


