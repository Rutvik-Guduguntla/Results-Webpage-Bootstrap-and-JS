$(document).ready(function(){
    $('#rcscarousel').carousel({interval:1400});
    $('#rcscarousel').click(function(){
        
        $('#resultmodal').modal('show'); 
    });
});
$(document).ready(function(){
   
    $('#checkr').click(function(){
        
        var spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];
        var ar=[123003115,123003190,123003137,123003071,123004094];
    var fl=false;
    var regno=null
    regno=document.getElementById("reg").value;
    console.log(regno.length)
     for(var i=0;i<ar.length;i++){
         if(regno==ar[i]){
         fl=true
         }
    }
    function getSpin() {

        if(regno.length!=0){
            if(regno.length==9){
                if(fl){
                    $('#changeres').removeClass();
                    $('#changeres').addClass("invisible");
                    $('#coin-flip-cont').removeClass();
                    $('#coin-flip-cont').addClass("visible");
            //document.getElementById("status").innerHTML="congratulations you are into the club"
                var spin = spinArray[6];
                }
                else{
                    $('#changeres').removeClass();
                    $('#changeres').addClass("invisible");
                    $('#coin-flip-cont').removeClass();
                    $('#coin-flip-cont').addClass("visible");
            //document.getElementById("status").innerHTML="sorry you are not into the club"
                var spin = spinArray[7];
                }

            }
            else{
                alert("Enter valid registration number");
                
            }
            
        }
        
return spin;
}
$('#coin').removeClass();
setTimeout(function(){
$('#coin').addClass(getSpin());
}, 100);
        $('#profile-tab').tab('show');
    });
});