(function () {
  $(document).scroll(() => {
    const header = $('.main-header')
    if ($(document).scrollTop()) {
      header.addClass('is-sticky')
    } else {
      header.removeClass('is-sticky')
    }
  })

  $('.fa-arrow-circle-o-up').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 800);
  })

  $('.fa-search').click(function () {
    $('.search-header').fadeToggle()
  })

  $('.shelf-list').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  $('.deal-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  })
  $('#product_galary').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 4
      },
    }
  })

  $('#product_galary .item').click(function() {
    console.log($(this).find('img').attr('src'))
    $('#zoom_01').attr('src', $(this).find('img').attr('src'))
    setupZoomImage()  
  })

  setupZoomImage()

  function setupZoomImage() {
    $("#zoom_01").elevateZoom({
      gallery: "gallery_01",
      zoomWindowWidth: 420,
      zoomWindowHeight: 500,
      zoomWindowOffetx: 10,
      easing: !0,
      scrollZoom: !0,
      cursor: "pointer",
      galleryActiveClass: "active",
      imageCrossfade: !0
    })
  }

})()