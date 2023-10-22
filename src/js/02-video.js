import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
function saveCurrentTime(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}
const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);
player.on('timeupdate', data => {
  throttledSaveCurrentTime(data.seconds);
});
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
