import express, { json } from 'express';


const app = express();

app.get('/user',(req,res)=>{
 res.json([
   "diego",
   "cleitom",
   "chureck",
   "denilda"
 ]);
});

app.listen(3333)