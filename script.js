const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
});

gsap.from(".anim2",{
    y: 30,
    opacity: 0,
    stagger: .2,
    ease: Expo,
    duration: 1
});

Shery.textAnimate("#heading h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    mutiplier: 0.1,
});

