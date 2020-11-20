var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = "100%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause video");
	video.pause();
});

var vid = document.getElementById("myVideo");


document.querySelector("#slower").addEventListener("click", function() {
	console.log("slower 10%");
	video.playbackRate  *=.9; 
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster 10%");
	video.playbackRate /=.9
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip Ahead 5 seconds");
	if (video.currentTime < video.duration -5){
	video.currentTime +=5;
	}
	else{
		video.currentTime -0;
	}
	console.log(video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute");
	if(video.muted){
		video.muted = false;
		mute.innerHTML = "Mute";
	} else {
		video.muted = true;
		mute.innerHTML = "Unmute";
	}	
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(video.volume);
	video.volume = volumeSlider.value/100;
	volume.innerHTML = (volumeSlider.value + "%");
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});

