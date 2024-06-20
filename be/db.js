// const { MongoClient } = require("mongodb");
// const mongoose = require('mongoose')

// let dbConnection;
// let uri = "mongodb+srv://ridhonovembri:Admin1234@cluster0.dfqglms.mongodb.net/KulinerDb?retryWrites=true&w=majority&appName=Cluster0";

// let uri = "mongodb+srv://ridhonovembri:Admin1234@cluster0.dfqglms.mongodb.net/"

// module.exports = {
//   connectToDb: (cb) => {
//     MongoClient.connect(uri)
//       .then((client) => {
//         dbConnection = client.db();
//         return cb();
//       })
//       .catch((err) => {
//         console.log(err);
//         return cb(crr);
//       });
//   },
//   getDb: () => dbConnection,
// };

// module.exports = {
//   connectToDb: (cb) => {
//     mongoose.connect(uri)
//       .then(() => {
//         const cb = true
//         return cb
//       })      
//       .catch((err) => {
//         console.log(err);
//         return cb(err);
//       });
//   },
//   //getDb: () => dbConnection,
// };
