// Displays featured posts
featuredPost = function(data){
  var featured = data[0];
  var pubDate = new Date(featured.publish_date);
  var template = '<div class="col-xl-4 col-12"><h2>' + featured.title + '</h2><hr><span>' + pubDate.toLocaleDateString('en-US') + '</span><p>' + featured.blurb + '</p><button class="btn btn-outline-primary w-100" data-toggle="collapse" data-target="#collapseExample' + featured.id + '" aria-expanded="false" aria-controls="collapseExample' + featured.id + '">Read Me</button></div><div class="col-12"><p class="collapse" id="collapseExample' + featured.id + '">' + featured.body + '</p></div>';
  var headerHash = featured.header_image.hash;
  var headerIMG = 'http://localhost:1337/uploads/' + headerHash + '.jpg';

  $('#featured-post').html(template);
  $('#blog-feature').css('background-image', 'url("' + headerIMG + '")');
}

// Lists all other posts that aren't featured post
postsList = function(data) {
  data.shift();
  var blogPosts = document.createElement('div');
  blogPosts.id = 'blog-posts';
  data.forEach(function(data){
    // Set up data and template
    var title = data.title;
    var blurb = data.blurb;
    var id = data.id;
    var body = data.body;
    var headerImage = 'http://localhost:1337/uploads/' + data.header_image.hash + '.jpg';
    var pubDate = new Date(data.publish_date);
    var template = '<div class="col-12 col-xl-4 post-img" style="background-image: url(' + headerImage + ');"></div><div class="col-12 col-xl-6 post-info"><h3>' + title + '</h3><hr><span>' + pubDate.toLocaleDateString('en-US') + '</span><p>' + blurb + '</p><button class="btn btn-outline-primary post-button mx-auto" data-toggle="collapse" data-target="#collapseExample' + id + '" aria-expanded="false" aria-controls="collapseExample' + id + '">Read Me</button></div><div class="col-12 post-body"><p class="collapse" id="collapseExample' + id + '">' + body + '</p></div>';
    
    // Create blog post for each post in CMS
    var blogPost = document.createElement('div');
    blogPost.className = 'row blog-post';
    blogPost.innerHTML = template;
    blogPosts.appendChild(blogPost);

  })
  // Swap placeholder with blog list
  $('#blog-posts').html(blogPosts)
}

// Calls in CMS data and populates page once call is complete
var cmsAPI = "http://localhost:1337/posts?_sort=publish_date:DESC";
$.getJSON(cmsAPI)
  .done(function (data) {
    // Check publish date is within the scope of time we've experienced thus far
    var date = new Date();
    date = date.toISOString();
    for (var i = 0; i < data.length; i++){
      if (data[i].publish_date > date) {
        console.log(data[i]);
        // data.splice(i, 1);
        // console.log(data);
      }
    }
    

    featuredPost(data);
    postsList(data);
  });

