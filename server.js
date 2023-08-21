//Import dependencies
const express=require('express')
//Import Database file
const connectToDb=require("./config/connectToDb");

const Note=require("./models/note");

const notesController=require('./controllers/notesController');
const cors=require('cors');
//Load env Variables
require("dotenv").config()

//Create an express app
const app =express();

//Configure express app
app.use(express.json());
app.use(cors());

//Connect to Database
connectToDb(); 

//Routing
app.get('/',(req,res)=>{
    res.json({hello:'world'});
})
//getting all desired output
app.get("/notes",notesController.fetchNotes);

//find note with specific id
app.get("/notes/:id",notesController.fetchNote);

//Creating new one
app.post("/notes",notesController.createNote);

// Update records
app.put("/notes/:id",notesController.updateNote);

//Delete records
app.delete("/notes/:id",notesController.deleteNote);

//Start Server
app.listen(process.env.PORT,()=>{
    console.log('Server listening on',process.env.PORT)
}); 