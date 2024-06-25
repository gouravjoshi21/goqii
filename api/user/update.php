<?php
require base_path('api/index.php');

// $Purifier->model = require base_path('model/user.php');

use \Core\User;

$UserObj = new User ($db->connection);

$Purifier->model = require base_path('model/user.php');

/********************************************************/
$arr = ['id', 'name', 'dob'];

$filteredData = $Purifier->processArr($arr);

$UserObj->postData = $filteredData;

if (empty($UserObj->getBy())) {
    response (['code' => 301, 'msg' => "User not found!"]);
    die();
}

if ($UserObj->update()) {
    response ([
        'msg' => 'User Updated Successfully!'
    ]);
    
    die();
}
    

/********************************************************/
response (['code' => 500, 'msg' => "Something went wrong!"]);
die();