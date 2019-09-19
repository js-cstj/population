<?php
header("content-type: application/json");
header("Access-Control-Allow-Origin: *");
// initialisation de la session
$ch = curl_init();

// configuration des options
$url = "https://www.chucknorrisfacts.fr/api/get";
if ($_SERVER['QUERY_STRING']) {
	$url .= $_SERVER['QUERY_STRING'];
}
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);

// exécution de la session
curl_exec($ch);

// fermeture des ressources
curl_close($ch);

// var_dump($_SERVER);
// echo file_get_contents("https://www.chucknorrisfacts.fr/api/get");