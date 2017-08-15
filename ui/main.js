

//counter code 
var button=document.getElementById('counter');

button.onclick=function(){
    //create a request object
    var request=new XMLHTTPRequest();
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    //make request
    request.open('GET','http://medhabobbili.imad.hasura-app.io/counter',true);
    request.send(null);
};
