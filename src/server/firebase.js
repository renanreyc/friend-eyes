import firebase from "firebase/app";
import database from "firebase/database";

const firebaseConfig = {
    apiKey: 'AIzaSyD3rcUfw6uW8PzYUYUjyX7ns8hiGFwgAmc',
    databaseURL: 'https://friend-eyes-default-rtdb.firebaseio.com/'
};

firebase.initializeApp(firebaseConfig);

let dbRef = firebase.database().ref();

export let connectedRef = firebase.database().ref(".info/connected");

export const userName = prompt("Qual é o seu nome?");

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("id");

if(roomId) {
    dbRef = dbRef.child(roomId);
}else {
    dbRef = dbRef.push();
    window.history.replaceState(null, "Meet", "?id=" + dbRef.key);
}

export default dbRef;
