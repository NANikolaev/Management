import { useEffect, useState } from "react";
import { getList } from "../services/service";

export const useDataList = (endpoint) => {
    let [list, setList] = useState([]);
    useEffect(()=>{
        getList(endpoint)
        .then(data=>{
            setList(data)
        })
    },[])
 
    return [list, setList]
};