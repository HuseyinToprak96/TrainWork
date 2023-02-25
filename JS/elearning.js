var lang=localStorage.getItem("lang");
window.onload=function(){
    topMenu();
    asideList();
elearningList();
footerContent();
}
function elearningList(){
    var url=window.location.href;
    var parameters=getQueryParams(url);
    var typeId=parameters.id;
    var trainer=parameters.trainer;
    console.log(trainer);
    var listData="";
    if(parseInt(typeId)>0)
    listData=elearnings.filter(x=>x.elearningType==typeId);
    else {
    listData=elearnings;}
    if(trainer!="1")
    listData=listData.filter(x=>x.trainer==trainer);
    console.log(listData);
    var types=menuLinks.filter(x=>x.id==2)[0].subMenu;
var article=document.getElementsByTagName("article")[0];
var html="<fieldset id='Filter'><legend>"+resource.filter(x=>x.page=="elearning" && x.title=="Fieldset1Header" && x.language==lang)[0].content+"</legend>";
html+="<div class='filter-control'><label>"+resource.filter(x=>x.page=="elearning" && x.title=="Fieldset1Label1" && x.language==lang)[0].content+"</label>:";
html+="<select id='trainingType'>";
html+="<option ''>"+resource.filter(x=>x.page=="general" && x.title=="SelectAll" && x.language==lang)[0].content+"</option>";
types.forEach(x=>{
    html+="<option value='"+x.id+"'>"+x.name+"</option>";
});
html+="</select></div>";
html+="<div class='filter-control'><label>"+resource.filter(x=>x.page=="elearning" && x.title=="Fieldset1Label2" && x.language==lang)[0].content+"</label>:"
html+="<select id='trainerList'>";
html+="<option value='1'>"+resource.filter(x=>x.page=="general" && x.title=="SelectAll" && x.language==lang)[0].content+"</option>";
elearnings.forEach(x=>{
    html+="<option>"+x.trainer+"</option>";
});
html+="</select></div>";
html+="<div class='filter-control'><button onclick='searchTrainings();'>"+resource.filter(x=>x.page=="general" && x.title=="searchButton" && x.language==lang)[0].content+"</button></div>";
html+="</fieldset>";
html+="<fieldset><legend>"+resource.filter(x=>x.page=="elearning" && x.title=="FieldsetHeader" && x.language==lang)[0].content+"</legend><div class='content-list'>";
listData.forEach(x=>{
html+="<div class='list-item'><image src='/Images/"+x.img+"' height='180' class='list-item-img'><div class='item-link-content'><a href='elearningDetail.html?id="+x.id+"' class='list-item-link'>"+x.name+"</a></div></div>";
});
html+="</div></fieldset>";
article.innerHTML=html;
}
function asideList(){
    var aside=document.getElementsByTagName("aside")[0];
    var html="<h3 class='aside-header'>"+resource.filter(x=>x.page=="elearning" && x.title=="asideHeader" && x.language==lang)[0].content+"</h3>";
    html+="<div class='aside-left-content'>";
    html+="<ul class='aside-list'>";
    var datas=elearnings;
    elearnings.forEach(x=>{
    html+="<a href='"+x.link+"'><li class='list-item' src=''>"+x.name+"</li></a>";
    });
    html+="</ul></div>";
    aside.innerHTML=html;
} 
function searchTrainings(){
var trainingType=document.getElementById("trainingType").value;
var trainer=document.getElementById("trainerList").value;
console.log(trainingType+" "+trainer);
window.location.href="elearning.html?id="+trainingType+"&trainer="+trainer;
}

function footerContent(){
    var footer=document.getElementsByTagName("footer")[0];
    footer.innerHTML="<p class='footer-content'>"+resource.filter(x=>x.page=="elearning" && x.title=="footer-content" && x.language==lang)[0].content+"<strong>'Mahmut Hoca'</strong></p>";
}