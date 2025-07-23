// server/firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // you'll need this from Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
