const express=require('express');
const app=express();
const con=require("./config");
const cors=require('cors');
app.use(express.json());

 app.use(cors());
// app.get("/",(req,res)=>{
// con.query("select * from userdetails",(err,result)=>{
//         if(err)
//         {
//             res.send("table connection error")
//         }
//         else
//         {
//             res.send(result)
//         }
//     })
// });
app.post("/signup",(req,res)=>{
    const data=req.body;
    con.query("insert into userdetails SET ?",data,(error,result)=>{
        if(error)
        {
            res.send("error in connecting api")
        }
        else
        {
            res.send(result)
        }
    })
   
 });
// app.put("/:stuid",(req,res)=>{
//     const data=[req.body.stname,req.body.stphone,req.body.stcity,req.params.stuid];
//     con.query("update stu_data SET stname=?,stphone= ?,stcity= ? where stuid= ?",data,(error,result)=>{
//         if(error)
//         {
//             res.send("error in connecting api")
//         }
//         else
//         {
//             res.send(result)
//         }
//     })
   
// });
// app.delete("/:stuid",(req,res)=>{
//         con.query("delete from stu_data where stuid="+req.params.stuid,(error,result)=>{
//         if(error)
//         {
//             res.send("error in connecting api")
//         }
//         else
//         {
//             res.send(req.params.stuid)
//         }
//     })
   
// });
app.listen(4000);