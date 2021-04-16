//Establishes the api routes for getting and posting data to the db.json file

const noteData = require('../db/db');
const generateUniqueId = require('generate-unique-id');
const id = generateUniqueId({
  length: 10
  ,
  useLetters: false
});


// ROUTING

module.exports = (app) => {
 

  app.get('/api/notes', (req, res) => res.json(noteData));


  

  app.post('/api/notes', (req, res) => {
    
    
      noteData.push(req.body);
      res.json(true);
    
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
};