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
