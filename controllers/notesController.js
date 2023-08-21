const Note=require("../models/note");

//Fetch all records
const fetchNotes = async (req, res) => {
    //find the notes
    const notes = await Note.find();
    //respond with them
    res.json({ notes: notes })
};

//Fetch single record with specific id
const fetchNote = async (req, res) => {
    //Get id of the url
    const noteId = req.params.id;
    //find note with that id
    const note = await Note.findById(noteId);
    //Respond with the note
    res.json({ note: note });
};

//Create record
const createNote = async (req, res) => {
    //Get data that is sent by request body
    const title = req.body.title;
    const body = req.body.body;
    //Create a note with it
    const note = await Note.create({
        title: title,
        body: body,
    });
    //respond with the new note
    res.json({ note: note });
};

//Update record
const updateNote = async (req, res) => {
    //get id of the URL
    const noteId = req.params.id;
    //Get the data of the request body
    const title = req.body.title;
    const body = req.body.body;
    //find and update the record
    await Note.findByIdAndUpdate(noteId, {
        title: title,
        body: body,
    });

    const note = await Note.findById(noteId);
    //respond with it
    res.json({ note: note });
};

//Delete records
const deleteNote = async (req, res) => {
    //Get id of URL
    const noteId = req.params.id;
    console.log(req.params);
    //Delete records
    await Note.deleteOne({ id: noteId });
    //respond
    res.json({ success: "Record Deleted", noteId });
};

module.exports={
    fetchNotes:fetchNotes,
    fetchNote:fetchNote,
    createNote:createNote,
    updateNote:updateNote,
    deleteNote:deleteNote,
}