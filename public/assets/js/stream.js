// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'pdgLK_l5wHs',
    playerVars: {
      controls: '0',
      rel: '0',
      modestbranding: '1',
      autohide: '1',
      showinfo: '0'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}
$("#player").addClass("embed-responsive-item");

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

$(function() {  
  $(document).on('click', '#btnSeek', function() {
      player.seekTo($(this).data('seek'), true);
  });
});