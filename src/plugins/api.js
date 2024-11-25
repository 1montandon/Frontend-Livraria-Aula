import axios from "axios";

const api = axios.create({
    baseURL: "http://0.0.0.0:19003/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 100000,
});

export default api;