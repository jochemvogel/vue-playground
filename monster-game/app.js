new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
            let dmg = this.calculateDmg(3, 8);
            this.monsterHealth -= dmg;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Monster for ${dmg} damage`
            });
            this.monsterAttack();
            this.checkWin();
        },
        specialAttack() {
            let dmg = this.calculateDmg(10, 20);
            this.monsterHealth -= dmg;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Monster hard for ${dmg} damage`
            });
            this.monsterAttack();
            this.checkWin();
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += Math.max(Math.floor(Math.random() * 10) + 1, 5);
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: `Player heals`
            });
            this.monsterAttack();
            console.log(this.turns.isPlayer);
        },
        giveUp() {
            confirm('You gave up! New Game?') ? this.startGame() : this.gameIsRunning = false;
        },
        monsterAttack() {
            let dmg = this.calculateDmg(3, 10);
            this.playerHealth -= dmg;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits Player for ${dmg} damage`,
            });
            console.log(this.turns.isPlayer);
        },
        calculateDmg(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                confirm('You Won! New Game?') ? this.startGame() : this.gameIsRunning = false;
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                confirm('You Lost! New Game?') ? this.startGame() : this.gameIsRunning = false;
            }
        }
    }
});


