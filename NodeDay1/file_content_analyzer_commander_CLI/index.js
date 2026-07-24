import { program } from "commander";
import fs, { readFileSync } from 'fs'


function letterCount(filepath) {
    const data=fs.readFileSync(filepath,"utf8")
    console.log("Number of letter in this file :", data.length)
}

function lineCount(filepath) {
    const data=fs.readFileSync(filepath,"utf8")
    const linecount=data.split("\n").length;
    console.log("Number of line in this file :", linecount)
}

function wordCount(filepath) {
    const data=fs.readFileSync(filepath,"utf8")
    const wordcount=data.split(" ").length
    console.log("Number of word in this file :", wordcount)
}

program
.name("FileCountCLI")
.description("CLI based Application to count letters,line and words of any given file")
.version("1.0.0");

program
.command("letter")
.description("This command helps you to count number of letters of a given file")
.argument("<file_path>","Argumnet to take file path from user")
.action((file_path)=>{
    letterCount(file_path)
});

program
.command("line")
.description("This command helps you to count number of lines of a given file")
.argument("<file_path>","Argumnet to take file path from user")
.action((file_path)=>{
    lineCount(file_path)
});

program
.command("word")
.description("This command helps you to count number of words of a given file")
.argument("<file_path>","Argumnet to take file path from user")
.action((file_path)=>{
    wordCount(file_path)
});

program.parse();