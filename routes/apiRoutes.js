//Establishes the api routes for getting and posting data to the db.json file

const fs = require('fs');

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    let allNotes = [];
    fs.readFile('./db/db.json', (err, data) => {
      if(err) throw(err)
      
        allNotes = JSON.parse(data);
        res.send(allNotes);
      })
  });

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
    res.json(true)
  ; 

  res.json(true); 
  });

  app.delete('/api/notes/:id', (req, res) => {
    let deleteId = parseInt(req.params.id, 10);
    let allNotes = [];

    fs.readFile('./db/db.json', (err, data) => {
      if(err) throw(err)
      
        allNotes = JSON.parse(data);

        let filteredNotes = allNotes.filter(note => note.id != deleteId);
        console.log(filteredNotes);
        
        // res.send(allNotes);
        
      })

    

  })

};