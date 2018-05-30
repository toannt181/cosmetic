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
})()