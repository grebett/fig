const player = videojs.players['video-js-player'];
const log = (...args) => console.log('in da main', ...args);
log(player);

player.on('readyforpreroll', e => {
  log(e);
});
