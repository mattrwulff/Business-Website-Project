window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("nav").style.visibility="hidden";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("nav").style.visibility="visible";
  }
}