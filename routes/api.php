<?php

// AUTHENTICATION
$router->get('/api/v1/', '/api/test.php', true);
$router->post('/api/v1/user', '/api/user/add.php', true);
$router->get('/api/v1/user', '/api/user/getAll.php', true);
// $router->patch('/api/v1/user', '/api/user/update.php', true);