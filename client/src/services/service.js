import {url} from "../constants";
import { request } from "../utils/request";

export const getList=(endpoint)=>{
    return fetch(url + endpoint)
        .then(res => res.json())
};

export const add=(e,endpoint)=>{
    e.preventDefault()
    let data = new FormData(e.currentTarget);
    let content={...Object.fromEntries(data)};
    return request("POST",endpoint,content);
};

export const update=(e,endpoint)=>{
    e.preventDefault()
    let data = new FormData(e.currentTarget);
    let content={...Object.fromEntries(data)};
    return request("PUT",endpoint,content);
};
export const del=(endpoint)=>{
    return request("DELETE",endpoint);
};