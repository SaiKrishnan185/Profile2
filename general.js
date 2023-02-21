

// Moving the balls

gsap.fromTo('.circleA', {opacity:0}, {opacity:0.03, duration:5, ease: 'none', stagger:0.8})
gsap.timeline ()
.to('.circleA',{
  x: "random(-1000, 1000, 3)",
  y: "random(0, 500, 3)",
  duration:10,
  ease:"none",
  repeat:-1,
  repeatRefresh:true // gets a new random x and y value on each repeat
})


// nav bar Animation
const tl = gsap.timeline({defaults: {duration: 0.75}})

logo = document.querySelector('.logo');
const logoLetters = logo.textContent.split("");

logo.innerHTML = "";

logoLetters.forEach((letter) => {
    
    logo.innerHTML += '<span class="letter">' + letter + '</span>';
});

gsap.set(".letter", {display: "inline-block"},'<');
tl.fromTo(".letter", {opacity:0, y: 100}, {opacity:1, y: 0,  delay:0.08, stagger:0.05, ease: "none"},'<')


// Menu animation 
body = document.querySelector('body');
gsap.set('.section', {opacity:0})
tl.fromTo('.menu1', {opacity:0, x:-500, y:-500}, {x:0, y:0, opacity:1, ease: Power2.easeOut},'<')
tl.fromTo('.menu4', {opacity:0, x:-500, y:500}, {x:0, y:0, opacity:1, ease: Power2.easeOut},'<')
tl.fromTo('.menu3', {opacity:0, x:500, y:-500}, {x:0, y:0, opacity:1, ease: Power2.easeOut},'<')
tl.fromTo('.menu6', {opacity:0, x:500, y:500}, {x:0, y:0, opacity:1, ease: Power2.easeOut},'<')
tl.fromTo('.menu2', {opacity:0, y:-500}, {y:0, opacity:1, ease: Power2.easeOut},'<')
tl.fromTo('.menu5', {opacity:0, y:500}, {y:0, opacity:1, ease: Power2.easeOut},'<')


tl.fromTo(body,{backgroundColor:"white"},{backgroundColor:"black", ease: Power1.easeOut},'<20%')


section = document.querySelectorAll('.section')
paths = document.querySelectorAll('.paths')



section.forEach(section => {
    section.addEventListener('mouseover', () =>{
        gsap.to(section, {borderColor: 'black', boxShadow: '0 0 30px rgb(77, 74, 74)', backgroundColor:"rgb(190, 190, 190)", duration: 0.25, ease: Power0.easeOut});
        
    })

    section.addEventListener('mouseleave', () =>{
        gsap.set(paths, {opacity:1});
        gsap.to(section, {scale:1, clearProps:'boxShadow', backgroundColor:"white", borderColor: 'rgb(190, 190, 190)', duration: 0.25, ease: Power0.easeOut});
    })

    section.addEventListener('click', () =>{
        gsap.to(section, {scale:0.8, boxShadow: '0 0 25px #ffffff', duration:0.2, delay:0, ease: Power1.easeOut});
        // gsap.fromTo(paths, {opacity: 1}, {opacity:0, ease: Power1.easeOut},'<10%');
        // gsap.set(paths, {opacity:1})
    })
});




// About me animation
gsap.fromTo('#eye', {y:-4}, {y:0, duration:3, ease: 'none', yoyo: true, repeat:-1})
// gsap.fromTo('#fullFace', {opacity:0.6}, {opacity:1, duration:5, ease: 'none', yoyo: true, repeat:-1})

// Skill idle animaton
TweenLite.set('#star', {transformOrigin: '50% 50%'})
gsap.fromTo('#star', {scale:1}, {scale:0.3, duration:1, ease: 'none', stagger:1, yoyo: true, repeat:-1})

// Book idle animation
gsap.fromTo('#textLine', {opacity:0}, {opacity:1, duration:1.5, ease: 'none', stagger:0.2, repeat:-1})


// #Bulb idle animation
TweenLite.set('#Nut', {transformOrigin: '50% 50%'})
TweenLite.to('#Nut', {rotation:360, duration:8, ease: 'none', repeat:-1})

// Contact idle animation
gsap.fromTo('#contactLine', {opacity:0}, {opacity:1, duration:1.5, ease: 'none', stagger:0.2, repeat:-1})


// Circle background animation
TweenLite.set('.circleA', {transformOrigin: '50% 50%', scale: 0.5})


