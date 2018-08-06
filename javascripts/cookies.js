(function () {
  var getCookie = function (name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  var flagGTM = 'GTM-5RC73C';
  if (flagGTM === 'undefined') {
    flagGTM = false;
  }
  if (flagGTM) {
    let cookiePolicy = getCookie('cookiePolicy') + '';
    if (cookiePolicy !== '2') return;
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(), event: 'gtm.js'
      }
               );
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    }
    )(window, document, 'script', 'dataLayer', 'GTM-5RC73C');
  }
})()