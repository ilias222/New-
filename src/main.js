import * as Constant from "./constant.js";
import { diffDates, diffToHTML } from "./datecalc.js";
import { blockShadow } from "./formSchadow.js";
import { formatError } from "./utils.js";
import { timeStopStart, tik } from "./TimerForm.js";

Constant.dateCalcForm.addEventListener('submit', handleCalcDates);
Constant.startTimer.addEventListener('click', timeStopStart);
Constant.stopTimer.addEventListener('click', timeStopStart);
Constant.timesTimer.addEventListener('input', handleCalcTimesFormat);
Constant.chekedDate.addEventListener('click', blockShadow);
Constant.chekedTimer.addEventListener('click', blockShadow);

export let timesTim = null;

function handleCalcTimesFormat(event){
    event.preventDefault();
    let time = event.target.value;
    if(Constant.timesFormat.test(time)){
        event.target.style = "color: black;"
        Constant.dateCalcResult.innerHTML = event.target.value;
        console.log(timesTim);
        timesTim = setInterval(tik, 1000)
    } else {
        event.target.style = "color: red;"
        Constant.dateCalcResult.innerHTML = formatError('Необходимо задать время в формате 00:00');
    }

}

function handleCalcDates(event) {
    event.preventDefault();
    Constant.dateCalcResult.innerHTML = '';

    let firstDate = event.target.elements[0];
    let secondDate = event.target.elements[1]
    firstDate = firstDate.value, secondDate = secondDate.value;       
    
    if(firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); 
        Constant.dateCalcResult.innerHTML = diffToHTML(diff);
    }else
    {
        Constant.dateCalcResult.innerHTML = formatError('Необходимо заполнить два поля, или выбрать таймер');
                }
    
}