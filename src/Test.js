function getSecret(file, secretPassword) {
  file.opened += 1;
  if (secretPassword === file.password) {
    return file.contents;
  } else {
    return "Invalid password!! No secret for you.";
  }
}

function setSecret(file, secretPassword, secret) {
  file.opened = 0;
  file.contents = secret;
}

var superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit",
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

var song = {
  name: "Walk This Way",
  artist: "Run-D.M.C.",
  minutes: 4,
  seconds: 3,
  genre: "80s",
  playing: false,
  play: function () {
    if (!this.playing) {
      this.playing = true;
      console.log(`Playing ${this.name} by ${this.artist}`);
    }
  },
  pause: function () {
    if (this.playing) {
      this.playing = false;
    }
  },
};

song.play();
song.pause();
