// JSON Test if needed
// var json = (function() {
//   var json = null
//   $.ajax({
//     async: false,
//     global: false,
//     url: "/assets/js/yt.json",
//     dataType: "json",
//     success: function(data) {
//       json = data
//     }
//   })
//   return json
// })()

// Set playlist ID (everything returning from JSON)
// var playlistID = json

function getPlaylist(playlistID) {
  $.getJSON(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=" +
    playlistID +
    "&key=AIzaSyCwWecfbYbir2eDyB2dEBd51Ymn3iVA9Eg",
    function (data) {
      console.log(data)
      createVideoElements(data)
      
    }
  )
}
// For items in playlist length, create elements
function createVideoElements(data) {
  
  var playlistData = data
  var l = playlistData.items.length

  for (var i = 0; i < l; i++) {
    currentPlaylist = playlistData.items[i]
    // Variables for making element
    var vidID = currentPlaylist.contentDetails.videoId
    var vidImage = currentPlaylist.snippet.thumbnails.high.url
    var vidTitle = currentPlaylist.snippet.title

    // Console log vars
    // console.log("vidID= " + vidID);
    // console.log("vidImage= " + vidImage);
    // console.log("vidTitle= " + vidTitle);
    // console.log("vidURL= " + vidURL);

    // Element template
    var template =
      "<div class='col-lg-4 mb-2'><a href='http://www.youtube.com/watch?v=" +
      vidID +
      "' data-toggle='lightbox' data-gallery='youtubevideos' class='video-cover'><div class='overlay'><h4>" + vidTitle + "</h4></div><img src='" +
      vidImage +
      "' class='img-fluid'/>" +
      "</a></div>"

    $(".playlist-row").append(template)
  }
}

getPlaylist("PLEj3ZEnwxSTX34kSxECV9SI-di6wKVKpC")