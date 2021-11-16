var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = (video.volume * 100)+ "%"
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate + (5/100);
	video.play();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate - (5/100);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("muted");
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML = "Unmute"
	}
	else { 
		video.muted = false;
		this.innerHTML = "Mute"
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0
	} else {
		video.currentTime += 15
	}
	console.log("Current video time is: " + video.currentTime);
	video.play();
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	console.log("The current video volume is " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Video style set to 'Old School'");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Video style set to 'Original'");
});
