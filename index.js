/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer.prompt([
    {
    type:'input',
    name:"url",
    message:"type url to generate qr code",  
}
])
.then((answers)=>{
const url=answers.url;
const qr_png=qr.image(url,{type:'png'});
qr_png.pipe(fs.createWriteStream('qr-output.png'    ));
console.log("✅ QR code saved as qr-output.png");
fs.writeFile("text1.txt",url,(err) =>{
if(err){
    console.error("error is ",err);
}
console.log("url is saved to text1.txt");
});
})
.catch((error) => {
    console.error("❌ Error:", error)
});
