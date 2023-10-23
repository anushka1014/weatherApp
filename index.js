
function setData(temperature){
    document.getElementById("temp").innerText = temperature.main.temp.toFixed() + "°C";
    // document.getElementById("day_temp").innerHTML = temperature.main.temp+ "°C";
    document.getElementById("place").innerHTML=temperature.name;
   document.getElementById("temp_min").innerHTML = temperature.main.temp_min.toFixed() + "°C";
   document.getElementById("temp_max").innerHTML = temperature.main.temp_max.toFixed() + "°C";
   document.getElementById("rise").innerHTML = temperature.weather[0].description;
   document.getElementById("set").innerHTML = temperature.main.humidity;
   document.getElementById("feel").innerHTML = temperature.main.feels_like;
   document.getElementById("visible").innerHTML = temperature.visibility;
   document.getElementById("airspeed").innerHTML = temperature.wind.speed + " m/s";
};
async function feth(){
   var search = document.getElementById("search");
var url= `http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=f2448c0442822218ff632caea90dfa51&units=metric`;
   await fetch(url)
     .then((res) => res.json())
     .then((data) => setData(data));
     search.value="";
 };
document.getElementById("submit").addEventListener("submit",(e)=>{
    e.preventDefault();
    feth();
}) 

function change() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var year = time.getFullYear();
  var datenew = new Date(time);
  document.getElementById("hours").innerText = hours > 12 ? "0" + (hours - 12) : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("ampm").innerText = hours > 12 ? "PM" : "AM";
  document.getElementById("date").innerText = datenew .toDateString() .slice(4);
}
setInterval(change, 100);

function myFunction() {
   // document.getElementById("purple1").style.marginRight = "839px";
   document.getElementById("purple1").style.transform= "translate(-420px)"; 
   document.getElementById("purple1").style.transitionDuration = "1.5s";

 // document.getElementById("purple3").style.marginLeft = "839px";
   document.getElementById("purple3").style.transform= "translate(420px)"; 
   document.getElementById("purple3").style.transitionDuration = "1.5s";
 }