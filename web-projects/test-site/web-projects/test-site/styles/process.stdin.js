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
  const kindOfBread = parseInt(lines[0].split(" ")[0]);
 const numOfOrder = parseInt(lines[0].split(" ")[1]);

  const paizaBreadShop = new breadShop(kindOfBread);
  //console.log(paizaBreadShop._kindOfBread);
  
  //initialize inventory and price for breadShop
  for(let i=0;i<kindOfBread;i++)
  {
      paizaBreadShop.setPrice(parseInt(lines[i+1].split(" ")[0]),i);
      paizaBreadShop.setInventory(parseInt(lines[i+1].split(" ")[1]),i);
      //console.log(lines[i+1].split(" ")[1]);

  }
  
  //buy and sell
  for(let i=0;i<numOfOrder;i++)
  {
      let order = lines[i+1+kindOfBread].split(" ");
      let orderTotal = 0;
      let command = order.shift();

      if(command=="buy")
      {
      for(let j =0;j<order.length;j++)
      {
          let amount = parseInt(order[j]);
          let price = paizaBreadShop.priceOfBread(j);
          let isInventory = paizaBreadShop.inventoryCheck(j,amount);
          if(!(isInventory))
          {
              orderTotal = -1;
              j=order.length;
          }
          else if(isInventory)
          {
              orderTotal += price*amount;
              paizaBreadShop.sellBread(amount,j);
          }
      }
      console.log(orderTotal);
      }
      
      if(command=="bake")
      {
      for(let j =0;j<order.length;j++)
      {
          let amount = parseInt(order[j]);
          paizaBreadShop.bakeBread(amount,j);
          
      }
      }

  }
  
  
  //console.log(paizaBreadShop._inventory);
  //console.log(paizaBreadShop._price);

  
  

});

class breadShop
{

  constructor(kindOfBread)
  {
    this._kindOfBread = kindOfBread;
    //パンの在庫数用配列
    this._inventory = [];
     //パンの値段用配列
    this._price = [];
  }
  
  setPrice(price, breadNum)
  { 
      this._price[breadNum] = price;
  }
  
  setInventory(amount,breadNum)
  {
      this._inventory[breadNum] = amount;
  }
  
  bakeBread(amount,breadNum)
  {
      this._inventory[breadNum] += amount;

  }
  
  sellBread(amount,breadNum)
  {
      this._inventory[breadNum] -= amount;
  }
  
  inventoryCheck(breadNum,amount)
  {
      
      if(amount <= this._inventory[breadNum])
      {
          return true;
      }
      
      else if(amount > this._inventory[breadNum])
      {
          return false;
      }
      
  }
  
  priceOfBread(breadNum)
  {
      return this._price[breadNum];
  }
  
  
}

