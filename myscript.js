

sections = ["home", "about", "team", "programs", "contact"];

function Togglesections(activesection){
    for(let i = 0; i < sections.length; i++){
        let section = document.getElementById(sections[i]);
        if(section.id != activesection){
            section.style.display = "none";
        }else{
            section.style.display = "block";
        }
    }
}
