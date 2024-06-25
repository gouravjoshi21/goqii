<?php
require base_path('api/index.php');

$Purifier->model = require base_path('model/user.php');

use \Core\User;

$UserObj = new User ($db->connection);

$Purifier->model = require base_path('model/user.php');

/********************************************************/
$id = $_GET['id'] ?? '';
$Purifier->data = json_decode(json_encode(['id' => $id]));

$arr = ['id'];

$filteredData = $Purifier->processArr($arr);

$UserObj->postData = $filteredData;

if ($UserObj->delete()) {
    response (['code' => 200, 'msg' => "User Deleted successfully!"]);
    die();
}

/********************************************************/
response (['code' => 500, 'msg' => "Something went wrong!"]);
die();