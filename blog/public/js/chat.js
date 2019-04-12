
~function(){

    let bottom = document.querySelector("#window .bottom"),
        cMain = document.querySelector("#window .c-main .char-content");
    let n = 0;
    bottom.onclick = function(){
        cMain.innerHTML += "卧槽我草";
    }

}();