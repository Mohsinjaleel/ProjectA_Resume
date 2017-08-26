///////////////////////////////////////////////// Person Data ///////////////////////////////////////////////////////

document.getElementById("person-image").src="Images/mohsin.jpg"; 
var personName =  document.getElementById("head-photo");
var personNameH1 = document.createElement("H2");
var personNameText = document.createTextNode("MOHSIN JALEEL");
personNameH1.appendChild(personNameText);
personNameH1.className = "head-photoh1"
personName.appendChild(personNameH1);
var personNameP = document.createElement("p");
var personNamePText = document.createTextNode("Software Developer")
personNameP.appendChild(personNamePText);
personName.appendChild(personNameP)



///////////////////////////////////////////////// Information ///////////////////////////////////////////////////////

var inform = {
    father : "<b>JALEEL AHMED</b>",
    birth : "DECEMBER 10 1996",
    address : "H.No: L-619, SECTOR-4, NORTH KARACHI, KARACHI.",
    email : "mohsinjaleel10@gmail.com",
    number : "+92 308 2251099"
}


var infoImg1 = document.getElementById("info-img1");
infoImg1.src = "Images/father.png";
var infoPara1 = document.getElementById("infoPara1Text");
infoPara1.innerHTML = inform.father


var infoImg2 = document.getElementById("info-img2");
infoImg2.src = "Images/birthday.png";
var infoPara2 = document.getElementById("infoPara2Text");
infoPara2.innerHTML = inform.birth;


var infoImg3 = document.getElementById("info-img3");
infoImg3.src = "Images/address.png";
var infoPara3 = document.getElementById("infoPara3Text");
infoPara3.innerHTML = inform.address;


var infoImg4 = document.getElementById("info-img4");
infoImg4.src = "Images/email.png";
var infoPara4 = document.getElementById("infoPara4Text");
infoPara4.innerHTML=inform.email;


var infoImg5 = document.getElementById("info-img5");
infoImg5.src = "Images/phone.png";
var infoPara5 = document.getElementById("infoPara5Text");
infoPara5.innerHTML=inform.number;



/////////////////////////////////////////////////// Profile /////////////////////////////////////////////////////////

var profile = {
    text : "Hello Everyone! My name is Mohsin Jaleel. I am 20 years old and learning apps & Web development. I am an energetic and enthusiastic person who enjoys a challenge and achieving personal goals. My present career aim is to work within IT because I enjoy working with computers, I enjoy the environment and I find the work interesting and satisfying. The opportunity to learn new skills and work with new technologies is particularly attractive to me."
}


var profileName =  document.getElementById("head-profile");
var profileNameH2 = document.createElement("H1");
var profileNameText = document.createTextNode("PROFILE");
profileNameH2.appendChild(profileNameText);
profileNameH2.className = "head-profileh1"
profileName.appendChild(profileNameH2);
var profileInfo = document.getElementById("sec-profile")
var profileInfoP = document.createElement("p");
var profileInfoPText = document.createTextNode(profile.text)
profileInfoP.appendChild(profileInfoPText);
profileInfoP.className = "profileInfoText"
profileInfo.appendChild(profileInfoP);



/////////////////////////////////////////////////// Skills /////////////////////////////////////////////////////////

function Skill (text,img){
    this.text = text;
    this.img = img;
}
var skill1 = new Skill ('<b>HTML5</b>','Images/5-stars.png')
var skill2 = new Skill ('<b>CSS3</b>','Images/4-stars.png')
var skill3 = new Skill ('<b>JAVASCRIPT</b>','Images/3-stars.png')
    

var skillsName =  document.getElementById("head-skills");
var skillsNameH1 = document.createElement("H1");
var skillsNameText = document.createTextNode("SKILLS");
skillsNameH1.appendChild(skillsNameText);
skillsNameH1.className = "head-profileh1"
skillsName.appendChild(skillsNameH1);


var skill1Name = document.getElementById("skill1-para");
skill1Name.innerHTML = skill1.text;
var skill1Img = document.getElementById("skill1-img");
skill1Img.src = skill1.img;



var skill2Name = document.getElementById("skill2-para");
skill2Name.innerHTML = skill2.text;
var skill2Img = document.getElementById("skill2-img");
skill2Img.src = skill2.img;



var skill3Name = document.getElementById("skill3-para");
skill3Name.innerHTML = skill3.text;
var skill3Img = document.getElementById("skill3-img");
skill3Img.src = skill3.img;



/////////////////////////////////////////////////// Hobbies /////////////////////////////////////////////////////////

