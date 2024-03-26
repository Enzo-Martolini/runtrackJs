document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var footer = document.getElementById('footer')

    var red = Math.min(255, Math.max(0, scrollPosition/200))
    var blue = Math.min(255, Math.max(0, scrollPosition/2))
    var green = Math.min(255, Math.max(0, scrollPosition/2))

    footer.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  });