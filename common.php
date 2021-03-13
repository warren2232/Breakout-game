<?php

//Ouputs the header for the page and opening body tag
function outputHeader($title)
{
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="style/style.css">';
    echo '<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">';
    echo '<link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css">';
    
    echo '</head>';
    echo '<body>';
}

function outputBannerNavigation($pageName)
{
    //Output banner and first part of navigation
    echo '<div class="parallax">
        <h1>READY</h1>
        <h2>GET SET</h2>
        <h3>GO!</h3>
      
        </div>';
    echo '<header>';
    
    
    echo '<div class="main">
                <div class="logo">
                <img src="style/logo1.png">
                </div>';
    
    echo '<div class= "menubar">';
    
    //Array of pages to link to
    $linkNames     = array(
        "Ranking",
        "Play",
        "Login",
        "Home",
        "Signout"
    );
    $linkAddresses = array(
        "ranking.php",
        "play.php",
        "login.php",
        "index.php",
        "login.php"
    );
    
    for ($x = 0; $x < count($linkNames); $x++) {
        echo '<a ';
        if ($linkNames[$x] == $pageName) {
            echo 'class="selected" ';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }
    echo '</div>'; //End of menubar 
    echo '</div>'; //End of main
    echo '<h1>Are you up to the challenge?</h1>';
    echo '<h2> This game was created by Warren Leung Show</h2>';
    echo '<h2> M00683018</h2>';
    
    echo '</header>'; //End of header
}

//Outputs closing body tag and closing HTML tag
function outputFooter()
{
    echo '<div class="para">
   <h1> Coursework 1 </h1>
   <h2>CST2120</h2>
        </div>';
    echo ' <footer class="footer-distributed">
 
    <div class="footer-left">

    <h3>Break<span>Skills</span></h3>

    <p class="footer-links">
    <a href="index.php">Home</a>
·
    <a href="login.php">Login</a>
·
    <a href="play.php">Play</a>
·
    <a href="#">About</a>
·
    <a href="#">Faq</a>
·
    <a href="#">Contact</a>
    </p>

    <p class="footer-company-name">Break Skills &copy; 2019</p>
    </div>

    <div class="footer-center">

    <div>
    <i class="fa fa-map-marker"></i>
    <p><span>Coastal Road</span> Flic en Flac, Mauritius</p>
    </div>

    <div>
    <i class="fa fa-phone"></i>
    <p>+230 59325759</p>
    </div>

    <div>
    <i class="fa fa-envelope"></i>
    <p><a href="#">WL454@live.mdx.ac.uk</a></p>
    </div>

    </div>

    <div class="footer-right">

    <p class="footer-company-about">
    <span>About the game</span>
The first ever Breakout game was created and published by Atari,Inc.
    </p>

    <div class="footer-icons">

    <a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
    <a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a>
    <a href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>
    <a href="https://www.github.com"><i class="fa fa-github"></i></a>

    </div>

    </div>

    </footer>';
    echo '</body>';
    echo '</html>';
}