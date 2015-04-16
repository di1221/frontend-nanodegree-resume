/* header  - JASON  */
var bio = {
    "names" : "Abraham Lincoln",
    "role" : "President of the United States",
    "contacts" :
      {
        "mobile" : "414-555-1212",
        "email" : "lincoln@presidents.com",
        "github" : "@honestabelincoln",
        "location" : "Washington, DC"
      },
    "pictureUrl" : "images/lincoln-coin.png",
    "welcomeMsg" : "Those who deny freedom to others deserve it not for themselves. ",
    "skills" : ["Law", "Farming", "Store Proprietor", "Politics", "Speech Writing"]
  };

bio.display = function () {
	var formattedName =  HTMLheaderName.replace("%data%", bio.names);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedBioPic);

	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
	formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));

	for(i in formattedContactInfo) {
		$("#topContacts").append(formattedContactInfo[i]);
	}

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	var formattedSkillsStart = HTMLskillsStart;
	var formattedSkills = bio.skills.slice(",");
	var formattedSkillsList = [];


	$("#header").append(formattedWelcomeMsg);
	for(i in formattedSkills){
	  formattedSkillsList.push(HTMLskills.replace("%data%", bio.skills[i]));
	}
	  $("#header").append(formattedSkillsStart);
	  $("#skills").append(formattedSkillsList);
};
bio.display();



/* for button option to internationalize name on resume */
function inName(name) {
  var arrayOfStrings = name.split(' ');
  var firstNameOfArray = arrayOfStrings.shift();
  var upperLastName = arrayOfStrings.pop().toUpperCase();

  name = firstNameOfArray + " " + upperLastName;

  return name;
}
$("#header").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);

//initializeMap();

/* Employment   - JASON */
var work = {
    "employers": [
      {
        "employer": "United States of America",
        "title": "President",
        "workDates": "1861 - 1865",
        "location": "Washington, DC",
        "workDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laudantium distinctio ullam atque est? Voluptatum, dicta, fugit.  Quidem magnam alias nisi itaque dolores exercitationem, sint cumque architecto, maxime eaque at?"
      },
      {
        "employer": "Lincoln & Herndon Law",
        "title": "Chief Lawyer",
        "workDates": "1837 - 1844",
        "location": "Somewhere, IL",
        "workDescription": "Fugiat quod ex debitis earum alias quisquam atque asperiores at distinctio ullam? Maxime culpa reprehenderit, ducimus inventore recusandae illo beatae sunt saepe reiciendis? Placeat esse maxime vel odio deleniti excepturi recusandae similique non eaque laboriosam odit eos quis enim, dolor, inventore debitis fuga voluptatibus ex minus quia. Rerum, accusantium inventore laboriosam possimus, fugiat quo eveniet?"
      },
      {
        "employer": "Lincoln, Stuart, & Logan, Attys at Law",
        "title": "Chief Lawyer",
        "workDates": "1837 - 1844",
        "location": "Springfield, IL",
        "workDescription": "Ipsa earum quis officiis saepe! Tempore necessitatibus iusto temporibus reprehenderit delectus nemo minima harum nobis officiis saepe! Culpa quia molestiae vel odio cum, exercitationem maxime!  Repellendus cupiditate accusantium, nisi eos!"
      }
    ]
  };

work.display = function () {
  var employer;
  var formattedWorkStart = HTMLworkStart;
  $("#workExperience").append(formattedWorkStart);

  for (employer in work.employers) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employers[employer].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.employers[employer].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.employers[employer].workDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.employers[employer].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.employers[employer].workDescription);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);
  }
};
work.display();

/* Education  - JASON */
var education = {
    "schools": [
      {
        "name": "Self Taught Law University",
        "location": "Springfield, IL",
        "dates": "1834 - 1836",
        "degree": "Masters",
        "major": ["Law"]
      },
      {
        "name": "Log Cabin School",
        "location": "Little Pidgeon Creek, KY",
        "dates": "Sporadically 1822 - 1830",
        "degree": "Defective",
        "major": ["Multiple Subjects"]
      }
    ],
    "onlineClasses": [
      {
        "title": "Presidential Skills",
        "school": "Udacity",
        "dates": "1830's",
        "url": "http://www.udacity.com/course/ud804"
      }
    ]
  };
/* Education */
education.display = function () {
  var school;
  var formattedSchoolStart = HTMLschoolStart;
  $("#education").append(formattedSchoolStart);

  for (school in education.schools) {
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    $(".education-entry").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolMajor);

  }

  for (onlineClass in education.onlineClasses) {

		var formattedOnlineClasses = HTMLonlineClasses;
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);

		$(".education-entry").append(formattedOnlineClasses);
		$(".education-entry").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
};
education.display();


/* projects */
var projects = {
	"projects": [
		{
			"title": "Civil War",
			"dates": "1861 - 1865",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vel similique voluptas maiores suscipit minima. Officia vero enim perferendis itaque facilis veritatis impedit debitis maxime molestias recusandae! Necessitatibus, adipisci, ipsum! " ,
			"images":[
				"images/civil_war.jpeg"
			],
		},
		{
			"title": "Presidential Campaign",
			"dates": "1860 - 1861",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat alias, recusandae quasi vel, necessitatibus soluta aliquam dolore consectetur sed odit, quia, sit magni illo iure officia error sint natus quas!",
			"images":[
				"images/lincoln_photo.jpg"
			],
		}
	]
};


projects.display = function() {

	for(project in projects.projects){
		var formattedProjectStart = HTMLprojectStart;
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);


		$("#projects").append(formattedProjectStart);
	    $(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}
projects.display();

/* Lets Connect footer contacts*/
$("#footerContacts").append("<a href='http://www.facebook.com' target='_blank'><img src='images/facebook-60_sm.png' width='60x' height='60px' alt='facebook icon'></a>");
$("#footerContacts").append("<a href='http://www.linkIn.com' target='_blank'><img src='images/Linkedin-60_sm.png' width='60px' height='60px' alt='LinkedIn Icon'></a>");
$("#footerContacts").append("<a href='http://www.twitter.com' target='_blank'><img src='images/Twitter-60_sm.png' width='60px' height='60px' alt='Twitter Icon'></a>");
$("#footerContacts").append("<a href='http://www.Pinterest.com' target='_blank'><img src='images/Pinterest-60_sm.png' width='60px' height='60px' alt='Pinterest Icon'></a>");





