$(document).on('ready', () => {

  const createCircle = (x, y) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    document.body.appendChild(circle);

    let width = parseInt($("#width").val());
    let growthAmount = parseInt($("#growthAmount").val());
    let rate = parseInt($("#growRate").val());

    let interval = setInterval(function () {
      width += growthAmount;
      circle.style.width = width + 'px';
      circle.style.height = width + 'px';
    }, rate);

    $(document).on('click', '.circle', function () {
      clearInterval(interval);
      $(this).remove();
    });

  }

  $('#start').on('click', function () {
    let numCircles = $("#numCircle").val();
    for (let i = 0; i < numCircles; i++) {
      let x = Math.random() * (window.innerWidth - 50);
      let y = Math.random() * (window.innerHeight - 50);
      createCircle(x, y);
    }
  });

});