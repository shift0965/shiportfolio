const sections = document.querySelectorAll('.section');
const controls = document.querySelector('.controls');
const sectBtn = controls.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


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




PageTransitions();