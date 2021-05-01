function taAberto (horario) {
    if(horario.getHours() < 8 || horario.getHours() > 18) {
        return false;
    }
    if(horario.getHours() === 18 && horario.getMinutes() > 0) {
        return false;
    }
    if(horario.getDay() === 0 || horario.getDay() === 6) {
        return false;
    }
    return true;
}

console.log(taAberto(new Date(2021,3,26,18)));

