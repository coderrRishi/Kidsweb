function speak(leater){
    //alert(leater)
    var a= document.getElementById(leater);
    var icon= document.getElementById("icon");
    a.play();
    //setTimeout(icon.style.color ="blue",500);
    icon.style.color ="red";
    setTimeout(() => {
        icon.style.color ="black";
        console.log("this is the first message");
    }, 1000);

}

