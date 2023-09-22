document.addEventListener("DOMContentLoaded", function () {
  const jamesText = document.querySelector(".lj-text")
  const jamesLoveText = document.querySelector(".lj-love")
  const jamesImg = document.querySelector(".lj-img")
  const songTextLetters = document.querySelectorAll(".song-text span")
  const mainVideo = document.querySelector(".main-video")

  const tl = gsap.timeline()

  tl.from(jamesImg, { opacity: 0.4, duration: 1.3, scale: 1.8, delay: 1 })
    .from(jamesText, { y: 70, scale: 1.5, opacity: 0, duration: 1.5 }, "-=.2")
    .from(jamesLoveText, { opacity: 0 }, "-=.2")
    .from(songTextLetters, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.2, // Stagger the animation of the span elements
      delay: 0.1,
    })
    .from(mainVideo, { opacity: 0, duration: 2 })
})
