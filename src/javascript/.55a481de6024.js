class SnakeGame {
    appleColor = "red";
    snakeColor = "green";
    void = "#00000000";
    /**
     * @param {float} speed    in millisecond
     * @param {int} gridSize   the size of the grid 
     */
    constructor(speed, gridSize) {
        this.speed = speed;
        this.gridSize = gridSize;
        this.gridElement = document.getElementById("grid");
        this.lengthElement = document.getElementById("snake_length");

        this.genGame();
        this.start();
    }


    genGame() {
        this.die = false;

        this.snake = [[this.gridSize / 2, this.gridSize / 2]];
        this.direction = [1, 0];

        this.genGrid();
        this.onKeyDown = this.onKeyDown.bind(this);
        document.addEventListener("keydown", this.onKeyDown, false);
        this.genApple();
    }

    async start() {
        while (1) {
            await this.sleep(this.speed);
            this.moveSnake();
        }
    }


    genGrid() {
        var gridTemplate =  " auto".repeat(this.gridSize) + ";";
        this.gridElement.style.cssText += "width:" + (this.gridSize + (2*50) / 16) + "rem; height:" + (this.gridSize + (2*50) / 16) + "rem; grid-template-columns:" + gridTemplate + " grid-template-rows: " + gridTemplate;
        for (let i = 0; i < (this.gridSize*this.gridSize); i++) {
            var newGridItem = document.createElement("div");
            newGridItem.id = "grid_item_" + i;
            newGridItem.classList.add("grid-item");
            // newGridItem.innerText = i;
            this.gridElement.appendChild(newGridItem);
        }
    }

    restartGame() {
        this.gridElement.innerHTML = "";
        this.genGame();
    }

    moveSnake() {
        var newX = this.snake[this.snake.length-1][0] + this.direction[0];
        var newY = this.snake[this.snake.length-1][1] + this.direction[1];

        console.log(newX);

        if (newX >= this.gridSize || newY >= this.gridSize || newX < 0 || newY < 0) {
            this.snakeDied();
            return;
        }
        
        this.snake.push([
            newX,
            newY
        ]);
        
        var lastPart = this.getGridElement(this.snake[0][0], this.snake[0][1]);
        var newPart = this.getGridElement(newX, newY);

        if (newPart.style.backgroundColor == this.appleColor) {
            this.genApple();
            this.lengthElement.innerText = this.lengthElement.innerText.replace(this.lengthElement.innerText.split(":")[1], " " + this.snake.length);
        } else if (newPart.style.backgroundColor == this.snakeColor) {
            this.snakeDied();
        } else {
            this.snake.shift();
            lastPart.style.backgroundColor = this.void;
        }
        newPart.style.backgroundColor = this.snakeColor;
        
    }


    onKeyDown(event) {
        switch (event.key) {
            case "ArrowDown":
                this.direction = [0, 1];
                break;
            case "ArrowUp":
                this.direction = [0, -1];
                break;
            case "ArrowRight":
                this.direction = [1, 0];
                break;
            case "ArrowLeft":
                this.direction = [-1, 0];
                break;
        }
    }
    

    getGridElement(x, y) {
        var case_id = y*this.gridSize + x;
        var element = document.getElementById("grid_item_" + case_id);
        return element;
    }


    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    genApple() {
        var appleX = Math.floor(Math.random() * this.gridSize);
        var appleY = Math.floor(Math.random() * this.gridSize);

        var gridItem = this.getGridElement(appleX, appleY);
        if (gridItem != null) {
            if (gridItem.style.backgroundColor == this.snakeColor) {
                this.genApple();
            } else {
                gridItem.style.backgroundColor = this.appleColor;
            }
        }
    }

    snakeDied() {
        if (!this.die) {
            this.die = true;
            if (this.snake.length == this.gridSize*this.gridSize) {
                if (confirm('Tu as gagné, choisi "OK" si tu veux recommencer')) {
                    this.restartGame();
                }
            } else if (confirm('Tu es mort, choisi "OK" si tu veux recommencer')) {
                this.restartGame();
            }
        }
    }
}

var snakeGame = new SnakeGame(75, 30);