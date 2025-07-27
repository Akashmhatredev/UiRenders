<template>
    <div class="q-pa-md bg-grey-10 text-white">
        <!-- Content to create scroll space -->
        <div class="scroll-spacer">
            <h2 class="text-h2 text-center q-mb-xl">Scroll Down to Start the Animation</h2>
            <p class="text-h4 text-center text-grey-5">A tractor will move along the red path.</p>
        </div>

        <!-- Container for the SVG and animation -->
        <div class="svg-container">
            <svg id="linesvg" opacity="0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 869 3002" xml:space="preserve">
                <!-- The styling for the SVG path is now handled in the <style> block below -->
                <path id="motionPath" class="st0"
                    d="M155.395,383.31 C152.773,390.548 92.401,646.162 250.215,727.041 453.479,831.213 835.629,715.412 832.33,924.268 830.006,1071.385 20.339,1040.965 22.58,1206.204 24.517,1348.994 835.125,1320.378 832.275,1445.504 827.175,1669.362 57.235,1623.348 56.673,1760.63 55.674,2004.272 837.157,1936.609 837.205,2053.845 837.283,2246.807 137.92199,2252.96102 137.92199,2252.96102 " />
                <g id="motionSVG">
                    <g id="tractor">
                        <!-- All the tractor path elements from your HTML go here -->
                        <path id="Vector"
                            d="M30.4786 2.37109C30.1944 1.6945 28.2463 1.46897 26.5629 1.44392L26.561 1.44147C26.5079 1.44147 26.4533 1.44228 26.3993 1.4427C26.3456 1.44228 26.2909 1.44147 26.2378 1.44147L26.2359 1.44392C24.5526 1.46897 22.6045 1.6945 22.3202 2.37109C22.0174 3.09168 22.0406 4.97436 22.46 5.53219C22.46 5.53219 23.2008 6.28613 26.0526 6.36144C26.1275 6.3654 26.2033 6.36894 26.2845 6.36894C26.3247 6.36894 26.36 6.3673 26.3993 6.36705C26.4388 6.3673 26.4742 6.36894 26.5143 6.36894C26.5955 6.36894 26.6713 6.3654 26.7463 6.36144C29.5982 6.28613 30.3388 5.53219 30.3388 5.53219C30.7582 4.97436 30.7814 3.09168 30.4786 2.37109Z"
                            fill="#2497C9" />
                        <path id="Vector_2" opacity="0.7"
                            d="M30.4786 2.37109C30.1944 1.6945 28.2463 1.46897 26.5629 1.44392L26.561 1.44147C26.5079 1.44147 26.4533 1.44228 26.3993 1.4427C26.3456 1.44228 26.2909 1.44147 26.2378 1.44147L26.2359 1.44392C24.5526 1.46897 22.6045 1.6945 22.3202 2.37109C22.0174 3.09168 22.0406 4.97436 22.46 5.53219C22.46 5.53219 23.2008 6.28613 26.0526 6.36144C26.1275 6.3654 26.2033 6.36894 26.2845 6.36894C26.3247 6.36894 26.36 6.3673 26.3993 6.36705C26.4388 6.3673 26.4742 6.36894 26.5143 6.36894C26.5955 6.36894 26.6713 6.3654 26.7463 6.36144C29.5982 6.28613 30.3388 5.53219 30.3388 5.53219C30.7582 4.97436 30.7814 3.09168 30.4786 2.37109Z"
                            fill="#566C24" />
                        <!-- ... (SVG path data truncated for brevity) ... -->
                        <path id="Vector_155"
                            d="M41.4162 30C41.7946 30 42.1667 30 42.5451 30C42.646 30.0252 42.7405 30.0568 42.8414 30.0757C46.272 30.6306 48.5045 33.7585 47.8738 37.1261C47.3189 40.0774 44.6261 42.1774 41.6306 41.9882C38.61 41.799 36.2073 39.3963 36.0118 36.3756C35.8226 33.3801 37.9226 30.6811 40.8739 30.1261C41.0568 30.0883 41.2334 30.0378 41.4162 30ZM40.5144 40.6954C40.5901 40.7395 40.628 40.7711 40.6784 40.7837C41.9712 41.1305 43.2072 40.9855 44.3802 40.3359C44.4811 40.2792 44.5694 40.09 44.5694 39.9576C44.582 38.8161 44.5757 37.6684 44.5757 36.5144C44.5757 36.4324 44.5567 36.3441 44.5441 36.2621C44.5126 36.2432 44.4811 36.2306 44.4495 36.2117C44.3865 36.3062 44.3234 36.4071 44.2477 36.4891C43.327 37.5044 42.4063 38.5134 41.4793 39.5287C41.3973 39.617 41.2901 39.7431 41.1955 39.7495C40.6595 39.7684 40.1172 39.7621 39.5054 39.7621C39.6316 39.617 39.7009 39.5287 39.7766 39.4468C40.6721 38.4251 41.5676 37.3972 42.482 36.3945C42.709 36.1486 42.6775 36.0099 42.4694 35.7828C41.5234 34.736 40.5901 33.6765 39.6568 32.6171C39.5874 32.5414 39.5244 32.4531 39.4298 32.327C40.0289 32.327 40.5523 32.3144 41.0694 32.3333C41.227 32.3396 41.4162 32.4216 41.5171 32.5351C42.173 33.2351 42.8162 33.954 43.4532 34.6729C43.5288 34.7549 43.5541 34.881 43.6045 34.9882C43.945 34.6729 44.1721 34.4648 44.3549 34.2252C44.4622 34.0801 44.5567 33.8846 44.5694 33.7081C44.5946 33.1657 44.5694 32.6234 44.582 32.0748C44.5883 31.8477 44.5126 31.709 44.3108 31.6081C43.182 31.0342 42.009 30.8892 40.7793 31.1919C40.6847 31.2171 40.5901 31.2612 40.4577 31.3117C40.6721 31.5576 40.855 31.7657 41.0505 31.9802C40.9874 32.0117 40.9559 32.0369 40.9307 32.0369C40.3694 32.0369 39.8018 32.0306 39.2406 32.0369C39.1397 32.0369 39.0136 32.0558 38.9316 32.1126C36.3775 33.9919 36.4343 38.1414 39.0388 39.9702C39.1271 40.0332 39.2595 40.0395 39.373 40.0395C39.9217 40.0458 40.464 40.0395 41.0694 40.0395C40.8613 40.2918 40.6973 40.4873 40.5144 40.6954ZM46.0324 38.7657C47.218 37.7882 47.2117 34.0171 46.0324 33.2792C46.0324 35.1081 46.0324 36.9243 46.0324 38.7657Z"
                            fill="#256839" />
                    </g>
                </g>
            </svg>
        </div>

        <!-- Content to create scroll space -->
        <div class="scroll-spacer">
            <h2 class="text-h2 text-center q-mt-xl">End of the path!</h2>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

