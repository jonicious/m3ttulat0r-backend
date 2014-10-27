<?php
/**
 * Created by PhpStorm.
 * User: Jonah
 * Date: 10/10/2014
 * Time: 09:21
 */

?>

<head>
    <link rel="stylesheet" media="only screen and (min-device-width: 992px)" href="styles/desktop.css" type="text/css" />
    <link rel="stylesheet" media="only screen and (min-device-width : 768px) and (max-device-width : 1024px)" href="styles/tablet.css" type="text/css" />
    <link rel="stylesheet" media="only screen and (max-device-width: 720px)" href="styles/phone.css" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body>
<div id="header">
<?php
    try {
        if($_GET['error'] == 1){
            echo "<a>Missing Fields</a>";
        }
    }

    catch(Exception $e){}
    ?>
</div>
<div id="content">
<form action="process.php" method="post">
    <p>User ID</p>
    <input name="name" type="text" />
    <p>Haelften</p>
    <input name="haelften" type="number" />
    <input type="submit" value="submit" />
</form>
</div>
</body>