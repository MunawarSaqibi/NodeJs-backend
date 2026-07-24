const fs = require("fs");
const { compileFunction } = require("vm");

const filepath= process.argv[3];
const data= fs.readFileSync(filepath , "utf8");

function letterCount(){
    console.log("The Given file contain this numnber of file: ", data.length);
}

function lineCount(){
    const linecount= data.split("\n").length
    console.log("given data contain number of line :", linecount)
}

function wordCount(){
    const wordcount=data.split(' ').length
    console.log("given data contain this number of words:", wordcount)
}

if(process.argv[2] == "letter"){
    letterCount()
}else if(process.argv[2]== "line"){
    lineCount()
}else if(process.argv[2]== "word"){
    wordCount()

}else{
    console.log("Invalid Operator")
}
