
const express =require("express");
const app=express();
const PORT =  process.env.PORT ||3000;
app.get ("/", (req, res) => {
 return res.json({ message:"hey, i am yunus "});
}); 

app.listen (PORT, () => console.log (`server started on PORT:${PORT}`))
