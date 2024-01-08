const changer=document.getElementById("Changer")
console.log(changer);
const container=document.getElementById("box")
const colorArray= new Array('red','yellow','blue','black','white','purple','orange','blueviolet','aqua','aquamarine');
console.log(colorArray);
changer.onclick= () => {
    container.style.backgroundColor=colorArray[Math.floor(Math.random()*10)];
    console.log(container.style.backgroundColor)
}