const sections = document.querySelectorAll('.section');
const controls = document.querySelector('.controls');
const sectBtn = controls.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const darkSwitch = document.querySelector('.darkSwitch');

function PageTransitions() {
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = controls.querySelector('.active-btn');
            if(currentBtn)currentBtn.classList.remove("active-btn");
            this.classList.add("active-btn")

            window.scrollTo({ top: 0, behavior: 'smooth' });
            

            sections.forEach((section) => {
                section.classList.remove("active");
                if(section.dataset.id == this.dataset.id){
                    section.classList.add("active")
                }
            })
        })
    }
}

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if(dark){
    document.body.classList.add("dark-theme")
}

darkSwitch.addEventListener('click', ()=> {
    document.body.classList.toggle("dark-theme");
})

sectBtn.forEach(btn => {
    btn.addEventListener('mouseover', function(e){
        if(this == e.target){
            const label = btn.querySelector(".label");
            label.classList.add('hover')
        }
    })
    btn.addEventListener('mouseleave', function(){
        const label = btn.querySelector(".label");
        label.classList.remove('hover')
    })
})


PageTransitions();