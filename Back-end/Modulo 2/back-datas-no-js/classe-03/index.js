

function funcionamentoDaLoja (horario) {
    
    if(horario.getHours() >= 8 && horario.getHours() <= 18) {
        if(horario.getHours() === 18 && horario.getMinutes() > 0) {
            return false;
        } else {
        return true;
        }
    } else {
        return false;
    }
}

console.log(funcionamentoDaLoja(new Date(2015,1,1,18)));


