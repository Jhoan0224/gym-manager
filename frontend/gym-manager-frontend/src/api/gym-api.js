import axios from "axios";

const PUBLIC_API = import.meta.env.VITE_API_PUBLIC;

export async function getListaPlanes() {
    try {
        const resp = await axios.get(`${PUBLIC_API}/lista-planes`);
        return resp.data; // devuelve un array listaPlanes

    } catch (error) {
        return [];
    }
}

export async function getListaOfertas() {
    try {
        const resp = await axios.get(`${PUBLIC_API}/lista-ofertas`);
        return resp.data; // devuelve un array listaPlanes

    } catch (error) {
        return [];
    }
}