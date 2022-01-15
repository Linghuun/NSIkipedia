class SnakeGame {
    /**
     * @param {int} startSize  need to be > 1
     * @param {float} speed     in millisecond
     */
    constructor(startSize, speed) {
        this.start_size = startSize;
        this.speed = speed;
        this.snake = [];
        this.snakeGrid = document.getElementById("game_grid");

        for (let i = 0; i < this.startSize; i++) {
            this.snake.push([i, 0]);
        }

        this.genGrid();
        document.addEventListener("keydown", this.onKeyDown);
    }

    genGrid() {
        for (let i = 0; i < 7; i++) {
            var newRow = document.createElement("div");
            newRow.classList.add("grid_row");
            this.snakeGrid.appendChild(newRow);

            for (let j = 0; j < 7; j++) {
                var newColumn = document.createElement("div");
                newColumn.classList.add("grid_column")
                newColumn.innerText = i.toString() + ";" + j.toString();
                this.newRow.appendChild(newColumn);
            }
        }
    }

    onKeyDown(event) {
        switch (event.key) {
            case "ArrowDown":
                alert("arrow down pressed")
                break;
        }
    }

    moveSnake() {
        
    }
    
    start() {
        while (1) {

        }
    }
}

const snakeGame = new SnakeGame(1, 5);