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

//submit name
var nameInput = document.GetElementById('name');
var name = nameInput.value;
var submit = document.GetElementById('submit_btn');
submit.onclick = function(){
    //make a request to the server and send the name back
   //capture the list of name and render it back as list
    var name=['name1','name2','name3','name4'];
    var list ='';
    for(var i=0;i<name.length,i++)
    {
        list+='<li>'+ name[i] +</li>;
    }
    var ul=document.getElementById('namelist');
    ul.InnerHTML=list;
};
    
}