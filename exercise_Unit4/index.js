var fs = require("fs");
var path = require("path");


//Check to see if the -folder parameter is being passed
if(process.argv.indexOf("-folder") > -1)
{
    //looking for the path after the switch
    var a = process.argv.indexOf("-folder") + 1;
    var folderArg = process.argv[a];
    var folderPath = path.resolve(folderArg);
}

//Check to see if the -output parameter is being passed
if(process.argv.indexOf("-output") > -1)
{
    //looking for the path after the switch
    var b = process.argv.indexOf("-output") + 1;
    var folderArg2 = process.argv[b];
    var outputPath = path.resolve(folderArg2);
    
    //to see if output is there if not it creates it
    /*/
    function mkdirIfNotExist(path){
        try{
            return fs.mkdirsync(path);
        }
        
        catch(e){
            
        }
        
    }    
    
    
    mkdirIfNotExist(outputPath);
        /*/
        
    
}

var dataPath = fs.readdirSync(folderPath);

for (var i in dataPath)
{
var readingthefile = fs.readFileSync(dataPath[i]); 
function writetothefile(readingthefile); 

    
}


//function to write to the text file
function writetothefile(data){
    
    fs.appendFileSync(outputPath, data, 'utf8');      
}