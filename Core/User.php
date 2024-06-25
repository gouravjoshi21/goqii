<?php
namespace Core;

use \Core\Model;
use Exception;

class User extends Model {
    public $fields = [
        'create' => ['name', 'email', 'password', 'dob'],
        'update' => ['password', 'token', 'date', 'passwordChangedAt'],
        'gets' => ['id', 'name', 'email'],
        'get' => ['id', 'name', 'email','password', 'dob']
    ];

    public $learnStatsTbl = 'learnstats';

    public function __construct ($conn) {
        parent::__construct($conn);

        $this->tbName = 'user';

        $this->model = require base_path('model/user.php'); 
    }

    public function forgetPassword () {
        $this->postData['token'] = bin2hex(random_bytes(50));

        $this->postData['date'] = $this->getCurrUtcTime (60*60);

        $this->fields['update'] = ['token', 'date'];

        if ($this->update()) return true;

        return false;
    }

    public function resetPassword () {
        $this->postData['date'] = $this->getCurrUtcTime();


        $this->fields['get'] = ['token', 'date'];

        $this->field = 'get';

        $data = $this->query("SELECT id from {$this->tbName} WHERE passwordResetToken = :token AND :date < passwordResetExpires")->fetch();

        if (empty($data)) {
            response (['code' => 400, 'msg' => 'Your token is invalid or expired!']);
            die();
        }

        $this->postData['token'] = '';
        $this->postData['date'] = '';
        $this->postData['id'] = $data['id'];
        $this->postData['passwordChangedAt'] = $this->getCurrUtcTime();

        if ($this->update()) {
            return true;
        }
        
        return false;
    }
}
