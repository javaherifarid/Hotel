import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB67gOIASX2hxlJCfO60nRW4Z-PjRv9HUk",
  authDomain: "turnout-c7d8c.firebaseapp.com",
  databaseURL: "https://turnout-c7d8c.firebaseio.com",
  projectId: "turnout-c7d8c",
  storageBucket: "gs://turnout-c7d8c.appspot.com",
  messagingSenderId: "610063326280"
};

export const firebaseApp = firebase.initializeApp(config)
export const roomsRef = firebaseApp.database().ref().child('rooms')