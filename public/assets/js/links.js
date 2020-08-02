$(document).ready(function () {
  const linkLists = "https://pfs-api.uk.r.appspot.com/link-lists"
  $.ajax({
    url: linkLists,
    type: "GET",
    beforeSend: function (request) {
      request.setRequestHeader(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTk2NDEwMTMzLCJleHAiOjE1OTkwMDIxMzN9.w-V5AnQlaNmNl1mB5Sfqmyo_BM6JXiLSFctchcGwhLg"
      )
    },
    success: function (result) {
      var links = result[0].list_items
      links.forEach(function (item) {
        let listItem = document.createElement("span")
        let template =
          '<a href="' +
          item.URL +
          '"><button type="button" class="btn btn-outline-primary w-100">' +
          item.Title +
          "</button></a>"
        listItem.innerHTML = template
        document.getElementById("link-list").appendChild(listItem)
      })
    },
    error: function (error) {
      console.log(error)
    },
  })
})
