
const timer = (elemId, deadLine, headerEl) => {

    const changeDate = (deadLine, headerEl) => {
        let el = document.querySelector(headerEl);
        el.textContent = 'Remaining to  ' + new Date(deadLine);
    }


    const addZero = (num) => {
        if (num <= 9){
            return '0'+num
        }else {
            return num
        }
    }


        const getTimeRemaining = (endTime) => {
            const t = Date.parse(endTime) - Date.parse(new Date());
            let seconds = Math.floor((t/1000)%60);
            let minutes = Math.floor((t/1000/60) %60);
            let hours = Math.floor((t/(1000*60*60)) % 24);
            let days = Math.floor((t/(1000*60*60*24)) );

            return {
                't':t,
                'days':days,
                'hours':hours,
                'minutes':minutes,
                'seconds':seconds
            }
        };

        const setClock = (selector, endTime) => {
            let timer = document.querySelector(selector);
               let days = timer.querySelector('#days');
               let hours = timer.querySelector('#hours');
               let minutes = timer.querySelector('#minutes');
              let  seconds = timer.querySelector('#seconds');
               let timeInterval = setInterval(updateClock, 1000);

               updateClock();

                function updateClock() {
                    const t = getTimeRemaining(endTime);

                    days.textContent = addZero(t.days);
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);

                    if (t.t <= 0 ) {
                        days.textContent = "00";
                        hours.textContent = "00";
                        minutes.textContent = "00";
                        seconds.textContent = "00";
                        clearInterval(timeInterval)
                    }else if (t.t <= 300000) {
                        days.style.color = "red";
                        hours.style.color = "red";
                        minutes.style.color = "red";
                        seconds.style.color = "red";
                    };
                }
        };
        changeDate(deadLine,headerEl)
    setClock(elemId, deadLine, headerEl)
};

//ЗДЕСЬ УСТАНОВИТЬ ВРЕМЯ желаемой даты, до которой ведем отсчет. Вторая и третья дата - с часами/секундами/миллисекундами
let deadLine1 = '2020-07-07T22:05:53.363+03:00';
let deadLine2 = '2020-06-20T18:22:35.417+03:00';
let deadLine3 = '2020-09-05T17:40:22.311+03:00';

timer('#container1', deadLine1, '.dateTo1')
timer('#container2', deadLine2, '.dateTo2')
timer('#container3', deadLine3, '.dateTo3')

