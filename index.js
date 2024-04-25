var numberOfDrums= document.querySelectorAll(".drum").length;
var i=0;
while(i < numberOfDrums){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHtml=this.innerHTML;
        switch(buttonInnerHtml){
            case "k":
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            case "w":
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                console.log("Invalid");
                break;
        
        }
        document.querySelector("."+buttonInnerHtml).classList.add("pressed");
        setTimeout(function (){
            document.querySelector("."+buttonInnerHtml).classList.remove("pressed");
    
        },150)
    });
    i++
}


document.addEventListener("keydown", function (e){
    // alert("Key is presses " + e.key);
    document.querySelector("."+e.key).classList.add("pressed");
    
    switch(e.key){
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log("Invalid");
            break;
    
    }
    
    setTimeout(function (){
        document.querySelector("."+e.key).classList.remove("pressed");

    },100)
})