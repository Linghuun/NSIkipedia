class SnakeGame {
    appleColor = "red";
    snakeColor = "green";
    void = "#00000000";
    /**
     * @param {int} startSize  need to be > 1
     * @param {float} speed    in millisecond
     * @param {int} gridSize   the size of the grid 
     */
    constructor(startSize, speed, gridSize) {
        this.start_size = startSize;
        this.speed = speed;
        this.gridSize = gridSize;

        this.snake = [[5, 5]];
        this.gridElement = document.getElementById("grid");
        this.direction = [1, 0];

        for (let i = 0; i < this.startSize; i++) {
            this.snake.push([i, 0]);
        }

        this.genGrid();
        this.onKeyDown = this.onKeyDown.bind(this);
        document.addEventListener("keydown", this.onKeyDown, false);
        this.genApple();
        this.start();
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
        console.log("generate_grid");
        for (let i = 0; i < (this.gridSize*this.gridSize); i++) {
            var newGridItem = document.createElement("div");
            newGridItem.id = "grid_item_" + i;
            newGridItem.classList.add("grid-item");
            // newGridItem.innerText = i
            this.gridElement.appendChild(newGridItem);
        }
    }

    moveSnake() {
        var newX = this.snake[this.snake.length-1][0] + this.direction[0];
        var newY = this.snake[this.snake.length-1][1] + this.direction[1];

        if (newX > this.gridSize || newY > this.gridSize || newX < 0 || newY < 0) {
            this.die();
        }

        this.snake.push([
            newX,
            newY
        ]);
        
        var lastPart = this.getGridElement(this.snake[0][0], this.snake[0][1]);
        var newPart = this.getGridElement(newX, newY);

        if (newPart.style.backgroundColor != this.appleColor) {
            this.snake.shift();
            lastPart.style.backgroundColor = this.void;
        } else {
            this.genApple();
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
            gridItem.style.backgroundColor = this.appleColor;
        }
    }

    die() {
        alert("die");
    }
}

const snakeGame = new SnakeGame(1, 100, 50);