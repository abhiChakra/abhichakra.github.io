var emailLink = document.getElementById("emailIMG")
var resumeLink = document.getElementById("resumeIMG")
var linkedinLink = document.getElementById("linkedinIMG")
var githubLink = document.getElementById("githubIMG")


var linkDes = document.getElementById("linkDescription")


// var emailDes = document.getElementById("emailDes")
// var githubDes = document.getElementById("githubDes")
// var linkedinDes = document.getElementById("linkedinDes")
// var resumeDes = document.getElementById("resumeDes")


emailLink.onmouseover = function (){
    linkDes.innerHTML = "Email me!"
};

emailLink.onmouseleave = function(){
    linkDes.innerHTML = ""
}

resumeLink.onmouseover = function (){
    linkDes.innerHTML = "View my resume"
};

resumeLink.onmouseleave = function(){
    linkDes.innerHTML = ""
}

linkedinLink.onmouseover = function (){
    linkDes.innerHTML = "View my linkedin"
};

linkedinLink.onmouseleave = function(){
    linkDes.innerHTML = ""
}

githubLink.onmouseover = function(){
    linkDes.innerHTML = "View my github"
}

githubLink.onmouseleave = function(){
    linkDes.innerHTML = ""
}







