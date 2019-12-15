<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    public function rols(){
        return $this->belongsToMany(Rol::class, 'rols_permissions');
    }
}
