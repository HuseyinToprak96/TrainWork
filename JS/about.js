var lang=localStorage.getItem("lang");
window.onload=function(){
    topMenu();
    getAboutPage();
}
function getAboutPage(){
    var article=document.getElementsByTagName("article")[0];
    var html="<div id='content'><h2>"+ menuLinks.filter(x=>x.id==3)[0].name+"</h2>";
    html+=menuLinks.filter(x=>x.id==3)[0].content+"</div>";
    article.innerHTML=html;
}