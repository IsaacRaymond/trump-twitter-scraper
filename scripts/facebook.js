let req = new XMLHttpRequest();
let url = '/google';

function getInfo(){//#first_name
  let first_name = document.getElementById("first-name").value;
  let last_name = document.getElementById("last-name").value;
  req.open('GET', '/'+url+''+first_name+'/'+last_name, true);
  req.addEventListener('load', onLoad);
  req.addEventListener('error', onError);
  req.send();
}

function onLoad(){
  let response = this.responseText;
  let parsedResponse = JSON.parse(response);
  document.getElementById("display").innerHTML = parsedResponse['message'];
}

function onError(){
  console.log("error in AJAX call");
}
