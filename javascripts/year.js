(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var year = document.querySelector('[data-current-year]');
    if (year) {
      var currentYear = (new Date()).getFullYear() || '';
      year.textContent = currentYear;
    }
  })
})()