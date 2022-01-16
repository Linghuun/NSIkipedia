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

        for (let i = 0; i < this.startSize; i++) {
            this.snake.push([i, 0]);
        }

        this.genGrid();
        document.addEventListener("keydown", this.onKeyDown);
    }

    genGrid() {
        var gridTemplate =  " auto".repeat(this.gridSize) + ";";
        this.gridElement.style.cssText += "width:" + this.gridSize*2 + "rem; height:" + this.gridSize*2 + "rem; grid-template-columns:" + gridTemplate + " grid-template-rows: " + gridTemplate;

        for (let i = 0; i < (this.gridSize*this.gridSize); i++) {
            var newGridItem = document.createElement("div");
            newGridItem.id = "grid_item_" + i;
            newGridItem.classList.add("grid-item");
            newGridItem.innerText = i
            this.gridElement.appendChild(newGridItem);
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

const snakeGame = new SnakeGame(1, 5, 5);

function update_function() {
    var x = parseInt(document.getElementById("x_value").value);
    var y = parseInt(document.getElementById("y_value").value);
    var case_id = y*snakeGame.gridSize + x;
    var element = document.getElementById("grid_item_" + case_id);
    element.style.backgroundColor = "red";
}