var hobbies = {
    hobby1 : 'Playing Cricket',
    hobby2 : 'Reading Islamic And Stories Book',
    hobby3 : 'Fighting Games',
    hobby4 : 'Watching T.V',
    hobby5 : 'Eating Delicious Foods'
}


var hobbiesName =  document.getElementById("head-hobbies");
var hobbiesNameH1 = document.createElement("H1");
var hobbiesNameText = document.createTextNode("HOBBIES");
hobbiesNameH1.appendChild(hobbiesNameText);
hobbiesNameH1.className = "head-profileh1"
hobbiesName.appendChild(hobbiesNameH1);
var hobbiesInfo = document.getElementById("sec-hobbies");
var hobbiesInfoLi = document.getElementsByTagName("li");
hobbiesInfoLi[0].innerHTML = hobbies.hobby1;
hobbiesInfoLi[1].innerHTML = hobbies.hobby2;
hobbiesInfoLi[2].innerHTML = hobbies.hobby3;
hobbiesInfoLi[3].innerHTML = hobbies.hobby4;
hobbiesInfoLi[4].innerHTML = hobbies.hobby5;



/////////////////////////////////////////////// Second Container /////////////////////////////////////////////////////


////////////////////////////////////////////////// Experience ////////////////////////////////////////////////////////

class Experience {
    constructor(compName, duration, post, intro) {
        this.name = compName;
        this.year = duration;
        this.post = post;
        this.intro = intro;
    }
}


var company1 = new Experience ('COMPANY 01','2010-2013','WEB DEVELOPER','Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur.')
var company2 = new Experience ('COMPANY 02','2013-2016','APP DEVELOPER','Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur.')



var workExpe = document.getElementById("work-expe");
var workExpeH1 = document.getElementById("work-expe-h1");
workExpeH1.innerHTML = "<b>WORK EXPERIENCE</b>";



//////////////////////////////// Company 1 Information ///////////////////////////////////

var comp1 = document.getElementById("company1");
var company1Name = document.createElement("H3")
var company1NameText = document.createTextNode(company1.name);
company1Name.appendChild(company1NameText);
comp1.appendChild(company1Name);
company1Name.className = "company1Name";
var company1Year = document.createElement("H3")
var company1YearText = document.createTextNode(company1.year);
company1Year.appendChild(company1YearText);
comp1.appendChild(company1Year);
company1Year.className = "company1Year";
var company1Post = document.createElement("H3")
var company1PostText = document.createTextNode(company1.post);
company1Post.appendChild(company1PostText);
comp1.appendChild(company1Post);
company1Post.className = "company1Post";
var company1PostInfo = document.createElement("p")
var company1PostInfoText = document.createTextNode(company1.intro);
company1PostInfo.appendChild(company1PostInfoText);
comp1.appendChild(company1PostInfo);
company1PostInfo.className = "company1PostInfo";



//////////////////////////////// Company 2 Information ///////////////////////////////////

var comp2 = document.getElementById("company2");
var company2Name = document.createElement("H3")
var company2NameText = document.createTextNode(company2.name);
company2Name.appendChild(company2NameText);
comp2.appendChild(company2Name);
company2Name.className = "company2Name";
var company2Year = document.createElement("H3")
var company2YearText = document.createTextNode(company2.year);
company2Year.appendChild(company2YearText);
comp2.appendChild(company2Year);
company2Year.className = "company2Year";
var company2Post = document.createElement("H3")
var company2PostText = document.createTextNode(company2.post);
company2Post.appendChild(company2PostText);
comp2.appendChild(company2Post);
company2Post.className = "company2Post";
var company2PostInfo = document.createElement("p")
var company2PostInfoText = document.createTextNode(company2.intro);
company2PostInfo.appendChild(company2PostInfoText);
comp2.appendChild(company2PostInfo);
company2PostInfo.className = "company2PostInfo";



////////////////////////////////////////////////// Education ////////////////////////////////////////////////////////

var educationHeadings = {
    education : 'EDUCATION',
    institute : 'INSTITUTE',
    year : 'YEAR',
    grade : 'GRADE'
}


function Education (qualification,institute,year,grade){
    this.qualification = qualification;
    this.instituteName = institute;
    this.passYear = year;
    this.passGrade = grade;
}


var school = new Education ('Matric','Al-Hameed Sec. School','2013','A')
var collage = new Education ('F.Sc','GOVT. JINNAH COLLAGE','2015','B')
var university = new Education ('B.COM','ALLAMA IQBAL OPEN UNI.','PRESENT','-')


