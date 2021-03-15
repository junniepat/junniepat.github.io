function datFuncbanner() {
    var d = new Date();
    var n = d.getDay()
    if(n === 5) {
        var element = document.getElementById("announement")
        element.classList.add("showBanner");
        return;
    }
    else {
        var element = document.getElementById("announement")
        element.classList.add("closeBanner");
        return;
    }
    
  }