var dd=document.getElementsByClassName("dropdown");
var i;
for(i=0;i<dd.length;i++)
{
    dd[i].addEventListener("click",function()
    {
        this.classList.toggle("active");
        var ddContent=this.nextElementSibling;
        if(ddContent.style.display==="block")
        {
            ddContent.style.display="none";
        }
        else{
            ddContent.style.display="block";
        }
    });   
}

var slide=1;
show(slide);
function move(n){
    show(slide+=1);
}
function show(n){
    var i;
    var x=document.getElementsByClassName("slide");
    if(n>x.length){
        slide=1;
    }
    if(n<1){
        slide=x.length;
    }
    for(i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }
    x[slide-1].style.display="block";
}