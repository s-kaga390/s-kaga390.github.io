class movieTheater
{
    constructor (tP,tQ,mP,mQ,reservedSeats)
    {
        this.theaterP = tP;
        this.theaterQ = tQ;
        this.mP= mP;
        this.mQ = mQ;
        this.reservedSeats = reservedSeats;
        
    }
    isReserved(seatNum)
    {
      return this.reservedSeats.includes(seatNum);  
    }  
    bestSeatsAvail()
    {
      let bestSeats =[];
      let manhattanNum;
      let flag=false;
    
      for(let i=0;flag==false;i++)
      {
        for(let p=this.mP-i;p<=this.mP+i && p<=this.theaterP-1;p++)
        {
          for(let q=this.mQ-i;q<=this.mQ+i && q<=this.theaterQ-1 && p<=this.theaterP-1;q++)
          {

            manhattanNum = Math.abs(this.mP-p)+Math.abs(this.mQ-q);
            if(manhattanNum == i && !(this.isReserved(p+" "+q))&& p>=0 && q>=0) 
            {
              bestSeats.push(p+" "+q);
              flag = true;
            }

          }

        }
      }
      
return bestSeats;    }

    
}

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
  let numReserved =parseInt(lines[0].split(" ")[0]);
  let seatNumP = parseInt(lines[0].split(" ")[1]);
  let seatNumQ= parseInt(lines[0].split(" ")[2]);
  let manhattanP = parseInt(lines[0].split(" ")[3]);
  let manhattanQ = parseInt(lines[0].split(" ")[4]);
  let reservedSeats = lines.splice(1);
  let newMovieT = new movieTheater(seatNumP,seatNumQ,manhattanP,manhattanQ,reservedSeats);
  newMovieT.bestSeatsAvail().map(x => console.log(x));
});
    
