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
    "location" : "Hampton"
  },
  "welcomeMessage" : "Greetings and salutations!",
  "skills" : [ /*square brackets denote an array*/
    "Front-end Development", "Search Engine Optimization", "Writing", "Baking"
  ],
  "bioPic" : "images/holly.jpg" /*the last property in an array doesn't need a comma*/
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
  ]
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
    }/*,
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
  ]
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
  ]/*,
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
    },//end USF
  ]//end onlineCourses
  //display: function()*/
};

/*
This area is for formatted variables
*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github );
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
/*

/*
Bootstrap Additions
*/
//var row = $(".projects-entry"):first.append("<div>");
//$("#projects h2").append("<div>").addClass("row");

/*This is where I add my formatted variables to the page, using either .append() for after or .prepend() for before.
*/
//Adds bio info to header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

//Adds contact info to header
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

//Adds contact info to footer
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

/*
================================================================================
Functions
================================================================================
*/
//Bio Function
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
};

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


//Projects Function
projects.display = function() {//display as a method of the projects object, display function added as a property to projects object with dot notation
  for(project in projects.projects) {
    $("#projects .row").append(HTMLprojectStart);

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
};

displayEducation();

//Online Courses Function
/*function displayCourses() {
  //Bootstrap setup
  /*$("#education div.row").append("<div></div>");//creates div for online classes section
  $("#education div.row div:last").addClass("col-xs-12 col-sm-6 online-section");//adds col classes to above div
  $(".online-section").append("<h3></h3>");//adds and h3 in the online section
  $(".online-section h3").html("Online Classes");//gives the h3 the text "Online CLasses"
  $(".online-section h3").attr("id","online-classes");//adds the attribute id & gives it a value of schools to the above h3
  $(".online-section").append(HTMLonlineStart);//adds the education entries to the .school section*/

  /*for(course in education.onlineCourses) {

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      $(".onlineClass-entry:last").append(formattedTitle);//was $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".onlineClass-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      $(".onlineClass-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".onlineClass-entry:last").append(formattedURL);
  }
};*/

/*displayCourses();*/

//Google Map
$("#mapDiv").append(googleMap);


//Internationalize Button
$('#main').append(internationalizeButton);//append the internationalizeButton to the main div
//



/*
================================================================================
Other? - Is this part of the project or for practice?
================================================================================
*/
/*
//Should collect clicks, but idk where that information is stored
//
$(document).click(function(loc) {//anonymous (unnamed) function; loc = jQuery event object
  var x = loc.pageX; //pageX and pageY represent pixel locations of click
  var y = loc.pageY;

  logClicks(x,y)
});

//Should print work location, but it prints even when this is commented out in an incognito window with caches cleared
//
function locationizer(work_obj) {
  var locationArray = [];//initializes a new empty array

  for (job in work_obj.jobs) {//iterates over every job object in work object
    var newLocation = work_obj.jobs[job].location;//for each new job, create a variable called newLocation that is equal to the location of each job
    locationArray.push(newLocation);
  }

  return locationArray;//invokes the function
};

console.log(locationizer(work)); - if i comment this out Portsmouth still prints, but I don't get an error on line 135 anymore

//I thought this was part of the internationalize button function, but the button doesn't work and displays even with this commented out
//
function inName(name) {
  name = name.trim().split(" ");//for variable name, split the name at the space into an array of two names
  console.log(name);//print the array name values
  name[1] = name[1].toUpperCase(); //for the second name (index of 1) make all of the letters uppercase
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();//for the first name, take only the first character (letter between 0 and 1) and make it uppercase, make the remaining characters from 1 to the end of the string lowercase.

  return name[0] +" "+name[1]; //return the value of the first name, plus a space, plus the second name
}

 */




