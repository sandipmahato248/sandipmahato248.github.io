
var playAnimation;
var currentTextFrame;
$(document).ready(function() {
    $("#animation").bind("change", function(){
        let val = $("#animation").val();
        console.log("inside animation",val);
        $("#text-area").val(ANIMATIONS[val]);
    });
    
    $("#fontsize").bind("change", function(){
        let val = $("#fontsize").val();
        console.log("inside fontsize",val)
        $("#text-area").css("font-size", val);
    });

    $("#turbo").bind("click", function(){
        console.log("inside turbo");
        let val = $("#animation").val();
        $("#text-area").val(ANIMATIONS[val]);
        clearInterval(playAnimation);
        startAnimation();
    });

    $("#start").bind("click", startAnimation);
    $("#stop").bind("click", stopAnimation);
});

function startAnimation(){
    $('#animation').prop('disabled', true);
    $('#start').prop('disabled', true);
    $('#text-area').prop('readonly', true);
    $('#stop').prop('disabled', false);

    let speed = $('#turbo').is(":checked") ? 50 : 250;
    console.log("Turbo speed: "+speed);
    let index = 0;
    currentTextFrame = $("#text-area").val();
    console.log("Curr text",currentTextFrame);
    let frames = currentTextFrame.split("=====\n")
    playAnimation = setInterval(() => {
        console.log("Running Animation");
        if(index >= frames.length){
            index = 0;
        }
        $("#text-area").val(frames[index]);
        index++;
    }, speed);
}

function stopAnimation(){
    $('#animation').prop('disabled', false);
    $('#fontsize').prop('disabled', false);
    $('#start').prop('disabled', false);
    $('#stop').prop('disabled', true);
    $('#text-area').prop('readonly', false);
    clearInterval(playAnimation);
    $("#text-area").val(currentTextFrame);
}


  