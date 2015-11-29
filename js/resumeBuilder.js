 /*
================================================================================
Variables
- most of my variables are JSONs (JavaScript Object Notations)
================================================================================
*/

//My Bio
var bio = { /* JS Object - Bio */
  "name" : "Jamie Bradley", /*this is a property - "name" is a key, and "Jamie" is it's value*/
  "role" : "UX Unicorn", /* multiple properties are separated by a comma */
  "contacts" : { /*curly brackets denote an object*/
    "mobile" : "Request my number!",
    "email" : "jbradley428@gmail.com",
    "github" : "jbradley428",
    "twitter" : "@jamierae8",
    "location" : "Portsmouth, NH"
  },
  "welcomeMessage" : "Greetings and salutations!",
  "skills" : [ /*square brackets denote an array*/
    "Front-end Development", "Search Engine Optimization", "Writing", "Baking"
  ],
  "bioPic" : "images/holly.jpg",
  "display" : "myBio()"
};

//Work Experience
var work = {
  "jobs" : [
    {
      "employer" : "Bowst, LLC.",
      "title" : "Junior Front-End Developer",
      "location" : "Portsmouth",
      "dates" : "5/15 - Present",
      "description" : "I code, and I learn, and I love it.(placeholder)",
    },
    {
      "employer" : "The Atom Group, LLC.",
      "title" : "SEO Specialist",
      "location" : "Portsmouth",
      "dates" : "05/11 - 05/15",
      "description" : "SEO Specialist, Social Media person & event organizer",
    }
  ],
  "display" : "displayWork()"
};


//Projects
var projects = {
  "projects" : [
    {
      "title" : "Portfolio Site",
      "dates" : "10/26/15",
      "description" : "In this project, I created a portfolio site, both to inform prospective employers about me and to display my work.  By completing this project, I learned more about HTML5 structuring and gained a better understanding of how to utilize the Bootstrap Framework.",
      "images" : [
        "http://www.tenstickers.co.uk/wall-stickers/img/preview/unicorn-silhouette-wall-sticker-6277.png"
      ]
    },
    {
      "title" : "Interactive Resume",
      "dates" : "11/23/15",
      "description" : "I'd watched a number of tutorials about JavaScript, but this project was my first forray into actually building something with JS.  While learning about JS, which is THE language of the web, I was also able to build an interartive resume that will allow clients to learn more about and connect with me.",
      "images" : [
        "http://www.tenstickers.co.uk/wall-stickers/img/preview/unicorn-silhouette-wall-sticker-6277.png"
      ]
    },
    {
      "title" : "Arcade Game Clone: Frogger",
      "dates" : "01/04/16",
      "description" : "Coming Soon!  In this upcoming project I'll learn some of the finer points of Object Oriented Programming, including inheritance & delegation.  I look forward to expanding my knowledge of JavaScript and it's applications!",
      "images" : [
        "http://www.tenstickers.co.uk/wall-stickers/img/preview/unicorn-silhouette-wall-sticker-6277.png"
      ]
    }/* Commented out until projects are complete
    {
      "title" : "Website Optimization",
      "dates" : "02/01/2016",
      "description" : "Coming Soon!",
      "images" : [
        "http://www.tenstickers.co.uk/wall-stickers/img/preview/unicorn-silhouette-wall-sticker-6277.png"
      ]
    },
    {
      "title" : "Neighborhood Map Project",
      "dates" : "04/11/2016",
      "description" : "Coming Soon!",
      "images" : [
        "http://www.tenstickers.co.uk/wall-stickers/img/preview/unicorn-silhouette-wall-sticker-6277.png"
      ]
    },
    {
      "title" : "Feed Reader Testing",
      "dates" : "04/25/16",
      "description" : "Coming Soon!",
      "images" : [
        "http://www.tenstickers.co.uk/wall-stickers/img/preview/unicorn-silhouette-wall-sticker-6277.png"
      ]
    }*/
  ],
  "display" : "projects.display()"
};

