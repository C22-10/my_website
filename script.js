
function showContent(tabName) {
    var tabs = ['bio', 'osv', 'ana'];
    tabs.forEach(function(tab) {
        document.getElementById(tab).style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}

function updateProgressValues() {
    var progressValues = [40, 60, 90]; 
    for (var i = 1; i <= progressValues.length; i++) {
        var progressBar = document.getElementById('progress' + i);
        if (progressBar) {
            progressBar.value = progressValues[i - 1];
        }
    }
}
function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
    document.getElementById("clock").innerHTML = formattedTime;
}

function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}
setInterval(updateClock, 1000);
document.addEventListener("DOMContentLoaded", updateClock);
function showContent(tabName) {
    var tabs = ['bio', 'osv', 'ana'];
    tabs.forEach(function(tab) {
        document.getElementById(tab).style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';

    if (tabName === 'bio') {
        updateProgressValues();
    }
}
function goToInstituteSite() {

        window.open("https://iszzi.kpi.ua/", "_blank");
    }

	document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});
function toggleMenu() {
  const menuContent = document.querySelector('.menu-content');
  menuContent.style.display = (menuContent.style.display === 'block') ? 'none' : 'block';
}
  function redirectToOtherPage() {
        var newPage = 'index2.html';

        window.location.href = newPage;
    }