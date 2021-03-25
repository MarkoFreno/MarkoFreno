const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// section i slutningen
const section = document.querySelector('section');
const end = section.querySelector('h1');

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();
// Scenes - styrer hvornår den skal trigger
let scene = new ScrollMagic.Scene({
    duration: 17000,
    triggerElemnt: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);


// tekst animation
const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElemnt: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

//Video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;
// eventlistener på scroll. Den opdaterer når vi scroller til 9000. Vi deler med med 1000 for at få det i sekunder(duration)
scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});
// man tilføjer et delay til hvad en man scroller til, og derefer accelererer det med 0.1
setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 85); //85 er afhængig af hvor mange frames i minutet ens video er. Det er så frameraten ser godt ud
// 9000ms som er delt med 1000. Hvis man ser det i console kan man se hvordan den opdaterer med et delay.
// Delay skal catche op på scroll