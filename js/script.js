var listOfOthers = ["https://sci-hub.tw", "gen.lib.rus.ec", "strengthlevel.com", "https://standardebooks.org"]

function $(id) {
	return document.getElementById(id);
}

function insertListOfOthers() {
	for (var index = 0; index < listOfOthers.length; index++) {
		var listElement = document.createElement("li");
		var linkElement = document.createElement("a");
		var link		= document.createTextNode(listOfOthers[index]);

		linkElement.setAttribute("href", listOfOthers[index]);
		linkElement.appendChild(link);
		listElement.appendChild(linkElement);
		$("others_list").appendChild(listElement);
	}
}