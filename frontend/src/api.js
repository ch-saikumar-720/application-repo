import axios from "axios";
export default axios.create({
baseURL: window.APP_CONFIG.API_URL,
});
