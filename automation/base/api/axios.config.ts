import axios from "axios";
import appsetting from "../../../appsetting.json";

axios.defaults.baseURL = appsetting.CLIENT_URL;