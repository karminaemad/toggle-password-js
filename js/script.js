var input =document.getElementById("myInput");
var button =document.getElementById("btn");


button.onclick=function(){
    if(button.getAttribute("data-text") == "show"){
        input.setAttribute("type" , "text");
        this.setAttribute("data-text" , "hide");
        this.innerHTML ="hide";
    }else{
        input.setAttribute("type" , "password");
        this.setAttribute("data-text" , "show");
        this.innerHTML ="show";
    }
}