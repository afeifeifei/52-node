
//标题皮一下~
(function(){
    var title = document.title;
    window.addEventListener("focus",()=>{
        document.title = title;
    });
    window.addEventListener("blur",()=>{
        document.title = "快回来！出bug啦！！";
    });
})();


















