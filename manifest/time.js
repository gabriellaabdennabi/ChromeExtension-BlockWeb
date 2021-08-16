$(function () {

function getTime(){

const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const second = time.getSeconds();
const timeText = `${hours}: ${minutes}: ${second}`
$("#time").text(timeText);//Update the time 

}

setInterval(getTime,1000);

})