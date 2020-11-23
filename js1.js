function calculatorTip() {
  var billCoun = document.getElementById("billCoun").value;
  var service = document.getElementById("service").value;
  var numPeople = document.getElementById("peopleCoun").value;

  if (billCoun === "" || service == 0) {
    return;
  }

  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculator
  var total = (billCoun * service) / numPeople;
  //rotungire
  total = Math.round(total * 100) / 100;
  //2 cifre dupe virgula
  total = total.toFixed(2);
  
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}


document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculator").onclick = function() {
  calculatorTip();

};