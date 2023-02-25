var lang=localStorage.getItem("lang");
var contactData={
    mail:"destek@e-mektep.com.tr",
    phone:"05555555555",
    fax:"02161111111",
    centerAdres:resource.filter(x=>x.page=="contact" && x.title=="adressInfo" && x.language==lang)[0].content,
    locationMap:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4693745400295!2d29.06496791535025!3d40.99309867930239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac86de9c129f9%3A0x8ca6e7abb7fade91!2zQVZEIFRla25vbG9qaSBEYW7EscWfbWFubMSxaw!5e0!3m2!1str!2str!4v1677146535603!5m2!1str!2str"
}