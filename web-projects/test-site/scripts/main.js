const myImage = document.querySelector("img");

//クリックをすると画像が変わる
myImage.onclick = ()=>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/fox.png")
    {
        myImage.setAttribute("src","images/tanuki.png");
    }
    else{
        myImage.setAttribute("src","images/fox.png");
    }
    }
    
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//アラートでユーザーに名前を入力させ、ブラウザに名前をデータとして格納
function setUserName()
{
    let myName = prompt("あなたの名前を入力してください");
    if(!myName)
    {
        setUserName();
    }
    else
    {
    localStorage.setItem("name",myName);
    myHeading.textContent = `Mozillaはかっこいいよ、${myName}`;
    }
}

if(localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent =`Mozillaはかっこいいよ、${storedName}`;
}

myButton.onclick = () =>
{
    setUserName();
}
