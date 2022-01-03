const connect=require('./database/db');
const express=require("express");

const port=2456;
const app=express();
app.use(express.json());

const prod=require("");
const price=require("");
const color=require("");

c2.use("/prod",prod);
c2.use("/price",price);
c2.use("color",color);

c2.listen(port,async()=>{
    await connect();
    console.log('server started at http://localhost:${port}');
})
