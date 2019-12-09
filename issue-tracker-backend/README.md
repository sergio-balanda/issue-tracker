<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel


* crear proyecto laravel y vue create issue-tracker-front
* vue router, vuex, babel, linter
* si suge un error en los get del fron agregar a laravel 
    https://github.com/barryvdh/laravel-cors
    * composer require barryvdh/laravel-cors
    * kernel.php \Barryvdh\Cors\HandleCors::class,
    *   php artisan vendor:publish --provider="Barryvdh\Cors\ServiceProvider"
    * en config cors.php agregar en 'allowedOrigins' => ['http://localhost:8080'], seria la url del front
    * en get del front enviar mode: 'cors'
* instalar passport
* composer require laravel/passport
* php artisan migrate
* php artisan passport:install
* en el modelo de usuario use Laravel\Passport\HasApiTokens; use HasApiTokens
* registrar en AuthServiceProvider en boot Passport::routes(); import use Laravel\Passport\Passport;
* config auth.php api driver => passport
* npm install axios --save
    * import axios from 'axios'
    * Vue.prototype.$http = axios;
    * this.$http.get


