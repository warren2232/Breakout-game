<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("Break Skills");
outputBannerNavigation("Login");
?>
    <script src="js/Login.js"></script>
    <div class="parent">
        <!-- parent -->
        <div class="child">
            <!-- child -->

            <div class="logochild">
                <img src="style/6.png">
            </div>

            <form id="loginPara" class="box" action="play.php" method="post">
                <h1> LOGIN</h1>
                <div id="loginpara">
                    <p> Username</p>
                    <input type="text" id="UsernameInput">
                    <br>
                    <p> password</p>
                    <input type="password" id="PasswordInput">
                    <br>
                    <button onclick="return login();">Login</button>
                    <label class="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
                        <a href="sign up.php">Sign up!</a>
                    </label>

                    <a href="play.php">Play as guest</a>
                    <a href="#" id="forgot">Forgot password?</a>
                </div>
                <p id="loginFailure" style="color:red;"></p>
            </form>

        </div>
        <!-- end of child -->

    </div>
    <!-- End of parent -->

    <?php
//Output the footer
outputFooter();
?>
