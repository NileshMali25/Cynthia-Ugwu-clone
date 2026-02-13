
// smooth scrolling
//     attach loco scroll CSS
//     attach locomotive scroll min js
//     some code from loco github for js

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//gsap
    //attach gsap

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector("#minicircle").style.transform=`translate($(dets.clientX)px, $(dets.clientY)px)`
    });
}
circleMouseFollower();