$(function () {
  const rand = () => {
    return Math.floor(Math.random() * 256);
  };

  const randRGB = () => {
    return `rgb(${rand()}, ${rand()}, ${rand()})`;
  };

  $('#btn').click(function () {
    // AJAX method untuk melakukan request AJAX

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/',

      // Method success untuk handle on resolve

      success(res) {
        res.forEach((item) => {
          // .text, set innerText

          let text = $('<p></p>').text(item.title);

          // .append untuk append ke child

          $('.container').append(text);
        });
      },
    });
  });

  // Event mouseenter untuk hover

  $('#btn').mouseenter(function () {
    // Animate untuk transform + transitions

    $('#btn').animate({
      opacity: '0.3',
    });
  });

  // Event mouseleave

  $('#btn').mouseleave(function () {
    $('#btn').animate({
      opacity: '1',
    });
  });

  $('#btnEnd').click(function () {
    // .css untuk add css property

    $('body').css('background-color', randRGB());
  });

  $('#dropMe').click(function () {
    // slideDown dan slideUp untuk transition + visibility

    $('#content').slideDown('slow').slideUp('fast');
  });

  // keypress event listener

  $('input').keypress(function () {
    $('input').css('background-color', randRGB());
  });
});
