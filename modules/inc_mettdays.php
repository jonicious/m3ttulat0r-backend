<?php
function daysUntilMettwoch() {
	
	$todayISOCode = date('N', time()); // Get current day in ISO Format (Numbers from 1 - 7)
	$returnVal = "";
	
	switch($todayISOCode) {
		case 1: 
			$returnVal .= "2";
			break;
		case 2:
			$returnVal .= "1";
			break;
		case 3:
			$returnVal .= "Mettwoch is Today";
			break;
		case 4:
			$returnVal .= "6";
			break;
		case 5:
			$returnVal .= "5";
			break;
		case 6:
			$returnVal .= "4";
			break;
		case 7:
			$returnVal .= "3";
			break;
	}
	
	return $returnVal;
}