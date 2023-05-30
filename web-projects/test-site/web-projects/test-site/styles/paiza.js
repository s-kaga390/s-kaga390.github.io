process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
let repeat = parseInt(lines[0]);
let side = parseInt(lines[1]);
let newSide =Math.pow(side,repeat*repeat);

let blankArray =createBlankArray(side);
let patternArray = lines.splice(2);

for(let i=0;i<repeat;i++)
{
    patternArray = repeatPattern(patternArray,blankArray,side);
}


for(const value of newArray)
{
    console.log(value);
}


    
});

function createBlankArray(side)
{
    let blank="";
    let blankArray =[];
    for(let i=0;i<side;i++)
    {
        blank += ".";
    }
    for(i=0;i<side;i++)
    {
        blankArray[i]=blank;
    }
    
return blankArray;
    
}

function repeatPattern(array,blankArray,side)
{
    newArray = [];
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length;j++)
        {
            if(array[j][i]==".")
            {
                for(let k=0;k<array.length;k++)
                {
              
                   counter = k+j*array.length;
                   if(newArray[counter]==undefined)
                {
                    newArray[counter]="";
                }
                   newArray[counter] += ".".repeat(array.length);
                   //console.log("newArray:"+counter);

                }
            }
            else
            {for(let k=0;k<array.length;k++)
                {
                
                counter = k+j*array.length;
                if(newArray[counter]==undefined)
                {
                    newArray[counter]="";
                }
                newArray[counter] += array[k];
                   //console.log("newArray:"+counter);

                }
            }
            
        }
    }
    
    return newArray;
}
