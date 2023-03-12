const express=require('express');
const cors=require('cors');

module.exports=(server)=>{
    server.use(express.json())
    server.use(cors({
        origin:'http://localhost:3000',
        methods:'*',
        credentials:true,
        allowedHeaders:"*",
    }))
    
}