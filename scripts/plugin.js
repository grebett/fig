const log = (...args) => console.log('in da plugin', ...args);
const players = videojs.players;
let player = null;

console.log(this);
// setTimeout(() => {
//   let player = players['video-js-player'];
//   player.on('readyforpreroll', e => {
//     log(e);
//   });
// }, 500);
