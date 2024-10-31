const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Note = require("../models/Note");

//Route1: Get all the notes using post: '/api/notes/fetchallnotes' , login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json([notes]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
//Route2: Add notes using post: '/api/notes/addnote' , login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter valid title").isLength({ min: 3 }),
    body("description", "Description must be 5 characters").isLength({ min: 5}), ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.send(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//Route3: Update notes using put: '/api/auth/updatenote' , login required
router.put(
    "/updatenote/:id", fetchuser, async (req, res) => {
        const {title, description, tag} = req.body;
        try{
        // Create new note object
        const newNote = {};
        if (title){newNote.title = title};
        if (description){newNote.description= description};
        if(tag){newNote.tag= tag};

        // find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not found")}
        if (note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
        res.json({note});
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

    })

//Route4: Delete notes using delete: '/api/auth/updatenote' , login required
router.delete(
    "/deletenote/:id", fetchuser, async (req, res) => {
        
        try{        
        // find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not found")}
        //Allow deletion if user owns the note
        if (note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({Success: "Note has been deleted", note: note});

    }catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error");}
});


module.exports = router;
