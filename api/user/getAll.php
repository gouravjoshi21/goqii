<?php
require base_path('api/index.php');

// $Purifier->model = require base_path('model/user.php');

use \Core\User;

$UserObj = new User ($db->connection);

$Purifier->model = require base_path('model/user.php');

/********************************************************/

response ([ 'msg' => 'Working perfectly fine!', 'data' => $UserObj->getAll()]);

die();