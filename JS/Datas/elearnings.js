var lang=localStorage.getItem("lang");

var elearnings=[
    {
        id:1,
        name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning1" && x.language==lang)[0].content,
        description:"8 Ders",
        link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=19",
        img:"agSistemleri.jpg",
        elearningType:1,
        video:"agsistemleri.mp4",
        trainer:'Gökhan Akın'
},
{
    id:2,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning2" && x.language==lang)[0].content,
    description:"8 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=73",
    img:"webvemobil.jpg",
    elearningType:1,
    video:"agsistemleri.mp4",
    trainer:'Şule Katarcı'
},
{
    id:3,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning3" && x.language==lang)[0].content,
    description:"6 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=22",
    img:"algoritma.jpg",
    elearningType:2,
    video:"agsistemleri.mp4",
    trainer:'Delil Çakır'
},
{
    id:4,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning4" && x.language==lang)[0].content,
    description:"4 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=34",
    img:"yazilim-gelistirme.png",
    elearningType:2,
    video:"agsistemleri.mp4",
    trainer:'Mehmet Çelik'
},
{
    id:5,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning5" && x.language==lang)[0].content,
    description:"10 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=43",
    img:"veritabani.webp",
    elearningType:1,
    video:"agsistemleri.mp4",
    trainer:'Mustafa Ağaoğlu'
},
{
    id:6,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning6" && x.language==lang)[0].content,
    description:"4 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=71",
    img:"analiz.jpg",
    elearningType:3,
    video:"agsistemleri.mp4",
    trainer:'Furkan Akan'
},
{
    id:7,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning7" && x.language==lang)[0].content,
    description:"2 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=15",
    img:"dijital.webp",
    elearningType:3,
    video:"agsistemleri.mp4",
    trainer:'Ömer Güran'
},
{
    id:8,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning8" && x.language==lang)[0].content,
    description:"6 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=50",
    img:"isletim-sistemleri.png",
    elearningType:3,
    video:"agsistemleri.mp4",
    trainer:'Hüseyin Yüce'
},
{
    id:9,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning9" && x.language==lang)[0].content,
    description:"4 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=83",
    img:"kaynak-kod.png",
    elearningType:1,
    video:"agsistemleri.mp4",
    trainer:'Mehmet Çelik'
},
{
    id:10,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning10" && x.language==lang)[0].content,
    description:"8 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=89",
    img:"html.jpg",
    elearningType:2,
    video:"agsistemleri.mp4",
    trainer:'Erhan Kaya'
},
{
    id:11,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning11" && x.language==lang)[0].content,
    description:"4 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=98",
    img:"css.jpg",
    elearningType:3,
    video:"agsistemleri.mp4",
    trainer:'Erhan Kaya'
},
{
    id:12,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning12" && x.language==lang)[0].content,
    description:"1 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=102",
    img:"iso.png",
    elearningType:3,
    video:"agsistemleri.mp4",
    trainer:'Cihat Seçkin'
},
{
    id:13,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning13" && x.language==lang)[0].content,
    description:" 1 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=104",
    img:"bthizmet.webp",
    elearningType:1,
    video:"agsistemleri.mp4",
    trainer:'Akgün Yardımcı'
},
{
    id:13,
    name:resource.filter(x=>x.page=="elearnings" && x.title=="elearning14" && x.language==lang)[0].content,
    description:" 1 Ders",
    link:"https://akademi.e-mektep.com/mod/bigbluebuttonbn/view.php?id=82",
    img:"nefes.webp",
    elearningType:1,
    video:"agsistemleri.mp4",
    trainer:'Nil Öziş'
},
];