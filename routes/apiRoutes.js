//Establishes the api routes for getting and posting data to the db.json file

const noteData = require('../db/db');
const fs = require('fs');
const { json } = require('express');


// ROUTING

module.exports = (app) => {
 

  // app.get('/api/notes', (req, res) => res.json(noteData));

  app.get('/api/notes', (req, res) => {
    let allNotes = [];
    fs.readFile('./db/db.json', (err, data) => {
      if(err) {
        throw(err)
      } else {
        allNotes = JSON.parse(data);
        res.send(allNotes);
      }
    })

  })

  app.post('/api/notes', (req, res) => {
    console.log(req.body);
    let currentNotes = [];
    let newNote = req.body;
    fs.readFile('./db/db.json', (err, data) => {
      if(err) {
        throw(err)
      } else {
        currentNotes = JSON.parse(data);
        currentNotes.push(newNote);
        
        let newFile = JSON.stringify(currentNotes);

        fs.writeFile('./db/db.json', newFile, err => {
          if(err) {
            throw(err)
          } else {
            console.log(newFile);
          }
        })
      }
    })

  res.json(true); 
  });

  // app.delete('/api/notes/:id', (req, res) => {
  //   console.log(req.body);
  // })


  // app.post('/api/clear', (req, res) => {
  //   // Empty out the arrays of data
  //   tableData.length = 0;
  //   waitListData.length = 0;

  //   res.json({ ok: true });
  // });
};