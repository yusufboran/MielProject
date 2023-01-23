import axios from "axios";
import toast from "react-hot-toast";

import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4iGWSLSOdBXG6q72J_uDo-i5VGBrLSro",
  authDomain: "mielproje.firebaseapp.com",
  projectId: "mielproje",
  storageBucket: "mielproje.appspot.com",
  messagingSenderId: "850541188172",
  appId: "1:850541188172:web:4c19c6afe35d42f03c90e9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export const getConsultansList = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "consultans"));

    querySnapshot.forEach((doc) => {
      if (
        doc.data()["firstName"] !== null &&
        doc.data()["firstName"] !== undefined
      ) {
        const item = {
          id: doc.id,
          firstName: doc.data()["firstName"],
          lastName: doc.data()["lastName"],
          phoneNumber: doc.data()["phoneNumber"],
          imgUrl: doc.data()["file"],
          email: doc.data()["email"],
          startDate: doc.data()["startDate"],
        };
        items.push(item);
      }
    });
    setItems(items);
  } catch (error) {
    toast.error("getConsultansList", error.message);
  }
};

export const getConsultansId = async (
  Id,
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
  setStartDate,
  setBirthday,
  setImgUrl
) => {
  try {
    const docRef = doc(db, "consultans", Id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setFirstName(docSnap.data()["firstName"]);
      setLastName(docSnap.data()["lastName"]);
      setEmail(docSnap.data()["email"]);
      setPhoneNumber(docSnap.data()["phoneNumber"]);
      setStartDate(docSnap.data()["startDate"]);
      setBirthday(docSnap.data()["birthday"]);
      setImgUrl(docSnap.data()["file"]);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    toast.error("getConsultansId", error.message);
  }
};

export const getProjectsList = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "projects"));

    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        projectName: doc.data()["projectName"],
        description: doc.data()["description"],
        features: doc.data()["features"],
        files: doc.data()["files"],
        updateDate: 1669277071387,
      };

      items.push(item);
    });
    setItems(items);
  } catch (error) {
    toast.error("getConsultansList", error.message);
  }
};

export const getHomeProjectList = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "projects"));

    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        projectName: doc.data()["projectName"],
        imageUrl: doc.data()["files"][0],
      };

      items.push(item);
    });
    setItems(items);
  } catch (error) {
    toast.error("getConsultansList", error.message);
  }
};

export const getFile = async (fileUrl) => {
  try {
    const uploadTask = getDownloadURL(ref(storage, fileUrl));

    uploadTask.on("state_changed", () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log(downloadURL);
      });
    });
  } catch (error) {
    toast.error("getFile", error.message);
  }
};

export const getProject = async (id, setItem) => {
  try {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setItem(docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    toast.error("getFile", error.message);
  }
};

export const getSocialMedia = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "socialMedia"));

    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        socialMedia: doc.data().socialMedia,
        username: doc.data().username,
      };
      items.push(item);
    });

    setItems(items);
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const getFeaturesList = async (setItems) => {
  try {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "features"));
    var value = 1;

    querySnapshot.forEach((doc) => {
      items.push({
        id: value,
        title: doc.data().title,
        trText: doc.data().trText,
        enText: doc.data().enText,
      });
      value = value + 1;
    });

    setItems(items);
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const getILocationsList = async (setItems) => {
  try {
    axios.get("http://localhost:3000/api/v1/map").then((response) => {
      console.log(" axios response.data", response.data);
      setItems(response.data);
    });
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const addMessage = async (item) => {
  try {
    var path = "http://localhost:3000/api/v1/contactform";
    axios.post(path, item);
  } catch (error) {
    toast.error("addMessage", error.message);
  }
};

export default app;