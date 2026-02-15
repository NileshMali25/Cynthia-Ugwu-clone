
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

// teeno element ko select karo ,uske baad teeno pr mousemover lagao,jb mousemove ho to ye pata karo ki mouse kaha par hai ,jiska mtlab hai
// ki mouse ki x and y position pata karo,ab mouse ki x and y position ke badle us image ko show karo and us image ko move karo,move krte waqt
// rotate karo and jaise jaise mouse tej chale waise waise rotation bhi tej ho jaye


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "Power3.out",
            duration: 0.5,
        });
    });
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "Power3.out",
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.6),
        });
    });
});
