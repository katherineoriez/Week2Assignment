var playerData;

$(document).ready(function() {
    getData();
});



function getData () {
	$.getJSON("js/JayBruceStats.json", function (data, error) {
		playerData = data;
		drawStuff();	  
	});
	
  }

function drawStuff() {
	var lastSeasonStats = playerData.stats[4];
	var lastSeasonRBI = lastSeasonStats.RBI;
	var lastSeasonYear = lastSeasonStats.year;
	
	$(".chart").html("<p>"+playerData.name+"</p>");
	$(".chart").append("<p>"+playerData.club+"</p>");
	$(".chart").append("<p>In "+lastSeasonYear+" he hit "+lastSeasonRBI+" RBIs</p>");
	
	};




