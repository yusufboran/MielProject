import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4iGWSLSOdBXG6q72J_uDo-i5VGBrLSro",
  authDomain: "mielproje.firebaseapp.com",
  projectId: "mielproje",
  storageBucket: "mielproje.appspot.com",
  messagingSenderId: "850541188172",
  appId: "1:850541188172:web:4c19c6afe35d42f03c90e9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
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
    const returnValue = await getDownloadURL(ref(storage, fileUrl));
    // console.log("getFile returnValue", returnValue);
    return returnValue;
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

export default app;
