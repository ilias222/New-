import { dateCalcForm, timesCalcForm } from "./constant.js";
import { timesTim } from "./main.js";
import { dateCalcResult } from "./constant.js";

let shadowDate = false;
let shadowTimer = false;

/**
 * 
 * @param {*} event 
 */
export function blockShadow(event){
if(event.target.className === 'cheked_date'){
    event.target.value = !shadowDate;
    shadowDate = !shadowDate;
    event.target.value == 'true' ? dateCalcForm.style="display: block" : dateCalcForm.style="display: none";
                                                                            
}
if(event.target.className === 'cheked_timer'){
    event.target.value = !shadowTimer;
    shadowTimer = !shadowTimer;
    event.target.value == 'true' ? timesCalcForm.style="display: block" : timesCalcForm.style="display: none", 
                                                                            clearInterval(timesTim),
                                                                            dateCalcResult.innerHTML = 'Date';
}
}
