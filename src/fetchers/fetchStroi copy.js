import axios from "axios";

export function fetchStroi() {
    return axios
        .get("http://e-stroi.kz:8082/catalog/client/category/all?lang=ru")
        .then((res) => {
            return res.data
        });
}

export function fetchProducts(id) {
    return axios
        .get(`http://e-stroi.kz:8082/catalog/client/item?categoryId=${id}`)
        .then((res) => {
            return res.data
        });
}
