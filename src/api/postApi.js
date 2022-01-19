import axios from "axios";
import axiosClient from "./axiosClient";

const postApi = {
    getAll(url, params) {
        return axiosClient.get(url, { params });
    },

}

export default postApi;