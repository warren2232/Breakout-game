// SELECT CANVAS ELEMENT
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d"); //methods and properties (drawing)

// ADD BORDER TO CANVAS
cvs.style.border = "3px solid white";

// THICK LINE
ctx.lineWidth = 3;

// DECLARATION VARIABLE AND CONS
//PADDLE
const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50; //height of paddle off the ground
const PADDLE_HEIGHT = 20;
//BALL
const BALL_RADIUS = 8;
let LIFE = 3; // PLAYER HAS 3 LIVES
let SCORE = 0;
const SCORE_UNIT = 10;
let LEVEL = 1;
const MAX_LEVEL = 3;
let GAME_OVER = false;
let leftArrow = false; //not pressed
let rightArrow = false;

// CREATE THE PADDLE
const paddle = {
    x: cvs.width / 2 - PADDLE_WIDTH / 2, //paddle.x
    y: cvs.height - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM, //paddle.y
    width: PADDLE_WIDTH, //paddle.width
    height: PADDLE_HEIGHT, //paddle.height
    dx: 5 //amount of pixel paddle moves right or left
}

// DRAW PADDLE
function drawPaddle() {
    ctx.fillStyle = "grey";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

    ctx.strokeStyle = "white";
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

//CONTROL LEFT AND RIGHT ARROW KEY
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37) {
        leftArrow = true;
    } else if (event.keyCode == 39) {
        rightArrow = true;
    }
});
document.addEventListener("keyup", function(event) {
    if (event.keyCode == 37) {
        leftArrow = false;
    } else if (event.keyCode == 39) {
        rightArrow = false;
    }
});

// MOVE PADDLE right and left
function movePaddle() {
    if (rightArrow && paddle.x + paddle.width < cvs.width) {
        paddle.x += paddle.dx;
    } else if (leftArrow && paddle.x > 0) { //not go beyond canvas
        paddle.x -= paddle.dx;
    }
}

// CREATE THE BALL
const ball = {
    x: cvs.width / 2,
    y: paddle.y - BALL_RADIUS,
    radius: BALL_RADIUS,
    speed: 4,
    dx: 3 * (Math.random() * 2 - 1),
    dy: -3
}

// DRAW THE BALL
function drawBall() {
    ctx.beginPath();

    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); //start and end angle(360)
    ctx.fillStyle = "white";
    ctx.fill(); // fill cirle

    ctx.strokeStyle = "black";
    ctx.stroke(); //stroke method used to draw circle , only outline

    ctx.closePath();
}

// MOVE THE BALL
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

// BALL AND WALL COLLISION DETECTION
function ballWallCollision() {
    if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
        WALL_HIT.play();
    }

    if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
        WALL_HIT.play();
    }

    if (ball.y + ball.radius > cvs.height) {
        LIFE--; // LOSE LIFE
        LIFE_LOST.play();
        resetBall();
    }
}

// RESET THE BALL
function resetBall() {
    ball.x = cvs.width / 2;
    ball.y = paddle.y - BALL_RADIUS;
    ball.dx = 3 * (Math.random() * 2 - 1); // random number between 3 and - 3 , to change position of wall
    ball.dy = -3; // ball always go up at start
}

// BALL AND PADDLE COLLISION
function ballPaddleCollision() {
    if (ball.x < paddle.x + paddle.width && ball.x > paddle.x && paddle.y < paddle.y + paddle.height && ball.y > paddle.y) {

        // PLAY SOUND
        PADDLE_HIT.play();

        // CHECK WHERE THE BALL HIT THE PADDLE
        let collidePoint = ball.x - (paddle.x + paddle.width / 2);

        // NORMALIZE THE VALUES
        collidePoint = collidePoint / (paddle.width / 2);

        // CALCULATE THE ANGLE OF THE BALL
        let angle = collidePoint * Math.PI / 3;

        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = -ball.speed * Math.cos(angle);
    }
}

// CREATE THE BRICKS
const brick = {
    row: 1,
    column: 8,
    width: 78,
    height: 30,
    offSetLeft: 20,
    offSetTop: 20,
    marginTop: 40,
    fillColor: "white",

}

let bricks = [];

function createBricks() {
    for (let r = 0; r < brick.row; r++) { //create rows
        bricks[r] = [];
        for (let c = 0; c < brick.column; c++) { //create columns
            bricks[r][c] = {
                x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status: true
            }
        }
    }
}

createBricks();

// draw the bricks
function drawBricks() {
    for (let r = 0; r < brick.row; r++) {
        for (let c = 0; c < brick.column; c++) {
            let b = bricks[r][c];
            // if the brick isn't broken
            if (b.status) {
                ctx.fillStyle = brick.fillColor;
                ctx.fillRect(b.x, b.y, brick.width, brick.height);

                ctx.strokeStyle = brick.strokeColor;
                ctx.strokeRect(b.x, b.y, brick.width, brick.height);
            }
        }
    }
}

// ball brick collision
function ballBrickCollision() {
    for (let r = 0; r < brick.row; r++) {
        for (let c = 0; c < brick.column; c++) {
            let b = bricks[r][c];
            // if the brick isn't broken
            if (b.status) {
                if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height) {
                    BRICK_HIT.play();
                    ball.dy = -ball.dy;
                    b.status = false; // the brick is broken
                    SCORE += SCORE_UNIT;
                }
            }
        }
    }
}

// show game stats
function showGameStats(text, textX, textY, img, imgX, imgY) {
    // draw text
    ctx.fillStyle = "#FFF";
    ctx.font = "25px Germania One";
    ctx.fillText(text, textX, textY);

    // draw image
    ctx.drawImage(img, imgX, imgY, width = 25, height = 25);
}

