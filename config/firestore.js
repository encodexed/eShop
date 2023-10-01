import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAcmZm8GfHciloPA7F36Xy_UGAbDlZa-RQ",
	authDomain: "eshop-react-robbie.firebaseapp.com",
	projectId: "eshop-react-robbie",
	storageBucket: "eshop-react-robbie.appspot.com",
	messagingSenderId: "593002335381",
	appId: "1:593002335381:web:c97ac31913d3d1cb1e5f9c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
