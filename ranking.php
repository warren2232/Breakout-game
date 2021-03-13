<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("Break Skills");
outputBannerNavigation("Home");
?>

    <div class="parent">
        <!-- parent -->
        <div class="child">
            <!-- child -->
            <div class="logochild">
                <img src="style/6.png">
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

            <script src="js/ranking.js"></script>
        </div>
        <!-- End of child -->
    </div>
    <!-- End of parent -->

    <?php
//Output the footer
outputFooter();
?>