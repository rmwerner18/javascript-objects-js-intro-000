var playlist = {the Beatles: "Hey Jude"}
var updatePlaylist = (playlist, artistName, songTitle) => {return Object.assign({}, playlist, {[artistName]: songTitle })}
