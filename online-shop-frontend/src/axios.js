import axios from "axios";

const instance = axios.create({
    baseURL: "https://online-shop-backend-h65l.onrender.com",
});

export default instance;
