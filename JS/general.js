var lang=localStorage.getItem("lang");
function topMenu(){
    selectLanguage(lang);
    var nav=document.getElementsByTagName("nav")[0];
    var htmlMenu="<div id='burger-button'><ul id='top-menu'>";
    menuLinks.forEach(x=>{
htmlMenu+="<li class='top-menu-item'><a href='"+x.link+"' target='"+x.target+"'>"+x.name+"</a>";
htmlMenu+=subMenu(x.subMenu);
htmlMenu+="</li>";
    })
    htmlMenu+="</ul></div>";
    nav.innerHTML=htmlMenu;
}
function subMenu(menu){
    var htmlMenu="";
    if (menu.length>0) {
        htmlMenu+="<ul id='sub-menu'>"
            menu.forEach(y=>{
        htmlMenu+="<li class='sub-menu-item'><a href='elearning.html?id="+y.id+"&trainer=1'>"+y.name+"</a></li>";
            });
            htmlMenu+="</ul>";
        }
        return htmlMenu;
}
function footer(){
var foot=document.getElementsByTagName("footer")[0];
foot.innerHTML+="<div style='float:left;'>"+resource.filter(x=>x.page=="general" && x.title=="footerText" && x.language==lang)[0].content+"</div><div id='time' style='float: right;'></div>";
setInterval(timeWrite,1000);
}

function timeWrite()
{
var nowTime=new Date().getSeconds();
var footer=document.getElementById("time");
console.log(nowTime);
footer.innerText=nowTime;
}

window.onload=function(){
    topMenu();
}
