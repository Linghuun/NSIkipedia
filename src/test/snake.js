class SnakeGame {
    /**
     * @param {int} startSize  need to be > 1
     * @param {float} speed    in millisecond
     * @param {int} gridSize   the size of the grid 
     */
    constructor(startSize, speed, gridSize) {
        this.start_size = startSize;
        this.speed = speed;
        this.gridSize = gridSize;

        this.snake = [];
        this.gridElement = document.getElementById("grid");
        this.direction = [1, 0];

        this.x = 0;
        this.y = 0;

        for (let i = 0; i < this.startSize; i++) {
            this.snake.push([i, 0]);
        }

        this.genGrid();
        this.onKeyDown = this.onKeyDown.bind(this);
        document.addEventListener("keydown", this.onKeyDown, false);
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
        this.gridElement.style.cssText += "width:" + this.gridSize*2 + "rem; height:" + this.gridSize*2 + "rem; grid-template-columns:" + gridTemplate + " grid-template-rows: " + gridTemplate;
        console.log("generate_grid");
        for (let i = 0; i < (this.gridSize*this.gridSize); i++) {
            var newGridItem = document.createElement("div");
            newGridItem.id = "grid_item_" + i;
            newGridItem.classList.add("grid-item");
            newGridItem.innerText = i
            this.gridElement.appendChild(newGridItem);
        }
    }

    moveSnake() {
        var lastPosition = this.getGridElement(this.x, this.y);
        if (lastPosition != null) {
            lastPosition.style.backgroundColor = "white";
        }

        this.x += this.direction[0];
        this.y += this.direction[1];

        var newPosition = this.getGridElement(this.x, this.y);
        if (newPosition != null) {
            newPosition.style.backgroundColor = "green";
        }
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
        var case_id = y*snakeGame.gridSize + x;
        var element = document.getElementById("grid_item_" + case_id);

        return element;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const snakeGame = new SnakeGame(1, 250, 21);