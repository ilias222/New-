import { timesFormat, dateCalcForm, dateCalcResult, startTimer, stopTimer, 
    timesTimer, chekedDate, chekedTimer } from "./constant.js";
import { diffDates, diffToHTML } from "./datecalc.js";
import { blockShadow } from "./formSchadow.js";
import { formatError } from "./utils.js";
import { timeStopStart, tik } from "./TimerForm.js";

dateCalcForm.addEventListener('submit', handleCalcDates);
startTimer.addEventListener('click', timeStopStart);
stopTimer.addEventListener('click', timeStopStart);
timesTimer.addEventListener('input', handleCalcTimesFormat);
chekedDate.addEventListener('click', blockShadow);
chekedTimer.addEventListener('click', blockShadow);

// define(["loadScript"], function({loadScript}){
//      loadScript('ilia');
//  });

export let timesTim = null;

function handleCalcTimesFormat(event){
    event.preventDefault();
    let time = event.target.value;
    if(timesFormat.test(time)){
        event.target.style = "color: black;"
        dateCalcResult.innerHTML = event.target.value;
        console.log(timesTim);
        timesTim = setInterval(tik, 1000)
    } else {
        event.target.style = "color: red;"
        dateCalcResult.innerHTML = formatError('Необходимо задать время в формате 00:00');
    }

}

function handleCalcDates(event) {
    event.preventDefault();
    dateCalcResult.innerHTML = '';

    let firstDate = event.target.elements[0];
    let secondDate = event.target.elements[1]
    firstDate = firstDate.value, secondDate = secondDate.value;       
    
    if(firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); 
        dateCalcResult.innerHTML = diffToHTML(diff);
    }else
    {
        dateCalcResult.innerHTML = formatError('Необходимо заполнить два поля, или выбрать таймер');
                }


    
}