import { dateCalcResult, timesTimer } from "./constant.js";

let visite = null;

/**
 * 
 * @param {*} event 
 */
export function timeStopStart(event){
    event.preventDefault();
    if(event.target.className === 'timer__stop_Button'){
    timesTimer.value = "Пауза. Нажми СТАРТ, что бы продолжить";
    let mins = -1;
    let sek = -1;
    visite = dateCalcResult.innerHTML;
    event.target.parentElement.childNodes[1].style = "display: block";
    event.target.style = "display: none;"
    calsTime(mins, sek);
    } else {
        timesTimer.value = visite;
        dateCalcResult.innerHTML = visite;
        event.target.parentElement.childNodes[3].style = "display: block";
        event.target.style = "display: none;"
        tik();
    }
}

/**
 * 
 */
export function tik(){
    let timem = dateCalcResult.innerHTML;
    let timemm = timem.split(':');
    let setMin = Number(timemm[0]);
    let setSek = Number(timemm[1]);
    if(setMin >= 0 && setSek >= 0){
        calsTime(setMin, setSek);
    }
}

/**
 * 
 * @param {*} mins 
 * @param {*} sek 
 * @returns 
 */
export function calsTime(mins, sek){
    if (sek > 0){
        sek--;
    } else {
        sek = 59;
        mins--;
    }
    if(mins == 0 && sek == 0){
        let audio = new Audio(); 
        audio.src = './publik/kessidi.mp3'; 
        audio.autoplay = true; 
    }
    return dateCalcResult.innerHTML = `${mins}:${sek}`
}