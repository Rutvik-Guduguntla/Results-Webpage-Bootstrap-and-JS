$(document).ready(function(){
    $('#rcscarousel').carousel({interval:1400});
    $('#rcscarousel').click(function(){
        
        $('#resultmodal').modal('show'); 
    });
});
$(document).ready(function(){
 
    $('#checkr').click(function(){
        
        // $("#sel").attr({"display":none})
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
                    // document.getElementById("status").innerHTML=" "
                    $('#confetti-wrapper').removeClass();
                    $('#confetti-wrapper').addClass("visible");
                    $('#changeres').removeClass();
                    $('#changeres').addClass("invisible");
                    $('#changere').removeClass();
                    $('#changere').addClass("invisible");
                    $('#coin-flip-cont').removeClass();
                    $('#coin-flip-cont').addClass("visible");
            
            setTimeout(function(){
                for(i=0; i<50; i++) {
                    // Random rotation
                    var randomRotation = Math.floor(Math.random() * 360);
                      // Random Scale
                    var randomScale = Math.random() * 1;
                    // Random width & height between 0 and viewport
                    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
                    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
                    
                    // Random animation-delay
                    var randomAnimationDelay = Math.floor(Math.random() * 2);
                    console.log(randomAnimationDelay);
                  
                    // Random colors
                    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
                    var randomColor = colors[Math.floor(Math.random() * colors.length)];
                  
                    // Create confetti piece
                    var confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.top=randomHeight + 'px';
                    confetti.style.right=randomWidth + 'px';
                    confetti.style.backgroundColor=randomColor;
                    // confetti.style.transform='scale(' + randomScale + ')';
                    confetti.style.obacity=randomScale;
                    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
                    confetti.style.animationDelay=randomAnimationDelay + 's';
                    document.getElementById("confetti-wrapper").appendChild(confetti);
                  }
                  $('#message-tab').tab('show');
                  $("#notsel").removeClass("vis")
                  $("#notsel").addClass("notvis")
                //   $("#notsel").addClass("notvis")
                  $("#sel").addClass("vis")
                
                }, 4000);
                var spin = spinArray[6];
                setTimeout(function(){
                    
                    $('#confetti-wrapper').removeClass();
                            $('#confetti-wrapper').addClass("invisible");
                            //$('#resultmodal').modal('hide')
                    }, 7400);
                
               
                }
                else{
                    $('#changeres').removeClass();
                    $('#changeres').addClass("invisible");
                    $('#coin-flip-cont').removeClass();
                    $('#coin-flip-cont').addClass("visible");
                
                var spin = spinArray[7];
                setTimeout(function(){
                    // document.getElementById("status").innerHTML="We Thank you again for your interest in RCS.We appreciate the time you,ve spent with us during the recruitment process. We are impressed with your efforts and wish you the best in future."
                    $('#confetti-wrapper').removeClass();
                            $('#confetti-wrapper').addClass("invisible");
                            $("#unsel").removeAttr("style")
                            // $('#resultmodal').modal('hide')
                            $('#message-tab').tab('show');
                            $("#sel").removeClass("vis")
                            $("#sel").addClass("notvis")  
                  $("#notsel").addClass("vis")

                    }, 4000);
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