function App() {
    this.player = new Player();
}

App.prototype.init = function () {
    this.attachEvents();
};

App.prototype.attachEvents = function () {
    var button_infoPanel = document.getElementById('button_infoPanel');
    var button_volumeUp = document.getElementById('button_volumeUp');
    var button_volumeDown = document.getElementById('button_volumeDown');
    var button_play = document.getElementById('button_play');
    var button_pause = document.getElementById('button_pause');

    button_infoPanel.addEventListener("click", this.player.viewInfo);
    button_volumeUp.addEventListener("click", this.player.volumeUp);
    button_volumeDown.addEventListener("click", this.player.volumeDown);
    button_play.addEventListener("click", this.player.play);
    button_pause.addEventListener("click", this.player.pause);

    this.player.attachEvents();
};
