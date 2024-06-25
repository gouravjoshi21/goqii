<?php

return [
    "id" => [
        "name" => "Id",
        "sql" => "id",
        "type" => 'int'
    ],
    "name" => [
        "name" => "Name",
        "sql" => "name",
        "type" => 'string',
        "lwCase" => true,
    ],
    "email" => [
        "name" => "Email",
        "sql" => "email",
        "type" => 'email',
        "lwCase" => true
    ],
    "password" => [
        "name" => "Password",
        "sql" => "password",
        "type" => 'password',
        "valMsg" => 'Password must be 8-12 characters'
    ],
    "dob" => array(
        "name" => "Date of birth",
        "sql" => "dob",
        "type" => 'date'
    ),
];