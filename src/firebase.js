import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
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
  apiKey: "AIzaSyDqE8vPtV2iv4RbId_aAIpEUcK8jGL_Vwk",
  authDomain: "denemepersembe.firebaseapp.com",
  projectId: "denemepersembe",
  storageBucket: "denemepersembe.appspot.com",
  messagingSenderId: "323155737862",
  appId: "1:323155737862:web:068d57388f71dcb7d7b287",
  measurementId: "G-KXH1VQG8CT",
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
    const items = [];
    const querySnapshot = await getDocs(collection(db, "locations"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      //   <TableCell>İmage</TableCell>

      const item = {
        id: doc.id,
        title: doc.data().title,
        address: doc.data().address,
        phone: doc.data().phone,
        location: doc.data().location,
        imgUrl: doc.data().imgUrl,
      };

      items.push(item);
    });

    setItems(items);
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const addMessage = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "message"), item);
  } catch (error) {}
};

export default app;
