const fs=require("fs");

const quote ="hi vignesh ";
fs.writeFile("./awesome.html",quote,(err) =>{
    console.log("completed write")
})

//to read a txt file in the folder
//relative file path "./cool.txt"
fs.readFile("./cool.txt","utf-8",(err,content)=>{
    if(err){
        console.log("😎",err);
    }
    console.log("😏",content);
});

//to add a text to the file
const nicequote="\nvignesh is a mca fresher🙄😶";
fs.appendFile("./nice.txt",nicequote,(err) =>{
    console.log("updated file");
});

//to delete a file
fs.unlink("./delete.txt",(err)=>
{
    console.log("deleted");
})
//to delete multiple file from the folder(task)
fs.readdir("./backup",(err,files)=>{
    for(var i in files)
    {
        fs.unlink(`./backup/${files[i]}`,(err) =>
    {
        console.log("deleted");
    })
}
});

//same task sir solved

fs.readdir("./backup", (err, files) => {
    // console.log(files);
    files.forEach((fileName) =>
      fs.unlink(`./backup/${fileName}`, (err) => {
        console.log("Deleted file!!! ✨");
      })
    );
  });
  
