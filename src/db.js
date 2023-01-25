import axios from "axios";
import toast from "react-hot-toast";

export const getProjectsList = async (setItems) => {
  try {
    axios.get("http://localhost:3000/api/v1/project/").then((response) => {
      setItems(response.data);
    });
  } catch (error) {
    toast.error("getConsultansList", error.message);
  }
};

export const getProject = async (id, setItem) => {
  try {
    axios
      .get(` http://localhost:3000/api/v1/project/${id}`)
      .then((response) => {
        setItem(response.data);
      });
  } catch (error) {
    toast.error("getFile", error.message);
  }
};

export const getSocialMedia = async (setItems) => {
  try {
    axios.get("http://localhost:3000/api/v1/socialmedia").then((response) => {
      console.log(" axios response.data", response.data);
      setItems(response.data);
    });
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const getFeaturesList = async (setItems) => {
  try {
    axios.get("http://localhost:3000/api/v1/features").then((response) => {
      console.log(" axios response.data", response.data);
      setItems(response.data);
    });
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const getLocationsList = async (setItems) => {
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
