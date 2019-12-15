<?php

namespace App;

use App\Traits\HasPermissions;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    use HasPermissions;

    public  function permissions(){
        return $this->belongsToMany(Permission::class,'rols_permissions');
    }

    public function  hasPermissionTo(...$permissions){
        //$user->hasPermission('edit-user',...)
        return $this->permissions()
                ->whereIn('slug',$permissions)->count();

    }

    public function scopeDeveloper($query){
        return $query->where('slug','developer');
    }

    public function scopeAdmin($query){
        return $query->where('slug','admin');
    }
}
