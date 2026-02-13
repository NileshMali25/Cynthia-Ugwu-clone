
// smooth scrolling
//     attach loco scroll CSS
//     attach locomotive scroll min js
//     some code from loco github for js

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut"
    })

    .to(".boundingelem", {
        y: 0,
        duration: 2,
        ease: "expo.inOut",
        delay: -1,
        stagger: 0.2
    })

    .from("#herofooter", {   
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: "expo.inOut"
    });
}

//jab mouse move ho to log skew kar paaye aur maximum skew and minimum skew define kr paye ,jab mouse move ho to chapta ki value badhe ,aur jab mouse chalna band ho jaye to chapta hata lo

var timeout;

function circleChaptaKaro(){
    //define default scale value
    var xscale=1;
    var yscale=1;

    var xprevious=0;
    var yprevious=0;
    window.addEventListener("mousemove",function(dets){

        xscale=gsap.utils.clamp(.8,1.2,dets.clientX -xprevious);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY -yprevious);

        xprevious=dets.clientX;
        yprevious=dets.clientY;

        circleMouseFollower(xscale,yscale);
        
    });
}
circleChaptaKaro();


function circleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove", function (dets) {
        gsap.to("#minicircle", {
            x: dets.clientX,
            y: dets.clientY,
            duration: 0.3,
            ease: "power2.out"
        });
    });
}

circleMouseFollower();
firstPageAnim();
