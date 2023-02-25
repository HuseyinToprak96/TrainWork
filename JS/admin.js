var lang=localStorage.getItem("lang");
var userList=[];
window.onload=function(){
userList=users;
headerContent();
homeButton();
getLeft();
getCenter();
getRight();
}
function headerContent(){
    var title=document.getElementsByClassName("header-title")[0];
    title.innerHTML=resource.filter(x=>x.page=="admin" && x.title=="header-content" && x.language==lang)[0].content;
}
function homeButton(){
    var nav=document.getElementsByTagName("nav")[0];
var html='<button class="nav-link" onclick="goHome();"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg><u>'+resource.filter(x=>x.page=="admin" && x.title=="nav-link" && x.language==lang)[0].content+'</u></button>';
nav.innerHTML=html;
}
//GET
function getLeft(){
var aside=document.getElementsByTagName("aside")[0];
var html="<h3>"+resource.filter(x=>x.page=="admin" && x.title=="left-table-header" && x.language==lang)[0].content+"</h3><div class='table-div' >";
html+="<div class='alert-success' id='left-alert'>"+resource.filter(x=>x.page=="admin" && x.title=="success-message" && x.language==lang)[0].content+"</div>";
html+="<table id='left-table'>";
html+="<tr><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td1" && x.language==lang)[0].content+"</th><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td2" && x.language==lang)[0].content+"</th><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td3" && x.language==lang)[0].content+"</th></tr>";
var students=userList.filter(x=>x.Role==2);
var i=1;
students.forEach(x=>{
html+="<tr id='children_"+x.id+"'><td>"+i+"</td><td>"+x.Username+"</td><td><button class='btn-remove' onclick='removeChildren("+x.id+")'>"+resource.filter(x=>x.page=="admin" && x.title=="table-td3" && x.language==lang)[0].content+"</button></td></tr>";
i++;
});
html+="</table></div>";
html+=getAddStudentForm();

aside.innerHTML=html;
}

function getAddStudentForm(){
var html="";
html+="<div class='form-div'>";
html+="<h3>"+resource.filter(x=>x.page=="admin" && x.title=="left-form-header" && x.language==lang)[0].content+"</h3>";
html+="<div class='form-element'>"
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-left-right-label1" && x.language==lang)[0].content+"</div><input type='eposta' id='children-username'>";
html+="</div>";
html+="<div class='form-element'>";
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-left-right-label2" && x.language==lang)[0].content+"</div><input type='password' id='children-password'>";
html+="</div>";
html+="<div class='form-element'><button class='btn-save' onclick='addChildren()'>"+resource.filter(x=>x.page=="admin" && x.title=="form-submit-button" && x.language==lang)[0].content+"</button>";
html+="</div></div>";
return html;
}


function getCenter(){
    var article=document.getElementsByTagName("article")[0];
    var html="<h3>"+resource.filter(x=>x.page=="admin" && x.title=="center-table-header" && x.language==lang)[0].content+"</h3><div class='table-div'>";
    html+="<div class='alert-success' id='center-alert'>"+resource.filter(x=>x.page=="admin" && x.title=="success-message" && x.language==lang)[0].content+"</div>";
    html+="<table id='center-table'>";
    html+="<tr><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td1" && x.language==lang)[0].content+"</th><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td4" && x.language==lang)[0].content+"</th><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td3" && x.language==lang)[0].content+"</th></tr>";
    var teachers=elearnings;
    var i=1;
    teachers.forEach(x=>{
    html+="<tr id='elearning_"+x.id+"'><td>"+i+"</td><td>"+x.name+"</td><td><button class='btn-remove' onclick='removeElearning("+x.id+");'>"+resource.filter(x=>x.page=="admin" && x.title=="table-td3" && x.language==lang)[0].content+"</button></td></tr>";
    i++;
    });
    html+="</table></div>";
    html+=getAddTrainingForm();
    article.innerHTML=html;
}

function getAddTrainingForm(){
    var html="";
html+="<div class='form-div'>";
html+="<h3>"+resource.filter(x=>x.page=="admin" && x.title=="center-form-header" && x.language==lang)[0].content+"</h3>";
html+="<div class='form-element'>"
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-center-label1" && x.language==lang)[0].content+"</div><input type='text' id='elearning-name'>";
html+="</div>";
html+="<div class='form-element'>";
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-center-label2" && x.language==lang)[0].content+"</div><input type='text' id='elearning-description'>";
html+="</div>";
html+="<div class='form-element'>";
html+="<div>"+"Link"+"</div><input type='text' id='elearning-description'>";
html+="</div>";
html+="<div class='form-element'>";
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-center-label4" && x.language==lang)[0].content+"</div><input type='file' id='elearning-description'>";
html+="</div>";
html+="<div class='form-element'>";
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-center-label5" && x.language==lang)[0].content+"</div><input type='text' id='elearning-description'>";
html+="</div>";
html+="<div class='form-element'>";
html+="<div>"+"Video"+"</div><input type='file' id='elearning-description'>";
html+="</div>";
html+="<div class='form-element'>";
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-center-label7" && x.language==lang)[0].content+"</div><input type='text' id='elearning-description'>";
html+="</div>";
html+="<div class='form-element'><button class='btn-save' onclick='addTeacher()'>"+resource.filter(x=>x.page=="admin" && x.title=="form-submit-button" && x.language==lang)[0].content+"</button>";
html+="</div></div>";
return html;
}


