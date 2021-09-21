import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCEExjWg8MQRCGPaFZoR0jsE8CknxhqVs0",
	authDomain: "events-a4e56.firebaseapp.com",
	projectId: "events-a4e56",
	storageBucket: "events-a4e56.appspot.com",
	messagingSenderId: "386062441684",
	appId: "1:386062441684:web:5203f6623d7c57377a6f41"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
