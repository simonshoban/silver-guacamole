var listOfProjects = ["http://students.bcitdev.com/A00985653/Tax%20Calculator/taxbuddy.html", "http://evbuddy.ca"];
var projectList = "projects_list";

var listOfOthers = ["https://sci-hub.tw", "http://gen.lib.rus.ec", "https://strengthlevel.com", "https://standardebooks.org"];
var otherList = "others_list";

function $(id) {
	return document.getElementById(id);
}

function loadLists() {
	insertListOfOthers(listOfProjects, projectList);
	insertListOfOthers(listOfOthers, otherList);
}

function insertListOfOthers(listOfLinks, list) {
	for (var index = 0; index < listOfLinks.length; index++) {
		var listElement = document.createElement("li");
		var linkElement = document.createElement("a");
		var link		= document.createTextNode(listOfLinks[index]);

		linkElement.setAttribute("href", listOfLinks[index]);
		linkElement.appendChild(link);
		listElement.appendChild(linkElement);
		$(list).appendChild(listElement);
	}
}