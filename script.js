let btn = document.querySelectorAll(".btn")
let value = document.getElementById("value")

for (let i=0; i < btn.length; i++ ) {
    btn[i].addEventListener("click", function() {
        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML)
        } else if (this.innerHTML == "AC") {
            value.textContent = ""
        } else {
            value.innerHTML += this.innerHTML
        }
    })
}

new kursor({
    type: 2,
    removeDefaultCursor: true,
    color: "#f6c3d6"
});

$(".switch").click(function(){
    $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")){
        $(".switch").attr("name", "sunny-outline");
    } else{
        $(".switch").attr("name", "moon-outline");
    }
});