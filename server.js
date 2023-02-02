// console.log("server File")

// const fs  = require("fs")
// const htttp  = require("http");


// fs.readdir('./',(err,file)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(file)
//     }
// })


// fs.readFile('./abc.txt','utf8',(err,file)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(file);
//     }
// })

// fs.writeFile('./abc.txt','Some New Text read and write', (err)=>{
//     if(err) {
//         console.log(err);
//     }
// })

// fs.appendFile('./abc.txt','Some New Text read and write', (err)=>{
//     if(err) {
//         console.log(err);
//     }
// })


// let arr = [{id:1, txt: "abc"},{id:2, txt: "xyz"},{id:3, txt: "xml"}]

// let server = htttp.createServer((req,res)=>{
    // console.log("server is listning")
    // res.write("server is listening ....") 
    // res.end();
    // if(req.url == "./cources"){
    //     res.write(JSON.stringify(arr));
    //     res.end();
    // }
    // res.end();
// })

// server.listen(5000)