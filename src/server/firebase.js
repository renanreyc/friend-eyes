import firebase from "firebase";
import ambConfig  from '../ambConfig'



var firebaseConfig = {
  apiKey: ambConfig.apiKey,
  databaseURL: ambConfig.databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

// export const userName = prompt("What's your name?");
export const userName = "Renan Rey";

const urlparams = new URLSearchParams(window.location.search);
// export const userName = urlparams.get("name");
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "welcome", `welcome`);
  // window.history.replaceState(null, "Meet", "meet/?id=" + firepadRef.key + `&name=${userName}`);
}

console.log("?id=" + firepadRef.key)

export default firepadRef;
