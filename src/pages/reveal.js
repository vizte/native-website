const tl = gsap.timeline()

tl.fromTo(".after-img",{xPercent:100, x:0},{xPercent:0})
.fromTo(".after-img img",{xPercent:-100, x:0},{xPercent:0},0)

ScrollTrigger.create({
    animation: tl, 
    trigger: ".after-before-section",
    start: "canter canter",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  });