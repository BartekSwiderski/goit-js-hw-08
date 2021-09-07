import _default from "../../node_modules/@vimeo/player/dist/player";
import throttle from '../../node_modules/lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let playerTime = function(data)  {
  localStorage.setItem("videoplayer-current-time",data.seconds);
}
player.on('timeupdate',throttle (playerTime, 1000));
const time = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(time).then(function(seconds) {
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          break;
      default:
          break;
  }
});