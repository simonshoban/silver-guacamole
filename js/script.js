var projectNames = [];
var projectLinks = [];
var projectList = "projects_list";

var otherNames = [];
var otherLinks = [];
var otherList = "others_list";

const firestore = firebase.firestore();

function $(id) {
	return document.getElementById(id);
}

function loadFirebaseData() {
	var projectsCollection = firestore.collection("projects");
	var othersCollection = firestore.collection("others");

	insertFirebaseDataIntoWebpage(projectsCollection, projectNames, projectLinks, projectList);
	insertFirebaseDataIntoWebpage(othersCollection, otherNames, otherLinks, otherList);
}

function insertFirebaseDataIntoWebpage(collection, listOfNames, listOfLinks, list) {
	collection.get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			try {
				listOfNames.push(doc.data().Name);
				listOfLinks.push(doc.data().Link);
			} catch (error) {
				console.log(error);
			}
		});

		insertListOfOthers(listOfNames, listOfLinks, list);
	});
}

function insertListOfOthers(listOfNames, listOfLinks, list) {
	listOfNames.forEach(function(name, index) {
		var listElement = document.createElement("li");
		var linkElement = document.createElement("a");
		var link		= document.createTextNode(name);

		linkElement.setAttribute("href", listOfLinks[index]);
		linkElement.appendChild(link);
		listElement.appendChild(linkElement);
		$(list).appendChild(listElement);		
	});
}