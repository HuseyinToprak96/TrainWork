window.onload=function(){
    var lang=localStorage.getItem("lang");
    topMenu();
    basariSiralamasi();
    imagesList();
    trainigList();
    document.getElementById("table1Title").innerText=resource.filter(x=>x.page=="home" && x.title=="table1Title" && x.language==lang)[0].content;
    document.getElementById("table2Title").innerText=resource.filter(x=>x.page=="home" && x.title=="table2Title" && x.language==lang)[0].content;
}
function basariSiralamasi(){
    var students=users.filter(x=>x.Role==2);
    var tbody=document.getElementsByTagName("tbody")[0];
    var html="";
    for (let index = 1; index <= students.length; index++) {
        html+="<tr><td>"+index+"</td><td>"+students[index-1].Username+"</td></tr>";
    }
    tbody.innerHTML=html;
}
function imagesList(indis=0){
    var slaytDiv=document.getElementById("imgList");
    var images=SlaytImages;
    var html="<image src='Images/slayt/"+images[indis].image+"' height='350' width='80%' style='margin-left:10%'>";
    html+="<br><div style='margin-left:40%' id='slaytButton'>";
    for (let index = 1; index <= images.length; index++) {
    html+="<button onclick='imagesList("+(index-1)+")'>"+index+"</button>";
    }
    html+="</div>";
    slaytDiv.innerHTML=html;
}

function trainigList(){
    var students=users.filter(x=>x.Role==1);
    var list=document.getElementById("trainingList");
    var html="";
    for (let index = 1; index <= students.length; index++) {
        html+="<tr><td>"+index+"</td><td>"+students[index-1].Username+"</td></tr>";
    }
    list.innerHTML=html;
}