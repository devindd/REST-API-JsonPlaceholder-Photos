document.addEventListener('DOMContentLoaded', function() {
  var links = [];
  var index=0;
  var photo_id;
  var thumbnail_url;
    var photo_url;


  $.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    method: "GET"
  }).done(function(data) {
    links = data;
    console.log(links);
    renderLinks(index);
   });

  $('body').on('click', '.link', function(){
    photo_id = $(this).attr('href').slice(1);
    thumbnail_url = links[photo_id].thumbnailUrl;
    $('#thumbnail').html('<img src="' + thumbnail_url + '">' );
  });

    $('body').on('mouseenter', '#thumbnail', function(){
        photo_url = links[photo_id].url;
        $('#thumbnail').html('<img src="' + photo_url + '">' );
        $('#thumbnail').css('position', 'relative');
        $('#thumbnail').find('img').css({
            'position' : 'absolute',
            'width' : 'auto',
            'height' : 'auto',
            'border-radius' : '0',
            'top' : '0',
            'left' : '15px'
        })
    })

    $('body').on('mouseleave', '#thumbnail', function(){
        photo_url = links[photo_id].thumbnailUrl;
        $('#thumbnail').html('<img src="' + photo_url + '">' );
        $('#thumbnail').css('','');
        $('#thumbnail').find('img').css('','');
    })

  function renderLinks(index){
    for(var i=0; i<12; i++, index++){
      document.getElementById('display').innerHTML += '<div class="links">' + links[index].id + '<a class="link" href="#' + links[index].id + '">' + links[index].title + '</a> </div> </br>';
    }
  }

  $('#nextpage').on('click',function(){
    document.getElementById('display').innerHTML = "";
    index+= 12;
    if(index >= links.length) {
      index = 0;
    }
    renderLinks(index);
  })
  $('#prevpage').on('click',function(){
    document.getElementById('display').innerHTML = "";
    index-=12;
    if(index<0) index=links.length-12;
    renderLinks(index);
  })













})
