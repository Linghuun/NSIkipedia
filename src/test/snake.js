class SnakeGame {
    /**
     * @param {int} start_size  need to be > 1
     * @param {float} speed     in millisecond
     */
    constructor(start_size, speed) {
        this.start_size = start_size;
        this.speed = speed;

        document.addEventListener("keydown", this.onKeyDown);
    }

    onKeyDown(event) {
        if(event.keyCode == 37) {
            alert('Left was pressed');
        }
        else if(event.keyCode == 39) {
            alert('Right was pressed');
        }
    }

    moveSnake() {
        
    }


}

const snakeGame = new SnakeGame(1);
alert("qsd")