import axios from "axios"

const API_URL = ''

export async function getListaAtletas() {
    try {
        const resp = await axios.get(API_URL);
        const data = Array.isArray(resp.data) ? resp.data : [];
        return data;

    } catch (error) {
        console.log('error get atletas api :>> ', error);
    }
}