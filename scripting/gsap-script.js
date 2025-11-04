    //GSAP
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".zoom-img").forEach(img => {
    gsap.fromTo(img,
      { scale: 1 },  //no zoom
      {
        scale: 1.3, // when scroll, zoom
        ease: "ease",
        scrollTrigger: {
          trigger: img, // anim starts when this element is on screen
          start: "top 80%", // ends when top place of element is 80% lower than the screen 
          end: "bottom top",
          scrub: true, // connected directly to scroll
        }
      }
    );
  });

gsap.registerPlugin(ScrollTrigger);

gsap.to("#silhouette_img", {
  scale: 1.5, // when scroll, zoom
  ease: "none",
  scrollTrigger: {
    trigger: "#silhouette",
    start: "top top",
    end: "+=1000", // zoom in for 1k px
    scrub: true,
    pin: true, // pin effect, sticks to screen while scrolling
    pinSpacing: true,
  }
});