//Education
var education = {
  "schools" : [
    {
      "name" : "University of New Hampshire",
      "degree" : "Bachelor of Science",
      "dates" : "08/06 - 12/10",
      "location": "Durham, NH",
      "major" : [
        "Environmental Conservation"
      ],
      "url" : "http://www.unh.edu/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "date" : "In Progress",
      "url" : "https://www.udacity.com/"
    },
    {
      "title" : "Advanced Search Engine Marketing",
      "school" : "University of San Francisco",
      "date" : "01/12 - 03/12",
      "url" : "https://www.usfca.edu/"
    }//end USF
  ],//end onlineCourses
  "display" : "displayEducation()"
};


/*
================================================================================
Functions
================================================================================
*/
//Bio Function
function myBio() {
  //Role
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role); //the order in which these are appended DOES matter
    $("#header").prepend(formattedRole);
  //Name
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
  //Profile Pic
  var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedBioPic);
  //Welcome Message
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
  //Contact Info
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github );
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

  //Skills
  if(bio.skills.length > 0) { //if bio.skills is greater that 0, meaning it exists
    $("#header").append(HTMLskillsStart); //then append the variable HTMLskillsStart to #header

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]); //and create the variable formattedSkill by replacing the %data% in the variable HTMLskills with the 0th (first) item in the skills array
    $("#skills").append(formattedSkill);  //then do the same thingby appending each additional skill in the array to #skills
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  }
};

myBio();

//===============================================================

//Work Function
function displayWork() {
  for(job in work.jobs) { //this is a for-in loop
  //job = iterator & index of job we want in work.jobs object
  //work = work object
  //jobs = jobs array in work object (work.jobs)
  $("#workExperience").append(HTMLworkStart); //appends workStart to work experience div - "Work Experience" heading

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);//references & formats the employer value in the jobs array
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); //references & formats the title value in jobs array
  var formattedEmployerTitle = formattedEmployer + formattedTitle; //concatenation of formatted employer & formatted title

  $(".work-entry:last").append(formattedEmployerTitle); //appends to formatted title created in the concatebation above to ".work-entry:last", which selects every object with the class "work-entry", but ":last" says we only want to append formattedEMployerTitle to the last element with that class

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); //formats dates
  $(".work-entry:last").append(formattedDates); //appends dates

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location); //formats location
  $(".work-entry:last").append(formattedLocation);//appends location - doesn't work for some reason...

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);//formats description
  $(".work-entry:last").append(formattedDescription);//appends description
  }
};

displayWork(); //invoking the fuction, note there are no variables because this function is in the global scope

//===============================================================

//Projects Function
projects.display = function() {//display as a method of the projects object, display function added as a property to projects object with dot notation
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

projects.display();

//===============================================================

//Education Function
function displayEducation() {

  for(school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
  }

  for(course in education.onlineCourses) {

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      $(".education-entry:last").append(formattedTitle);//was $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedURL);
  }
};

displayEducation();

//===============================================================

//Google Map
$("#mapDiv").append(googleMap);

//===============================================================

//Internationalize Button
$('#main').append(internationalizeButton);//append the internationalizeButton to the main div
//



/*
================================================================================
Names, and locations, and clicks, oh my!
================================================================================
*/

//Click Collection
$(document).click(function(loc) {//anonymous (unnamed) function; loc = jQuery event object
  var x = loc.pageX; //pageX and pageY represent pixel locations of click
  var y = loc.pageY;

  logClicks(x,y)
});

//Locationizer
function locationizer(work_obj) {
  var locationArray = [];//initializes a new empty array

  for (job in work_obj.jobs) {//iterates over every job object in work object
    var newLocation = work_obj.jobs[job].location;//for each new job, create a variable called newLocation that is equal to the location of each job
    locationArray.push(newLocation);
  }

  return locationArray;//invokes the function
};

console.log(locationizer(work));

//Name Internationalization
function inName(name) {
  name = name/*.trim()*/.split(" ");//for variable name, split the name at the space into an array of two names
  console.log(name);//print the array name values
  name[1] = name[1].toUpperCase(); //for the second name (index of 1) make all of the letters uppercase
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();//for the first name, take only the first character (letter between 0 and 1) and make it uppercase, make the remaining characters from 1 to the end of the string lowercase.

  return name[0] +" "+name[1]; //return the value of the first name, plus a space, plus the second name
}






