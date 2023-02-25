var lang=localStorage.getItem("lang");
var menuLinks=[
    {
    id:1,
    name:resource.filter(x=>x.page=="menu" && x.title=="Link1" && x.language==lang)[0].content,
    link:"home.html",
    target:"",
    content:"",
    subMenu:[]
},
{
    id:2,
    name:resource.filter(x=>x.page=="menu" && x.title=="Link2" && x.language==lang)[0].content,
    link:"https://akademi.e-mektep.com/course/view.php?id=3",
    target:"_blank",
    content:"",
    subMenu:[
        {
id:1,
name:resource.filter(x=>x.page=="subMenu" && x.title=="Link1" && x.language==lang)[0].content
        },
        {
            id:2,
name:resource.filter(x=>x.page=="subMenu" && x.title=="Link2" && x.language==lang)[0].content
        },
        {
            id:3,
name:resource.filter(x=>x.page=="subMenu" && x.title=="Link3" && x.language==lang)[0].content
        }
    ]
},
{
    id:3,
    name:resource.filter(x=>x.page=="menu" && x.title=="Link3" && x.language==lang)[0].content,
    link:"aboutUs.html",
    target:"",
    content:resource.filter(x=>x.page=="about" && x.title=="AboutContent" && x.language==lang)[0].content,
    subMenu:[],
},
{
    id:4,
    name:resource.filter(x=>x.page=="menu" && x.title=="Link4" && x.language==lang)[0].content,
    link:"contactUs.html",
    target:"",
    subMenu:[],
    content:""
}
]