/**
 * Helper function that returns an ease that bends time to ensure the target moves on the y-axis
 * in a relatively steady fashion in relation to the viewport.
 * @param {string | object} path - The selector for the motion path.
 * @param {object} config - Configuration options (smooth, precision, axis).
 * @returns {function} An ease function.
 */
function pathEase(path, config = {}) {
    let axis = config.axis || "y",
        precision = config.precision || 1,
        rawPath = MotionPathPlugin.cacheRawPathMeasurements(
            MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]),
            Math.round(precision * 12)
        ),
        useX = axis === "x",
        start = rawPath[0][useX ? 0 : 1],
        end =
            rawPath[rawPath.length - 1][
            rawPath[rawPath.length - 1].length - (useX ? 2 : 1)
            ],
        range = end - start,
        l = Math.round(precision * 200),
        inc = 1 / l,
        positions = [0],
        a = [0],
        minIndex = 0,
        smooth = [0],
        minChange = (1 / l) * 0.6,
        smoothRange = config.smooth === true ? 7 : Math.round(config.smooth) || 0,
        fullSmoothRange = smoothRange * 2,
        getClosest = (p) => {
            while (positions[minIndex] <= p && minIndex++ < l) { }
            a.push(
                ((p - positions[minIndex - 1]) /
                    (positions[minIndex] - positions[minIndex - 1])) *
                inc +
                minIndex * inc
            );
            if (smoothRange && a.length > smoothRange && a[a.length - 1] - a[a.length - 2] < minChange) {
                smooth.push(a.length - smoothRange);
            }
        },
        i = 1;
    for (; i < l; i++) {
        positions[i] =
            (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
    }
    positions[l] = 1;
    for (i = 0; i < l; i++) {
        getClosest(i / l);
    }
    a.push(1);
    if (smoothRange) {
        smooth.push(l - fullSmoothRange + 1);
        smooth.forEach((i) => {
            let start = a[i],
                j = Math.min(i + fullSmoothRange, l),
                inc = (a[j] - start) / (j - i),
                c = 1;
            i++;
            for (; i < j; i++) {
                a[i] = start + inc * c++;
            }
        });
    }
    l = a.length - 1;
    return (p) => {
        let i = p * l,
            s = a[i | 0];
        return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
    };
}

onMounted(() => {
    // Set initial states
    gsap.set("#linesvg", { opacity: 1 });
    gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
    gsap.set("#tractor", { transformOrigin: "50% 50%" });

    let rotateTo = gsap.quickTo("#tractor", "rotation");
    let prevDirection = 0;

    // Create the scroll-triggered animation
    gsap.to("#motionSVG", {
        scrollTrigger: {
            trigger: "#motionPath",
            start: "top center",
            end: () =>
                "+=" + document.querySelector("#motionPath").getBoundingClientRect().height,
            scrub: 0.5,
            markers: true, // You can remove this in production
            onUpdate: (self) => {
                if (prevDirection !== self.direction) {
                    rotateTo(self.direction === 1 ? 0 : -180);
                    prevDirection = self.direction;
                }
            },
        },
        ease: pathEase("#motionPath"),
        immediateRender: true,
        motionPath: {
            path: "#motionPath",
            align: "#motionPath",
            alignOrigin: [0.5, 0.5],
            autoRotate: 90,
        },
    });
});
</script>

<style lang="scss" scoped>
/* Scoped styles for this component */
.scroll-spacer {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.svg-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

#linesvg {
    width: 100%;
    height: auto;
}

/* The style for the SVG path, moved from the inline <style> tag.
  This is now correctly placed within the Vue component's style block.
*/
.st0 {
    fill: none;
    stroke: red;
    stroke-width: 10;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
}
</style>
