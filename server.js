const http = require ("http");
const getReq = require("./methods/get-req");
const postReq = require("./methods/post-req");
const putReq = require("./methods/put-req");
const deleteReq = require("./methods/delete-req");
const movies = require("./data/movies.json");

// require("dotenv").config();

const PORT = process.env.PORT|| 4800;

const server = http.createServer((req,res)=>{
    req.movies = movies;
 switch(req.method){
    case "GET":
    getReq(req,res);
    break;
    case"POST":
    postReq(req,res);
    break;
    case"PUT":
    putReq(req,res);
    break;
    case"DELETE":
    deleteReq(req,res);
    break;
    default:
        res.statusCode=404;
        res.setHeader("content-Type","applicaion/json");
        res.write(JSON.stringify({title:"Note found",message:" Route Not found"}));
        res.end(); 
 }
    });

server.listen(PORT,()=>{
    console.log(`server is started:${PORT}`);
})