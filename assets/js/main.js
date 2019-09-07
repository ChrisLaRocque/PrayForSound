// HTML Loader
var ids = $(".load").map(function() {
  return $(this).attr("id");
});

for (var i = 0; i < ids.length; i++) {
  const id = ids[i];
  $.get(id + ".html", function(data) {
    $("#" + id).replaceWith(data);
  });
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    $("body").css({ 'scroll-snap-type': 'inherit' });
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  $("body").css({ 'scroll-snap-type': 'y proximity' });
});