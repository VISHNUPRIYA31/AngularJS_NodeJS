
/*fs.writeFile('newfile.js','console.log("File created")',function(err){
    console.log("File Created Successfully")
})

fs.appendFile('calc.js','console.log("Appending .... Calculator Program")',function(err){
    console.log("Appended Successfully")
})*/

var fs = require('fs')
fs.unlink('newfile.js',function(err){
    console.log('Deleted')
})