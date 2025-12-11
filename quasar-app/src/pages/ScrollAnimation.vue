<template>
  <div>
    <header>
      <div>Animated Sections</div>
      <div><a href="https://codepen.io/smitdudhat/pens/public">Akash Mhatre</a></div>
    </header>

    <section class="first">
      <div class="outer">
        <div class="inner">
          <div class="bg one">
            <h2 class="section-heading">Scroll down</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="second">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <h2 class="section-heading">Animated with GSAP</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="third">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <h2 class="section-heading">GreenSock</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="fourth">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <h2 class="section-heading">Animation platform</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="fifth">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <h2 class="section-heading">Keep scrolling</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText"; // Make sure SplitText is available

gsap.registerPlugin(Observer, SplitText);

export default {
  name: "GsapAnimatedSections",
  setup() {
    onMounted(() => {
      let sections = document.querySelectorAll("section"),
        images = document.querySelectorAll(".bg"),
        headings = gsap.utils.toArray(".section-heading"),
        outerWrappers = gsap.utils.toArray(".outer"),
        innerWrappers = gsap.utils.toArray(".inner"),
        splitHeadings = headings.map(
          (heading) =>
            new SplitText(heading, {
              type: "chars,words,lines",
              linesClass: "clip-text",
            })
        ),
        currentIndex = -1,
        wrap = gsap.utils.wrap(0, sections.length - 1),
        animating;

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      function gotoSection(index, direction) {
        index = wrap(index);
        animating = true;
        let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => (animating = false),
          });

        if (currentIndex >= 0) {
          gsap.set(sections[currentIndex], { zIndex: 0 });
          tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
            sections[currentIndex],
            { autoAlpha: 0 }
          );
        }

        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

        tl.fromTo(
          [outerWrappers[index], innerWrappers[index]],
          { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
          { yPercent: 0 },
          0
        )
          .fromTo(
            images[index],
            { yPercent: 15 * dFactor },
            { yPercent: 0 },
            0
          )
          .fromTo(
            splitHeadings[index].chars,
            {
              autoAlpha: 0,
              yPercent: 150 * dFactor,
            },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2",
              stagger: {
                each: 0.02,
                from: "random",
              },
            },
            0.2
          );

        currentIndex = index;
      }

      Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true,
      });

      gotoSection(0, 1);
    });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  user-select: none;
}

a {
  color: #fff;
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  color: white;
  background: black;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.2em;
  margin-right: -0.5em;
  color: #cccccc;
  width: 90vw;
  max-width: 1200px;
}

header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  z-index: 3;
  height: 7em;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(0.66rem, 2vw, 1rem);
  letter-spacing: 0.2em;
}

section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;
}
section .outer,
section .inner {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
section .bg {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-size: cover;
  background-position: center;
}
section .bg h2 {
  z-index: 2;
}
section .bg .clip-text {
  overflow: hidden;
}

.first .bg {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("https://res.cloudinary.com/smitdudhat/image/upload/v1672059380/cld-sample-4.jpg");
}

.second .bg {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("https://res.cloudinary.com/smitdudhat/image/upload/v1672059379/cld-sample-3.jpg");
}

.third .bg {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("https://res.cloudinary.com/smitdudhat/image/upload/v1672059379/cld-sample-2.jpg");
}

.fourth .bg {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("https://res.cloudinary.com/smitdudhat/image/upload/v1672059378/cld-sample.jpg");
}

.fifth .bg {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("https://res.cloudinary.com/smitdudhat/image/upload/v1672059380/cld-sample-5.jpg");
  background-position: 50% 45%;
}

h2 * {
  will-change: transform;
}
</style>
