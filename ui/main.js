//counter code 
var button=document.getElementById('counter');

button.onclick=function(){
    //create a request object
    var request=new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
              
    var list='';
    for(i=0;i<names.length;i++)
    {
        list+='<li>' + names[i] +'</li>'
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
 
            }
        }
    };
    //make request
    request.open('GET','http://medhabobbili.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};


// submit Name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make request to the server and send the name 
    //capture a list of names and render it as a list
};  