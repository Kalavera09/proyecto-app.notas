const path = require('path')
const mainController = {

  index : (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/index.ejs'))
  },
  
  login : (req, res)=>{
     res.sendFile(path.join(__dirname, '../views/login.ejs'))
  }
}
module.exports = mainController


// const mainController = {
//   index:(req, res) => {
//       res.render("index")
//     },
//     login:(req, res) => {
//       res.render("/login")
//     }
//  }


//const mainController = {
//    index:(req,res) =>{
  //      res.sendFile(path.join(__dirname, '../views/index.html')
    // )}   