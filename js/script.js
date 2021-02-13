
//Fonction permettant de détecter un élement présent sur l'écran
function VisibleSurEcran(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}


function pause(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

const elements = document.querySelector("#globale");
const chiffresiut = document.querySelector(".iut-chiffres");

func = async function(){
    if(VisibleSurEcran(chiffresiut)){
          document.removeEventListener('scroll',func);


          const options = { separator :'',};
          
        var compteurs = [
            new countUp.CountUp('nombre1',3000,options),
            new countUp.CountUp('nombre2',1100,options),
            new countUp.CountUp('nombre3',170,options),
            new countUp.CountUp('nombre4',750,options),
            new countUp.CountUp('nombre5',84,options),
          ];

          var Ensemble = document.getElementsByClassName("alt-f");
          for (var i = 0; i < Ensemble.length; i ++){
                Ensemble[i].classList.remove("fade");
                compteurs[i].start();
                await pause(110);
      }
    }
}


document.addEventListener('scroll',func);