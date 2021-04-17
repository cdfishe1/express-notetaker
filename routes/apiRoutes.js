//Establishes the api routes for getting and posting data to the db.json file

const noteData = require('../db/db');
const fs = require('fs');
// const generateUniqueId = require('generate-unique-id');
// const id = generateUniqueId({
//   length: 10,
//   useLetters: false
// });


// ROUTING

module.exports = (app) => {
 

  app.get('/api/notes', (req, res) => res.json(noteData));

  // app.get('/api/notes' , (req, res) => {
  //   fs.readFile('./db/db.json', (err, data) => {
  //     // console.log(data);
  //     let allNotes = [];
  //     if(data) {
  //       allNotes = JSON.parse(data);
  //       res.send(allNotes);
  //     } else {
  //       res.send(allNotes);
  //     }
  //     if(err) {
  //       throw(err)
  //     }
  //   })
  // })

  

  app.post('/api/notes', (req, res) => {
    console.log(req.body);
    
      noteData.push(req.body);
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