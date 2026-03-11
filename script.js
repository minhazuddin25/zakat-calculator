
function calculateZakat(){

var cash = parseFloat(document.getElementById('cash').value) || 0;
var bank = parseFloat(document.getElementById('bank').value) || 0;
var goldGram = parseFloat(document.getElementById('goldGram').value) || 0;
var goldPrice = parseFloat(document.getElementById('goldPrice').value) || 0;
var silverGram = parseFloat(document.getElementById('silverGram').value) || 0;
var silverPrice = parseFloat(document.getElementById('silverPrice').value) || 0;
var business = parseFloat(document.getElementById('business').value) || 0;
var liabilities = parseFloat(document.getElementById('liabilities').value) || 0;

var goldValue = goldGram * goldPrice;
var silverValue = silverGram * silverPrice;

var totalAssets = cash + bank + goldValue + silverValue + business;
var netAssets = totalAssets - liabilities;

var nisab = 85 * goldPrice; // Gold Nisab
var zakat = netAssets * 0.025;

var resultBox = document.getElementById("result");
var donateBtn = document.getElementById("donateBtn");

if(netAssets < nisab || netAssets <= 0){
    resultBox.innerHTML =
    "<strong>Nisab Threshold:</strong> $" + nisab.toFixed(2) + "<br>" +
    "<strong>Your Net Assets:</strong> $" + netAssets.toFixed(2) + "<br><br>" +
    "<strong>You are below Nisab. No Zakat is due.</strong>";
    donateBtn.style.display = "none";
}else{
    resultBox.innerHTML =
    "<strong>Nisab Threshold:</strong> $" + nisab.toFixed(2) + "<br>" +
    "<strong>Total Assets:</strong> $" + totalAssets.toFixed(2) + "<br>" +
    "<strong>Net Zakatable Amount:</strong> $" + netAssets.toFixed(2) + "<br>" +
    "<strong>Zakat Due (2.5%):</strong> $" + zakat.toFixed(2);
    donateBtn.style.display = "block";
}

resultBox.style.display = "block";
}

function donateNow(){
window.location.href = "https://www.minhaz.com.bd";
}
