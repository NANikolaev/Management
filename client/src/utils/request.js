import {url} from "../constants";

export const request=(method,endpoint,content)=>{
    
     let options={
        method: method,
        headers: {"Content-Type": "application/json"},
     }
     if(content){     
        options.body=JSON.stringify(content)
     }

      return fetch(url+endpoint,options)
             .then(res=>res.json())

};