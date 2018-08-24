let leavesOffice = new Date(2021, 0, 20, 9);
let tabIndex = 1;
let tabArray = document.getElementsByClassName("tab");
setInterval(()=>{
  let remaining = (leavesOffice.getTime()/1000)-(Date.now()/1000);
  let days = remaining/(24*60*60);
  let hours = (days - Math.floor(days))*24;
  let minutes = (hours - Math.floor(hours))*60;
  let seconds = (minutes - Math.floor(minutes))*60;
  //console.log(`Days Left: ${Math.floor(days)} Hours Left ${Math.floor(hours)} Minutes Left: ${Math.floor(minutes)} Seconds Left: ${Math.floor(seconds)}`.toUpperCase());
  document.getElementById("days").innerText = `${Math.floor(days)} days`;
  document.getElementById("hours").innerText = `${Math.floor(hours)} `;
  document.getElementById("minutes").innerText = `${Math.floor(minutes)} minutes`;
  document.getElementById("seconds").innerText = `${Math.floor(seconds)} seconds`;
  document.getElementById("unit3").innerText = "Hours";
  for (var x = 0; x < tabArray.length; x++) {
    tabArray[x].classList.remove("flash");
  }
  console.log(tabIndex);
  var tab = document.getElementById(`tab${tabIndex}`);
  console.log(tab);
  document.getElementById(`tab${tabIndex}`).classList.add("flash");
  tabIndex++
  if (tabIndex > tabArray.length) {
    tabIndex = 1;
  }
}, 1000);