var lang=localStorage.getItem("lang");
window.onload=function()
{
selectLanguage(lang);
footer();
var article=document.getElementsByTagName("article")[0];
var html='<div id="login-form"><div ><div>'+resource.filter(x=>x.page=="login" && x.title=="formTextbox1LabelText" && x.language==lang)[0].content+'</div>';
html+='<div><input type="text" placeholder="'+resource.filter(x=>x.page=="login" && x.title=="formTextbox1Placeholder" && x.language==lang)[0].content+'" id="username"></div></div>';
html+='<div><div>'+resource.filter(x=>x.page=="login" && x.title=="formTextbox2LabelText" && x.language==lang)[0].content+'</div><div><input type="password" placeholder="'+resource.filter(x=>x.page=="login" && x.title=="formTextbox2Placeholder" && x.language==lang)[0].content+'" id="password"></div></div>';
html+='<div><button onclick="login();">'+resource.filter(x=>x.page=="login" && x.title=="ButtonInnerText" && x.language==lang)[0].content+'</button></div>';
html+="<br>";
html+='<div class="alert-error" style="display: none;">'+resource.filter(x=>x.page=="login" && x.title=="ErrorMessage" && x.language==lang)[0].content+'</div></div>';
article.innerHTML=html;
}

function login()
{
var userName=document.getElementById("username").value;
var password=document.getElementById("password").value;
var loginUser=users.filter(x=>x.Username==userName && x.Password==password);
if(loginUser.length>0){
localStorage.setItem("Id",loginUser[0].Id);
localStorage.setItem("Role",loginUser[0].Role);
if (loginUser[0].Role==1){
window.location.href="admin.html";
}
else if(loginUser[0].Role==2){
 window.location.href="home.html";
}
}
else{
document.getElementsByClassName("alert-error")[0].style.display="block";
}
}

function footer(){
    var foot=document.getElementsByTagName("footer")[0];
    foot.innerHTML+="<div id='footerDiv'><div style='float:left;'><h3 class='item-header'>E-MEKTEP<h3></div><div id='time' style='float: right;'></div></div>";
    foot.innerHTML+="<div>"+resource.filter(x=>x.page=="general" && x.title=="footerText" && x.language==lang)[0].content+"<div>";
    setInterval(timeWrite,1000);
}

function timeWrite()
{
var nowTime=new Date().toLocaleString();
var footer=document.getElementById("time");
footer.innerText=nowTime;
}