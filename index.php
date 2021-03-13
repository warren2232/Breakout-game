<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("Break Skills");
outputBannerNavigation("Home");
?>

    <div class="parent">
        <!-- parent which contains the background-->
        <div class="child">
            <div class="logochild">
                <img src="style/6.png">
            </div>
            <!-- End of logo child -->
            <div class="playbuttom">
                <img src="style/play.png">
                <ul>
                    <li><a href="login.php">Play</a></li>
                </ul>
            </div>
            <!-- End of playbutton -->
        </div>
        <!-- End of child -->
    </div>
    <!-- End of parent -->

    </div>

    <?php
//Output the footer
outputFooter();
?>