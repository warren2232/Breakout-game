<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader("Break Skills");
outputBannerNavigation("Home");
?>

    <script src="js/Storage.js"></script>

    <div class="parent">
        <!-- parent -->
        <div class="child">
            <!-- child -->

            <div class="logochild">

                <img src="style/6.png">

            </div>

            <body>
                <!-- form with html validation-->
                <form name="myForm" class="box" action="login.php" method="post">

                    <p>Username</p>
                    <input type="text" name="username" id="Username" required>
                    <br>
                    <p>Password</p>
                    <input type="password" name="password" id="PasswordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
                    <br>
                    <p>Confirm Password</p>
                    <input type="password" name="password1" id="ConfirmPasswordInput">
                    <br>
                    <p>Date of birth</p>
                    <input type="date" id="Dob">
                    <br>
                    <p>Address</p>
                    <input type="text" name="address" minlength="15" id="Address">
                    <br>

                    <button id="registerbt" onclick="call();"> Register</button>
        </div>

        </body>
    </div>

    </div>
    <!-- End of logo child -->

    <!--<form onsubmit="submitForm()" class="box" action="index.html" method="post" name="myform">-->
    </div>
    <!-- end of child -->

    </div>
    <!-- End of parent -->

    <?php
//Output the footer
outputFooter();
?>