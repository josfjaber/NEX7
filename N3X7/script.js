// ===========================
// NEX7 Premium JavaScript
// ===========================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Navbar Blur
const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>20){

        navbar.style.background="rgba(10,10,10,.65)";
        navbar.style.backdropFilter="blur(25px)";
        navbar.style.borderRadius="25px";
        navbar.style.padding="18px 30px";
        navbar.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

    }else{

        navbar.style.background="transparent";
        navbar.style.backdropFilter="none";
        navbar.style.boxShadow="none";
        navbar.style.padding="25px 0";

    }

});

// Fade-in Animation
const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section,.card,.plan,.glass").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s ease";

    observer.observe(el);

});

// Card Hover Glow
document.querySelectorAll(".card,.plan").forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.15),
        rgba(255,255,255,.05) 60%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.05)";

    });

});

// Hero Glow
const hero=document.querySelector(".hero");

hero.addEventListener("mousemove",e=>{

    hero.style.background=
    `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(255,255,255,.06),
    transparent 45%)`;

});

// Button Click Animation
document.querySelectorAll(".primary,.secondary,button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(.95)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:180

        });

    });

});

// Fake AI Typing
const ai=document.querySelector(".ai");

if(ai){

const text=ai.innerText;

ai.innerText="";

let i=0;

const typing=setInterval(()=>{

    ai.innerText+=text.charAt(i);

    i++;

    if(i>=text.length){

        clearInterval(typing);

    }

},25);

}

// Floating Animation
document.querySelectorAll(".glass,.featured").forEach(el=>{

    let y=0;

    setInterval(()=>{

        y+=0.02;

        el.style.transform=`translateY(${Math.sin(y)*6}px)`;

    },16);

});

console.log("🚀 NEX7 Loaded Successfully");