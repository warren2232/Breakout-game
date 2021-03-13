<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("Break Skills");
outputBannerNavigation("Play");
?>

    <div class="parent">
        <div class="child">
            <div class="logochild">
                <img src="style/6.png">
            </div>
            <!-- End of logo child -->
            <div class="sound">
                <img src="img/SOUND_ON.png" alt="" id="sound">
            </div>

            <div id="gameover">
                <img src="img/youwon.png" alt="" id="youwon">
                <img src="img/gameover.png" alt="" id="youlose">
                <div id="restart">Play Again!</div>
            </div>

            <canvas id="breakout" width="800" height="700"></canvas>

            <script src="js/components.js"></script>
            <script src="js/game.js"></script>

        </div>
    </div>
    <!-- End of parent -->

    <?php
//Output the footer
outputFooter();
?>