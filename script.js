var typed=new Typed(".typing",{
    strings:["Full-Stack Developer.","Frontend Developer.","Web Developer.","Web Designer"],
  typeSpeed:50,
  backSpeed:60,
  
  loop:true
  });
 document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
  });
});
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})


window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title"))
    {
style.removeAttribute("disabled");
    }
    else{
        style.setAttribute("disabled","true");
    }
})

}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark"); 
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})