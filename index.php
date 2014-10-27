<?php
// Includes
include 'modules/inc_mettdays.php';
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
if(!empty($_GET['error']) == 1){
	echo "<a>Missing Fields</a>";
}
?>
</div>
<div id="content">
<form action="process.php" method="post">
    <input name="name" type="text" placeholder="Username" />
    <input name="haelften" type="number" placeholder="How many Halves?"	 />
    <input type="submit" value="submit" />
</form>
<hr>
Days until Mettwoch: <b><?php echo daysUntilMettwoch() ?></b>
</div>
</body>