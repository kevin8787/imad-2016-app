//counter code
var button = document.getElementById("counter");


button.onclick =function(){
  //Create a request objects
  var request = new XMLHttpRequest();
  
  
  //capture the request and storeit in a variable
  request.onreadystatechange =function(){
    if(request.readystate==XMLHttpRequest.DONE)
    //take some action
    if(request.status==200){
        var counter = request.responseText;
        var span = document.getElementById('count');
        span.InnerHTML = counter.toString();
    }
  
      
      
  };
  //make the request
  request.open('GET', 'http://kevin8787.imad.hasura-app.io/counter', true);
  request.send(null);
};