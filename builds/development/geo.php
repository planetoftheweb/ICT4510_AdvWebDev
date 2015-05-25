<?php

	if (!isset($_GET) || empty($_GET['address']) || empty($_GET['city']) || empty($_GET['state'])) {
		return header("HTTP/1.1 404 Not Found");
	}

	$address = strip_tags(trim($_GET['address']));
	$city = strip_tags(trim($_GET['city']));
	$state = strip_tags(trim($_GET['state']));

	$apiUrl = 'http://geocoder.us/service/csv/?address=';
	$request = $apiUrl . rawurlencode($address . ' ' . $city . ' ' . $state);
	$response = file_get_contents($request);
	$data = explode(',', $response);

	header("Content-type: application/json");
	echo json_encode($data);

?>
