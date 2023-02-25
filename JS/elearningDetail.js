var lang=localStorage.getItem("lang");
window.onload=function(){
    topMenu();
    asideComponent();
    Detail();
    footerContent();
}
function asideComponent(){
    var url=window.location.href;
    var parameters= getQueryParams(url);
    var id=parameters.id;
    var elearningType=elearnings.filter(x=>x.id==id)[0].elearningType;
    var datas=elearnings.filter(x=>x.id!=id && x.elearningType==elearningType);
    console.log(elearningType);
    var leftHeader=menuLinks.filter(x=>x.id==2)[0].subMenu.filter(x=>x.id==elearningType)[0].name;
    var aside=document.getElementsByTagName("aside")[0];
    var html="<div class='aside-left-content'>";
    html+="<h3 class='left-header'>"+resource.filter(x=>x.page=="general" && x.title=="otherText" && x.language==lang)[0].content+" "+leftHeader+"</h3>"
    html+="<ul class='left-list'>";
    datas.forEach(x=>{
    html+="<a href='elearningDetail.html?id="+x.id+"' class='list-item-link'><li class='list-item'>"+x.name+"</li></a>";
    });
    html+="</ul></div>";
    aside.innerHTML=html;
}
function Detail(){
    var url=window.location.href;
    var parameters= getQueryParams(url);
    var id=parameters.id;
    var data=elearnings.filter(x=>x.id==id)[0];
    var article=document.getElementsByTagName("article")[0];
    var html="<fieldset>";
    html+="<legend>"+data.name+"</legend>"; 
    html+="<div class='full-content'><div class='left-content'>";
    html+='<video controls="controls" class="content-video"><source src="Videos/'+data.video+'" type="video/mp4" /></video></div>';
    html+="<div class='right-content'><table>"
    html+="<tr><th>"+resource.filter(x=>x.page=="elearningDetail" && x.title=="rightContentTh1" && x.language==lang)[0].content+":</th><td>"+data.name+"</td></tr>";
    html+="<tr><th>"+resource.filter(x=>x.page=="elearningDetail" && x.title=="rightContentTh2" && x.language==lang)[0].content+":</th><td><a href="+data.link+" title='"+resource.filter(x=>x.page=="elearningDetail" && x.title=="rightContentTh2LinkTitle" && x.language==lang)[0].content+"'>"+data.description+"</a></td></tr>";
    html+="<tr><th>"+resource.filter(x=>x.page=="elearningDetail" && x.title=="rightContentTh3" && x.language==lang)[0].content+":</th><td><a href="+data.link+" title='"+resource.filter(x=>x.page=="elearningDetail" && x.title=="rightContentTh2LinkTitle" && x.language==lang)[0].content+"'>"+data.trainer+"</a></td></tr>";

    html+="</table></div></fieldset>";
    article.innerHTML=html;
}
id:10,
function getId(){
    
    return parameters.id;
}
function footerContent(){
    var footer=document.getElementsByTagName("footer")[0];
    footer.innerHTML="<p class='footer-content'>"+resource.filter(x=>x.page=="elearning" && x.title=="footer-content" && x.language==lang)[0].content+"<strong>'Mahmut Hoca'</strong></p>";
}