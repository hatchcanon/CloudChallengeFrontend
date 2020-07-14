var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("count").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://lgssuxyu51.execute-api.us-east-1.amazonaws.com/prod", true);
xhttp.send();