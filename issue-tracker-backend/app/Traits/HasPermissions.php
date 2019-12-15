<?php

namespace App\Traits;
use App\Permission;

trait HasPermissions{
    public function  hasPermissionTo(...$permissions){
        //$user->hasPermission('edit-user',...)
        return $this->permissions()
                ->whereIn('slug',$permissions)->count() ||
            $this->rols()->whereHas('permissions', function ($q) use ($permissions){
                $q->whereIn('slug',$permissions);
            })->count();
    }

    private function getPermissionsIdsBySlug($permissions){
        return $permissionsIds = Permission::whereIn('slug',$permissions)
            ->get()->pluck('id')->toArray();
    }

    public function  givePermissionTo(...$permissions){
        $this->permissions()->attach($this->getPermissionsIdsBySlug($permissions));
    }

    public function  setPermissions(...$permissions){
        $this->permissions()->sync($this->getPermissionsIdsBySlug($permissions));
    }

    public function  detachPermission(...$permissions){
        $this->permissions()->detach($this->getPermissionsIdsBySlug($permissions));
    }
}
