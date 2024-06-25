<?php
require base_path('api/index.php');

// $Purifier->model = require base_path('model/user.php');

use \Core\User;

$UserObj = new User ($db->connection);

$Purifier->model = require base_path('model/user.php');

/********************************************************/
$arr = ['name', 'email', 'password', 'dob'];

$filteredData = $Purifier->processArr($arr);

/* Check Email id already exists or not */
$UserObj->postData = $filteredData;

if (!empty($UserObj->getBy('email'))) { response (['code' => 400, 'msg' => 'Email id is already in use!']); die();}

/* Create Account */
$id = $UserObj->create();

if (empty($id)) throw new Exception ("Something went wrong! Please try again.");

response ([ 'msg' => 'User Created successfully!', 'data' => array(
    "id" => $id,
    "name" => $filteredData['name'],
    "email" => $filteredData['email'],
    "dob" => $filteredData['dob'],
)]);

die();