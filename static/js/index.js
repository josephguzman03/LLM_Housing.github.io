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
    $("#intro .container").load("sections/intro.html");
    $("#methods .container").load("sections/methods.html");
    $("#apps .container").load("sections/apps.html");
    $("#team .container").load("sections/team.html");
    $("#results .container").load("sections/results.html");
    $("#references .container").load("sections/references.html");

  });

  