// DRAW FUNCTION
function draw() {
    drawPaddle();

    drawBall();

    drawBricks();

    // SHOW SCORE
    showGameStats(SCORE, 35, 25, SCORE_IMG, 5, 5);
    // SHOW LIVES
    showGameStats(LIFE, cvs.width - 25, 25, LIFE_IMG, cvs.width - 55, 5);
    // SHOW LEVEL
    showGameStats(LEVEL, cvs.width / 2, 25, LEVEL_IMG, cvs.width / 2 - 30, 5);
}

// game over
function gameOver() {
    if (LIFE <= 0) {
        let loggedInUser = sessionStorage.getItem('loggedInUsrUsername'); // GET THE USERNAME OF THE LOGGED IN USER FROM SESSION STORAGE
        var userLoggedIn = localStorage.getItem(loggedInUser); //ALL DATA FROM USER IN LOCAL STORAGE
        userLoggedIn = userLoggedIn ? JSON.parse(userLoggedIn) : {}; //PARSE THE OBJECT FROM LOCAL STORAGE TO AN ARRAY
        let actualScore = userLoggedIn['score']; //GET THE SCORE SAVED IN THE ARRAY FROM LOCAL STORAGE
        if (SCORE > actualScore) { //IF THE SCORE OF THE GAME IS GREATER THAN SAVED SCORE IN LOCAL STORAGE
            userLoggedIn['score'] = SCORE; //VALUE OF SCORE IN ARRAY SAVED WILL BE UPDATED
            localStorage.setItem(loggedInUser, JSON.stringify(userLoggedIn)); //UPDATE THE OBJECT IN LOCAL STORAGE WITH NEW SCORE
        }
        showYouLose();
        GAME_OVER = true;
    }
}

// level up
function levelUp() {
    let isLevelDone = true;

    // check if all the bricks are broken
    for (let r = 0; r < brick.row; r++) {
        for (let c = 0; c < brick.column; c++) {
            isLevelDone = isLevelDone && !bricks[r][c].status;
        }
    }

    if (isLevelDone) {
        if (LEVEL >= MAX_LEVEL) {
            let loggedInUser = sessionStorage.getItem('loggedInUsrUsername'); // GET THE USERNAME OF THE LOGGED IN USER FROM SESSION STORAGE
            var userLoggedIn = localStorage.getItem(loggedInUser); //ALL DATA FROM USER IN LOCAL STORAGE
            userLoggedIn = userLoggedIn ? JSON.parse(userLoggedIn) : {}; //PARSE THE OBJECT FROM LOCAL STORAGE TO AN ARRAY
            let actualScore = userLoggedIn['score']; //GET THE SCORE SAVED IN THE ARRAY FROM LOCAL STORAGE
            if (SCORE > actualScore) { //IF THE SCORE OF THE GAME IS GREATER THAN SAVED SCORE IN LOCAL STORAGE
                userLoggedIn['score'] = SCORE; //VALUE OF SCORE IN ARRAY SAVED WILL BE UPDATED
                localStorage.setItem(loggedInUser, JSON.stringify(userLoggedIn)); //UPDATE THE OBJECT IN LOCAL STORAGE WITH NEW SCORE
            }
            WIN.play();

            showYouWin();
            GAME_OVER = true;
            return;
        }
        brick.row++;
        createBricks();
        ball.speed += 0.5;
        resetBall();
        LEVEL++;
    }
}

// UPDATE GAME FUNCTION
function update() {
    movePaddle();

    moveBall();

    ballWallCollision();

    ballPaddleCollision();

    ballBrickCollision();

    gameOver();

    levelUp();
}

// GAME LOOP
function loop() {
    // CLEAR THE CANVAS
    ctx.drawImage(BG_IMG, 0, 0);

    draw();

    update();

    if (!GAME_OVER) {
        requestAnimationFrame(loop);
    }
}
loop();

// SELECT SOUND ELEMENT
const soundElement = document.getElementById("sound");

soundElement.addEventListener("click", audioManager);

function audioManager() {
    // CHANGE IMAGE SOUND_ON/OFF
    let imgSrc = soundElement.getAttribute("src");
    let SOUND_IMG = imgSrc == "img/SOUND_ON.png" ? "img/SOUND_OFF.png" : "img/SOUND_ON.png";

    soundElement.setAttribute("src", SOUND_IMG);

    // MUTE AND UNMUTE SOUNDS
    WALL_HIT.muted = WALL_HIT.muted ? false : true;
    PADDLE_HIT.muted = PADDLE_HIT.muted ? false : true;
    BRICK_HIT.muted = BRICK_HIT.muted ? false : true;
    WIN.muted = WIN.muted ? false : true;
    LIFE_LOST.muted = LIFE_LOST.muted ? false : true;
}

// SHOW GAME OVER MESSAGE
/* SELECT ELEMENTS */
const gameover = document.getElementById("gameover");
const youwin = document.getElementById("youwin");
const youlose = document.getElementById("youlose");
const restart = document.getElementById("restart");

// CLICK ON PLAY AGAIN BUTTON
restart.addEventListener("click", function() {
    location.reload(); // reload the page
})

// SHOW YOU WIN
function showYouWin() {
    gameover.style.display = "block";
    youwon.style.display = "block";
}

// SHOW YOU LOSE
function showYouLose() {
    gameover.style.display = "block";
    youlose.style.display = "block";
}