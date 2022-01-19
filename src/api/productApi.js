import axios from "axios";
import axiosClient from "./axiosClient";

const productApi = {
    getAll(url, params) {
        return axiosClient.get(url, { params });
    },
    getById(params) {
        const { id, option } = params;
        return axios.get(`https://lumen.thinkpro.vn/front/product/detail/${id}?option=${option}`);
    }
}

export default productApi;