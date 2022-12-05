var x="";
var y="";
function displayFrames()
{
    for(i=0;i<5;i++)
    {
        x=document.getElementById("animation")[i].value;
        document.getElementById("text-area").value+=ANIMATIONS[x];
    }
}
function apply()
{
    x= document.getElementById("animation").value;
    
    document.getElementById("text-area").value= ANIMATIONS[x];
}
function fontSizeChnage()
{
    y=document.getElementById("fontsize").value;
    
    document.getElementById("text-area").style.fontSize=y;
}

