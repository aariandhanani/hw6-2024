var video;
video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = "false";
	console.log("Autoplay set to false")
	video.loop = "false";
	console.log("Looping set to false")
	video.load();
	console.log("Video loaded")
});

// document.getElementById("play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	var newSpeed = video.playbackRate - 0.1;
	console.log("New speed = " + newSpeed);
	video.playbackRate = newSpeed;
});

document.querySelector("#faster").addEventListener("click", function() {
	var newSpeed = video.playbackRate + 0.1;
	console.log("New speed = " + newSpeed);
	video.playbackRate = newSpeed;
});

document.querySelector("#skip").addEventListener("click", function() {
	var newTime = video.currentTime + 10;
	if (newTime > video.duration) {
		newTime = 0;
	}
	console.log("New location = " + newTime + (" seconds"));
	video.currentTime = newTime;
});

document.querySelector("#mute").addEventListener("click", function() {
	var muteButton = document.querySelector("#mute");
	if (muteButton.innerHTML == "Mute") {
		video.muted = true;
		muteButton.innerHTML = "Unmute"
		console.log("Video muted");
	}
	else {
		video.muted = false;
		muteButton.innerHTML = "Mute"
		console.log("Video unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	var volume = .01 * document.getElementById("slider").value;
	video.volume = volume;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
	console.log("Volume: " + volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	// video.classList.remove("video");
	video.classList.add("oldSchool");
	console.log("Vintage");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Normal");
});