import axios from "axios";
import toast from "react-hot-toast";

export const getProjectsList = async (setItems) => {
  try {
    axios.get("https://mielproje.com.tr/api/project.php").then((response) => {
      setItems(response.data);
    });
  } catch (error) {
    toast.error("getConsultansList", error.message);
  }
};

export const getProject = async (id, setItem) => {
  try {
    axios
      .get(`https://mielproje.com.tr/api/project.php/${id}`)
      .then((response) => {
        setItem(response.data);
      });
  } catch (error) {
    toast.error("getFile", error.message);
  }
};

export const addMessage = async (item) => {
  try {
    var path = `https://mielproje.com.tr/api/contact.php`;
    axios.post(path, item).then((response) => {
      console.log(response.data);
    });
  } catch (error) {
    toast.error("addMessage", error.message);
  }
};
export const getSocialMedia = async (setItems) => {
  try {
    axios
      .get("https://mielproje.com.tr/api/social-media.php")
      .then((response) => {
        console.log(" getSocialMedia response.data", response.data);
        setItems(response.data);
      });
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const getFeaturesList = async (setItems) => {
  try {
    axios.get("https://mielproje.com.tr/api/features.php").then((response) => {
      console.log(" getFeaturesList response.data", response.data);
      setItems(response.data);
    });
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const getLocationsList = async (setItems) => {
  try {
    axios.get("https://mielproje.com.tr/api/map.php").then((response) => {
      console.log("axios response.data", response.data);
      setItems(response.data);
    });
  } catch (error) {
    toast.error("getSocialMedia", error.message);
  }
};

export const getPage = async (setHeader, setContent) => {
  try {
    axios.get(`https://mielproje.com.tr/api/about.php/`).then((response) => {
      console.log( response.data)
      setHeader(response.data.find((item) => item.title === "header"));
      setContent(response.data.find((item) => item.title === "content"));
    });
  } catch (error) {
    toast.error("locations getItemsList", error.message);
  }
};