function getRight(){
var aside=document.getElementsByTagName("aside")[1];
var html="<h3>"+resource.filter(x=>x.page=="admin" && x.title=="right-table-header" && x.language==lang)[0].content+"</h3><div class='table-div'>";
html+="<div class='alert-success' id='right-alert'>"+resource.filter(x=>x.page=="admin" && x.title=="success-message" && x.language==lang)[0].content+"</div>";
html+="<table id='right-table'>";
html+="<tr><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td1" && x.language==lang)[0].content+"</th><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td2" && x.language==lang)[0].content+"</th><th>"+resource.filter(x=>x.page=="admin" && x.title=="table-td3" && x.language==lang)[0].content+"</th></tr>";
var teachers=userList.filter(x=>x.Role==1);
var i=1;
teachers.forEach(x=>{
html+="<tr id='teacher_"+x.id+"'><td>"+i+"</td><td>"+x.Username+"</td><td><button class='btn-remove' onclick='removeTeacher("+x.id+");'>"+resource.filter(x=>x.page=="admin" && x.title=="table-td3" && x.language==lang)[0].content+"</button></td></tr>";
i++;
});
html+="</table></div>";
html+=getAddTeacherForm();
aside.innerHTML=html;
}

function getAddTeacherForm(){
var html="";
html+="<div class='form-div'>";
html+="<h3>"+resource.filter(x=>x.page=="admin" && x.title=="right-form-header" && x.language==lang)[0].content+"</h3>";
html+="<div class='form-element'>"
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-left-right-label1" && x.language==lang)[0].content+"</div><input type='eposta' id='teacher-username'>";
html+="</div>";
html+="<div class='form-element'>";
html+="<div>"+resource.filter(x=>x.page=="admin" && x.title=="form-left-right-label2" && x.language==lang)[0].content+"</div><input type='password' id='teacher-password'>";
html+="</div>";
html+="<div class='form-element'><button class='btn-save' onclick='addTeacher()'>"+resource.filter(x=>x.page=="admin" && x.title=="form-submit-button" && x.language==lang)[0].content+"</button>";
html+="</div></div>";
return html;
}


function goHome(){
    window.location.href="home.html";
}


//REMOVE

function removeChildren(id){
    if(confirm(resource.filter(x=>x.page=="admin" && x.title=="message" && x.language==lang)[0].content)){
var tr=document.getElementById("children_"+id);
tr.remove();}
}


function removeElearning(id){
    if(confirm(resource.filter(x=>x.page=="admin" && x.title=="message" && x.language==lang)[0].content)){
var tr=document.getElementById("elearning_"+id);
tr.remove();}
}


function removeTeacher(id){
    if(confirm(resource.filter(x=>x.page=="admin" && x.title=="message" && x.language==lang)[0].content)){
var tr=document.getElementById("teacher_"+id);
tr.remove();}
}

//ADD

function addChildren(){
    var table=document.getElementById("left-table");
    var u=document.getElementById("children-username").value;
    var p=document.getElementById("children-password").value;
    var i=userList.length+1;
    table.innerHTML+="<tr id='children_"+i+"'><td>"+i+"</td><td>"+u+"</td><td><button class='btn-remove' onclick='removeChildren("+i+")'>"+resource.filter(x=>x.page=="admin" && x.title=="table-td3" && x.language==lang)[0].content+"</button></td></tr>"
    document.getElementById("left-alert").style.display="block";
    setTimeout(noneAlert,3000);
    var user={
        Username:u,
        Password:p,
        Role:2,
        id:i,
             }
userList.push(user);
console.log(userList.length)
}

function addElearning(){

}

function addTeacher(){
    var table=document.getElementById("right-table");
    var u=document.getElementById("teacher-username").value;
    var p=document.getElementById("teacher-password").value;
    var i=userList.length+1;
    document.getElementById("right-alert").style.display="block";
setTimeout(noneAlert,3000);
    table.innerHTML+="<tr id='teacher_"+i+"'><td>"+i+"</td><td>"+u+"</td><td><button class='btn-remove' onclick='removeTeacher("+i+")'>"+resource.filter(x=>x.page=="admin" && x.title=="table-td3" && x.language==lang)[0].content+"</button></td></tr>"

    var user={
        Username:u,
        Password:p,
        Role:1,
        id:i,
             }
userList.push(user);
}

function noneAlert(){
var alerts=document.getElementsByClassName("alert-success");
for (let index = 0; index < alerts.length; index++) {
    alerts[index].style.display="none";
}
}