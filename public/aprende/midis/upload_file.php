<?php


// Config
$uploadBase = "";

$uploadFilename = time() . ".mid";
//$uploadFilename = "testiando.mid";
$uploadPath = $uploadBase . $uploadFilename;


// Upload directory
if(!is_dir($uploadBase))
	mkdir($uploadBase);

// Grab the data
$incomingData = file_get_contents('php://input');

// Valid data?
if(!$incomingData)
	die("No input data");

// Write to disk
$fh = fopen($uploadPath, 'w') or die("Error opening file");
fwrite($fh, $incomingData) or die("Error writing to file");
fclose($fh) or die("Error closing file");

echo $uploadFilename ;
echo "hello covas2" ; 

?>