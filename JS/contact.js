var lang=localStorage.getItem("lang");
window.onload=function(){
    topMenu();
    PageContent();
}

function PageContent(){
    var html="<fieldset>";
    html+='<legend>'+resource.filter(x=>x.page=="contact" && x.title=="fieldsetTitle" && x.language==lang)[0].content+'</legend>';
    html+="<table><tr>";
    html+='<td rowspan="4" id="location"><iframe src="'+contactData.locationMap+'" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>';
    html+='<th>'+resource.filter(x=>x.page=="contact" && x.title=="tabletd1Text" && x.language==lang)[0].content+':</th><td>'+contactData.mail+'</td></tr>';
    html+='<tr><th>'+resource.filter(x=>x.page=="contact" && x.title=="tabletd2Text" && x.language==lang)[0].content+':</th><td>'+contactData.phone+'</td></tr>';
    html+='<tr><th>'+resource.filter(x=>x.page=="contact" && x.title=="tabletd3Text" && x.language==lang)[0].content+':</th><td>'+contactData.fax+'</td></tr>';
    html+='<tr><th>'+resource.filter(x=>x.page=="contact" && x.title=="tabletd4Text" && x.language==lang)[0].content+':</th><td>'+contactData.centerAdres+'</td></tr>';
    html+='</table></fieldset>';
    var article=document.getElementById("contact-content");

    article.innerHTML=html;
}