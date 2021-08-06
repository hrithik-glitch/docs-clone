import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBTFHZJ4miYy23x4AvA0oZ9op6802j4UaU",
	authDomain: "docs-clone-18816.firebaseapp.com",
	projectId: "docs-clone-18816",
	storageBucket: "docs-clone-18816.appspot.com",
	messagingSenderId: "175528990378",
	appId: "1:175528990378:web:6d30882befe398c507e2d3",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export { db };
