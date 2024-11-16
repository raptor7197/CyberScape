

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    
    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
  
        // Check the computed style of the panel
        if (getComputedStyle(panel).display === "block") {
          panel.style.display = "none";
          this.setAttribute("aria-expanded", "false");
        } else {
          panel.style.display = "block";
          this.setAttribute("aria-expanded", "true");
        }
      });
    }
  });

document.addEventListener("DOMContentLoaded" ,function()
{
    var he = document.getElementsByClassName("magik");
    
}

) 