document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          const targetElement = (targetId === "#") ? document.body : document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

});

$(document).ready(function(){
    $("#intro .container").load("sections/intro.html", function() { setupFadeInObserver(); });
    $("#methods .container").load("sections/methods.html", function() { setupFadeInObserver(); });
    $("#apps .container").load("sections/apps.html", function() { setupFadeInObserver(); });
    $("#team .container").load("sections/team.html", function() { setupFadeInObserver(); });
    $("#results .container").load("sections/results.html", function() { setupFadeInObserver(); });
    $("#references .container").load("sections/references.html", function() { setupFadeInObserver(); });
});