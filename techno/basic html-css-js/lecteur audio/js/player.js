function Player() {
}

Player.prototype.viewInfo = function () {
    var panel = document.getElementById('infoPanel');
    var player = document.getElementById('player');
    var info = "";

    info += "audioTracks : " + document.getElementById('player').audioTracks + "<br />";
    info += "autoplay : " + document.getElementById('player').autoplay + "<br />";
    info += "buffered : " + document.getElementById('player').buffered + "<br />";
    info += "controller : " + document.getElementById('player').controller + "<br />";
    info += "controls : " + document.getElementById('player').controls + "<br />";
    info += "crossOrigin : " + document.getElementById('player').crossOrigin + "<br />";
    info += "currentSrc : " + document.getElementById('player').currentSrc + "<br />";
    info += "currentTime : " + document.getElementById('player').currentTime + "<br />";
    info += "defaultMuted : " + document.getElementById('player').defaultMuted + "<br />";
    info += "defaultPlaybackRate : " + document.getElementById('player').defaultPlaybackRate + "<br />";
    info += "duration : " + document.getElementById('player').duration + "<br />";
    info += "ended : " + document.getElementById('player').ended + "<br />";
    info += "error : " + document.getElementById('player').error + "<br />";
    info += "loop : " + document.getElementById('player').loop + "<br />";
    info += "mediaGroup : " + document.getElementById('player').mediaGroup + "<br />";
    info += "muted : " + document.getElementById('player').muted + "<br />";
    info += "networkState : " + document.getElementById('player').networkState + "<br />";
    info += "paused : " + document.getElementById('player').paused + "<br />";
    info += "playbackRate : " + document.getElementById('player').playbackRate + "<br />";
    info += "played : " + document.getElementById('player').played + "<br />";
    info += "preload : " + document.getElementById('player').preload + "<br />";
    info += "readyState : " + document.getElementById('player').readyState + "<br />";
    info += "seekable : " + document.getElementById('player').seekable + "<br />";
    info += "seeking : " + document.getElementById('player').seeking + "<br />";
    info += "src : " + document.getElementById('player').src + "<br />";
    info += "startDate : " + document.getElementById('player').startDate + "<br />";
    info += "textTracks : " + document.getElementById('player').textTracks + "<br />";
    info += "videoTracks : " + document.getElementById('player').videoTracks + "<br />";
    info += "volume : " + document.getElementById('player').volume + "<br />";

    panel.innerHTML += info;
};

Player.prototype.volumeUp = function (volume) {
    var playerDOM = document.getElementById('player');

    if (playerDOM.volume <= 0.9)
        playerDOM.volume += 0.1;
};

Player.prototype.volumeDown = function (volume) {
    var playerDOM = document.getElementById('player');

    if (playerDOM.volume >= 0.1)
        playerDOM.volume -= 0.1;
};

Player.prototype.play = function (volume) {
    var playerDOM = document.getElementById('player');

    playerDOM.play();
};

Player.prototype.pause = function (volume) {
    var playerDOM = document.getElementById('player');

    playerDOM.pause();
};

Player.prototype.attachEvents = function () {
    var playerDOM = document.getElementById('player');

    playerDOM.addEventListener("abort", this.addInfo); 		   // the loading of an audio/video is aborted
    playerDOM.addEventListener("canplay", this.addInfo);        // the browser can start playing the audio/video
    playerDOM.addEventListener("canplaythrough", this.addInfo); // the browser can play through the audio/video without stopping for buffering
    playerDOM.addEventListener("durationchange", this.addInfo); // the duration of the audio/video is changed
    playerDOM.addEventListener("emptied", this.addInfo);        // the current playlist is empty
    playerDOM.addEventListener("ended", this.addInfo); 		   // the current playlist is ended
    playerDOM.addEventListener("error", this.addInfo); 		   // an error occurred during the loading of an audio/video
    playerDOM.addEventListener("loadeddata", this.addInfo);     // the browser has loaded the current frame of the audio/video
    playerDOM.addEventListener("loadedmetadata", this.addInfo); // the browser has loaded meta data for the audio/video
    playerDOM.addEventListener("loadstart", this.addInfo);      // the browser starts looking for the audio/video
    playerDOM.addEventListener("pause", this.addInfo); 		   // the audio/video has been paused
    playerDOM.addEventListener("play", this.addInfo); 		   // the audio/video has been started or is no longer paused
    playerDOM.addEventListener("playing", this.addInfo);        // the audio/video is playing after having been paused or stopped for buffering
    playerDOM.addEventListener("progress", this.addInfo);       // the browser is downloading the audio/video
    playerDOM.addEventListener("ratechange", this.addInfo);     // the playing speed of the audio/video is changed
    playerDOM.addEventListener("seeked", this.addInfo); 		   // the user is finished moving/skipping to a new position in the audio/video
    playerDOM.addEventListener("seeking", this.addInfo);        // the user starts moving/skipping to a new position in the audio/video
    playerDOM.addEventListener("stalled", this.addInfo);        // the browser is trying to get media data, but data is not available
    playerDOM.addEventListener("suspend", this.addInfo);        // the browser is intentionally not getting media data
    //playerDOM.addEventListener("timeupdate", this.addInfo);     // the current playback position has changed
    playerDOM.addEventListener("volumechange", this.addInfo);   // the volume has been changed
    playerDOM.addEventListener("waiting", this.addInfo);        // the video stops because it needs to buffer the next frame

};


Player.prototype.addInfo = function (event) {
    var panel = document.getElementById('infoPanel');
    var text = "evenement : " + event.type;

    panel.innerHTML += text + "<br />";
    console.log(text);
};