var education = document.getElementById("education");
var educationH1 = document.getElementById("education-h1");
educationH1.innerHTML = "<b>EDUCATION</b>"



//////////////////////////////// School Information ///////////////////////////////////

// var schools = document.getElementById("school");
var schoolName = document.getElementById("school-head")
schoolName.innerHTML = "SCHOOL"
var schoolTable = document.getElementById("school-info")
var schoolTableTd = schoolTable.getElementsByTagName("td")
schoolTableTd[0].innerHTML = educationHeadings.education;
schoolTableTd[1].innerHTML = educationHeadings.institute;
schoolTableTd[2].innerHTML = educationHeadings.year;
schoolTableTd[3].innerHTML = educationHeadings.grade;
schoolTableTd[4].innerHTML = school.qualification;
schoolTableTd[5].innerHTML = school.instituteName;
schoolTableTd[6].innerHTML = school.passYear;
schoolTableTd[7].innerHTML = school.passGrade;



//////////////////////////////// College Information ///////////////////////////////////

// var collage = document.getElementById("collage");
var collageName = document.getElementById("collage-head")
collageName.innerHTML = "COLLEGE"
var collageTable = document.getElementById("collage-info")
var collageTableTd = collageTable.getElementsByTagName("td")
collageTableTd[0].innerHTML = educationHeadings.education;
collageTableTd[1].innerHTML = educationHeadings.institute;
collageTableTd[2].innerHTML = educationHeadings.year;
collageTableTd[3].innerHTML = educationHeadings.grade;
collageTableTd[4].innerHTML = collage.qualification;
collageTableTd[5].innerHTML = collage.instituteName;
collageTableTd[6].innerHTML = collage.passYear;
collageTableTd[7].innerHTML = collage.passGrade;



//////////////////////////////// University Information ///////////////////////////////////

// var university = document.getElementById("university");
var universityName = document.getElementById("university-head")
universityName.innerHTML = "UNIVERSITY"
var universityTable = document.getElementById("university-info")
var universityTableTd = universityTable.getElementsByTagName("td")
universityTableTd[0].innerHTML = educationHeadings.education;
universityTableTd[1].innerHTML = educationHeadings.institute;
universityTableTd[2].innerHTML = educationHeadings.year;
universityTableTd[3].innerHTML = educationHeadings.grade;
universityTableTd[4].innerHTML = university.qualification;
universityTableTd[5].innerHTML = university.instituteName;
universityTableTd[6].innerHTML = university.passYear;
universityTableTd[7].innerHTML = university.passGrade;



////////////////////////////////////////////////// Languages ////////////////////////////////////////////////////////

function Language (text,img){
    this.text = text;
    this.img = img;
}
var language1 = new Language ('LEVEL 1','Images/UR.png')
var language2 = new Language ('LEVEL 2','Images/EN.png')


var languageH1 = document.getElementById("language-h1");
languageH1.innerHTML = "<b>LANGUAGE</b>" 
var urduH1 = document.getElementById("urdu-h3");
urduH1.innerHTML = language1.text;
var urduImg = document.getElementById("ur-img");
urduImg.src = language1.img;


var englishH1 = document.getElementById("english-h3");
englishH1.innerHTML = language2.text;
var englishImg = document.getElementById("en-img");
englishImg.src = language2.img;



////////////////////////////////////////////////// Portfolio ////////////////////////////////////////////////////////

var portfolio = {
    img1 : 'Portfolio/Website.jpg',
    img2 : 'Portfolio/Todo.jpg',
    img3 : 'Portfolio/Travel-mate.jpg',
    img4 : 'Portfolio/Periodic-table.jpg',  
    img5 : 'Portfolio/Color-pallete.jpg',  
    img6 : 'Portfolio/Calculator.jpg'
}


var portfolioH1 = document.getElementById("portfolio-h1");
portfolioH1.innerHTML = "<b>PORTFOLIO</b>"
var portfolioInfo = document.getElementById("portfolio-info");
var portfolioImg = portfolioInfo.getElementsByTagName('img');
portfolioImg[0].src = portfolio.img1;
portfolioImg[1].src = portfolio.img2;
portfolioImg[2].src = portfolio.img3;
portfolioImg[3].src = portfolio.img4;
portfolioImg[4].src = portfolio.img5;
portfolioImg[5].src = portfolio.img6;



////////////////////////////////////// Portfolio Slide ////////////////////////////////////////////

// var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1} 
//     x[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 7000); // Change image every 2 seconds
// }

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000);    
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
