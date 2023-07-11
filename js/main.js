//EJERCICIOS CONTROL FLOW
//https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow



//EJERCICIO 1
function businessHour(dayNumber, hourNumber){
    if (dayNumber != 6 && dayNumber != 0){
        if (hourNumber >= 9 && hourNumber <= 18){
            return true;
        } else{
            return false;
        }
    } else{
        return false;
    }
}



//EJERCICIO 2
function getDayNumber(janFirstDayNumber, yearDayNumber){
    dayOfWeek = (yearDayNumber + janFirstDayNumber- 1) % 7;
    return dayOfWeek;
}



//EJERCIIO 3
function bussinessHourBoosted(yearDayNumber, hourNumber){
    let dayNumber = getDayNumber(0, yearDayNumber);
    return businessHour(dayNumber, hourNumber);
}

//RETO
function bussinessHourActualDate(){
    let date = new Date();
    let dayNumber = date.getDay();
    let hourNumber = date.getHours();
    return businessHour(dayNumber, hourNumber);
}