import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000", // or LAN IP on real device
});
export default api;
