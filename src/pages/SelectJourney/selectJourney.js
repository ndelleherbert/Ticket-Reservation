var journey = document.getElementById('journey');

//journey.value = "Buea";

var form = document.getElementById('form');
form.addEventListener('submit',function(){
     if(!journey.value){
    
    alert("Please input a valid destination");
}   
else{
    
    var x = parseFloat(journey.value);
    alert(x);
    console.log(x);
}
                      
                      
                      
                      
                      
                      });