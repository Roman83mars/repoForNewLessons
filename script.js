'use strict'

const randomNumberBot = function (numberFromUser) {

    const f2 = function () {
        let randomNumber = 10
        // const randomNumber = Math.ceil(Math.random() * 100)
        let cancelFromUser = prompt('Угадай число от 1 до 100')
        let numberFromUser = +cancelFromUser

        if (numberFromUser === randomNumber) {
            return alert('Поздравляю, Вы угадали!!!')
        } else if (cancelFromUser === null) {
            return alert('Игра окончена')
        } else if (numberFromUser > randomNumber) {
            return alert('Загаданное число меньше'), f2()
        } else if (numberFromUser < randomNumber) {
            return alert('Загаданное число больше'), f2()
        } else if (isNaN(numberFromUser) !== false) {
            return alert('Введи число!'), f2()
        } else {
            f2()
        }



    }

    f2()

}

randomNumberBot()