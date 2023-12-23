const game = {
    secretNumber: 0,
    userAttempts: 0,
    maxAttempts: 3,

    start() {
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
        this.askUser();
        this.logger();
    },

    askUser() {
        this.userAttempts++;
        const userGuess = prompt(`Угадай число от 1 до 100 (попытка ${this.userAttempts} из ${this.maxAttempts}):`);

        if (userGuess === null) {
            alert("Игра окончена.");
            return;
        }

        if (isNaN(userGuess)) {
            alert("Введи число!");
            this.askUser();
            return;
        }

        const guess = parseInt(userGuess);

        if (guess === this.secretNumber) {
            alert("Поздравляю, Вы угадали!!!");
        } else if (guess > this.secretNumber) {
            alert("Загаданное число меньше");
            if (this.userAttempts < this.maxAttempts) {
                this.askUser();
            }
        } else {
            alert("Загаданное число больше");
            if (this.userAttempts < this.maxAttempts) {
                this.askUser();
            }
        }
    },

    logger() {
        console.log("Состояние объекта game:");

        for (const property in this) {
            if (typeof this[property] !== "function") {
                console.log(`${property}: ${this[property]}`);
            }
        }
    }
};

game.start();