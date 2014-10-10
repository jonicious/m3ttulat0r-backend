<head>
    <link rel="stylesheet" media="only screen and (min-device-width: 992px)" href="styles/desktop.css" type="text/css" />
    <link rel="stylesheet" media="only screen and (min-device-width : 768px) and (max-device-width : 1024px)" href="styles/tablet.css" type="text/css" />
    <link rel="stylesheet" media="only screen and (max-device-width: 720px)" href="styles/phone.css" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<?php

$name = $_POST['name'];
$metHaelften = $_POST['haelften'];

function calculateMet($halfs) {
    $met = $halfs * 67.5;
    return $met;
}

if(is_numeric($metHaelften)&& !empty($name)) {
    $output = $name;
    $output .= "<br>".calculateMet($metHaelften)." g";

    if($metHaelften >= 6) {
        $output .= "Du bist verrückt!";
    }

    echo $output;
}

else {
    header('Location:index.php?error=1');
}
