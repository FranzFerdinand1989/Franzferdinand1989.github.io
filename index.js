function STP() {
    let spisok = [
        ['первый вопрос', 'верный ответ 1', 'верный ответ 1', 'неверный ответ 1.1', 'неверный ответ 1.2', 'неверный ответ 1.3'],
        ['второй вопрос', 'верный ответ 2', 'верный ответ 2', 'неверный ответ 2.1', 'неверный ответ 2.2', 'неверный ответ 2.3'],
        ['третий вопрос', 'верный ответ 3', 'верный ответ 3', 'неверный ответ 3.1', 'неверный ответ 3.2', 'неверный ответ 3.3'],
        ['четвертый вопрос', 'верный ответ 4', 'верный ответ 4', 'неверный ответ 4.1', 'неверный ответ 4.2', 'неверный ответ 4.3'],
    ];
    let voprtext = document.getElementById('voprText');
    let o1 = document.getElementById('o1');
    let o2 = document.getElementById('o2');
    let o3 = document.getElementById('o3');
    let o4 = document.getElementById('o4');
    let buttonDalee = document.getElementById('dalee');
    let buttonstart = document.getElementById('start');
    let counterVO = 0;
    let counterNO = 0;

    //Работа с выпадающим списком
    /* let selector = document.getElementById('selectID').value;
    let selectorField = document.getElementById('selectID');
    console.log(selector); */
    // Начало вставки
    buttonDalee.hidden = true;
    voprtext.hidden = true;
    o1.hidden = true;
    o2.hidden = true;
    o3.hidden = true;
    o4.hidden = true;

    function Randomize() {
        let randNumber = Math.floor(Math.random() * spisok.length);
        return randNumber;
    }
    // sozdatVopros выбирает случайный вопрос и случайным образом располагает варианты ответа на кнопках
    function sozdatVopros() {
        /*     selectorField.hidden = true; */
        buttonDalee.hidden = true;
        ListenerOn();
        let arr = [2, 3, 4, 5];
        r1 = Math.floor(Math.random() * arr.length);
        a1 = arr[r1];
        arr.splice(r1, 1);
        console.log(arr, ' ', arr[r1], ' ', a1);
        r2 = Math.floor(Math.random() * arr.length);
        a2 = arr[r2];
        arr.splice(r2, 1);
        console.log(arr, ' ', arr[r2], ' ', a2);
        r3 = Math.floor(Math.random() * arr.length);
        a3 = arr[r3];
        arr.splice(r3, 1);
        console.log(arr, ' ', a1, ' ', a2, ' ', a3);
        r4 = Math.floor(Math.random() * arr.length);
        a4 = arr[r4];
        arr.splice(r4, 1);
        console.log(arr, ' ', a1, ' ', a2, ' ', a3, ' ', a4);
        i = Randomize();
        /* console.log(arr,' ',a1, ' ', a2, ' ', a3, ' ', a4); */
        if (spisok.length > 0) {
            voprtext.textContent = spisok[i][0];
            o1.textContent = spisok[i][a1];
            o2.textContent = spisok[i][a2];
            o3.textContent = spisok[i][a3];
            o4.textContent = spisok[i][a4];
        }
        else {
            voprtext.textContent = `Тест окончен! Вы ответили верно на ${counterVO} вопросов из ${counterVO + counterNO}.`;
            o1.hidden = true;
            o2.hidden = true;
            o3.hidden = true;
            o4.hidden = true;
            buttonDalee.hidden = true;
        };
    };

    let func1MouseOver = function () {
        o1.style.backgroundColor = 'orange';
        ;
    }
    let func1MouseOut = function () {
        o1.style.backgroundColor = 'rgb(0, 217, 255)';
    };
    let func2MouseOver = function () {
        o2.style.backgroundColor = 'orange';
        ;
    }
    let func2MouseOut = function () {
        o2.style.backgroundColor = 'rgb(0, 217, 255)';
    }; let func3MouseOver = function () {
        o3.style.backgroundColor = 'orange';
        ;
    }
    let func3MouseOut = function () {
        o3.style.backgroundColor = 'rgb(0, 217, 255)';
    }; let func4MouseOver = function () {
        o4.style.backgroundColor = 'orange';
        ;
    }
    let func4MouseOut = function () {
        o4.style.backgroundColor = 'rgb(0, 217, 255)';
    };

    function ListenerOn() {
        o1.addEventListener('mouseover', func1MouseOver),
            o1.addEventListener('mouseout', func1MouseOut),
            o2.addEventListener('mouseover', func2MouseOver),
            o2.addEventListener('mouseout', func2MouseOut),
            o3.addEventListener('mouseover', func3MouseOver),
            o3.addEventListener('mouseout', func3MouseOut),
            o4.addEventListener('mouseover', func4MouseOver),
            o4.addEventListener('mouseout', func4MouseOut)
    }

    function ListenerOff() {
        o1.removeEventListener('mouseover', func1MouseOver),
            o1.removeEventListener('mouseout', func1MouseOut),
            o2.removeEventListener('mouseover', func2MouseOver),
            o2.removeEventListener('mouseout', func2MouseOut),
            o3.removeEventListener('mouseover', func3MouseOver),
            o3.removeEventListener('mouseout', func3MouseOut),
            o4.removeEventListener('mouseover', func4MouseOver),
            o4.removeEventListener('mouseout', func4MouseOut)
    }
    function DisableButtons() {
        o1.disabled = true;
        o2.disabled = true;
        o3.disabled = true;
        o4.disabled = true;
    }
    /* Включает кнопки и возвращает окраску */
    function EnableButtons() {
        o1.disabled = false;
        o2.disabled = false;
        o3.disabled = false;
        o4.disabled = false;
        o1.style.backgroundColor = 'rgb(0, 217, 255)';
        o2.style.backgroundColor = 'rgb(0, 217, 255)';
        o3.style.backgroundColor = 'rgb(0, 217, 255)';
        o4.style.backgroundColor = 'rgb(0, 217, 255)';
    }
    /* Первый запуск */
    buttonstart.addEventListener('click', function () {
        sozdatVopros();
        voprtext.hidden = false;
        o1.hidden = false;
        o2.hidden = false;
        o3.hidden = false;
        o4.hidden = false;
        buttonstart.hidden = true;
        ButtonClick();
    })

    function ButtonClick() {
        ListenerOn();

        o1.addEventListener('click', function () {
            ListenerOff();
            if (o1.textContent === spisok[i][1]) {
                counterVO = counterVO + 1;
                buttonDalee.hidden = false;
                o1.style.backgroundColor = 'green';
            } else {
                counterNO = counterNO + 1;
                buttonDalee.hidden = false;
                o1.style.backgroundColor = 'red';
            }
            DisableButtons();
            console.log(o1.textContent, ' ', spisok[i][1]);
            console.log('Верных ответов: ', counterVO, ' Неверных ответов: ', counterNO);
            console.log(ListenerOff);
            spisok.splice(i, 1);
        },
            o2.addEventListener('click', function () {
                ListenerOff();
                if (o2.textContent === spisok[i][1]) {
                    counterVO = counterVO + 1;
                    buttonDalee.hidden = false;
                    o2.style.backgroundColor = 'green';
                } else {
                    counterNO = counterNO + 1;
                    buttonDalee.hidden = false;
                    o2.style.backgroundColor = 'red';
                }
                DisableButtons();
                console.log(o2.textContent, ' ', spisok[i][1]);
                console.log('Верных ответов: ', counterVO, ' Неверных ответов: ', counterNO);
                spisok.splice(i, 1);
            }
            ),
            o3.addEventListener('click', function () {
                ListenerOff();
                if (o3.textContent === spisok[i][1]) {
                    counterVO = counterVO + 1;
                    buttonDalee.hidden = false;
                    o3.style.backgroundColor = 'green';
                } else {
                    counterNO = counterNO + 1;
                    buttonDalee.hidden = false;
                    o3.style.backgroundColor = 'red';
                }
                DisableButtons();
                console.log(o3.textContent, ' ', spisok[i][1]);
                console.log('Верных ответов: ', counterVO, ' Неверных ответов: ', counterNO);
                spisok.splice(i, 1);
            }
            ),
            o4.addEventListener('click', function () {
                ListenerOff();
                if (o4.textContent === spisok[i][1]) {
                    counterVO = counterVO + 1;
                    buttonDalee.hidden = false;
                    o4.style.backgroundColor = 'green';
                } else {
                    counterNO = counterNO + 1;
                    buttonDalee.hidden = false;
                    o4.style.backgroundColor = 'red';
                }
                DisableButtons();
                console.log(o4.textContent, ' ', spisok[i][1]);
                console.log('Верных ответов: ', counterVO, ' Неверных ответов: ', counterNO);
                spisok.splice(i, 1);
            },

            ),
        )
    }

    buttonDalee.addEventListener('click', function () {
        sozdatVopros();
        EnableButtons();
    })
};
STP();
