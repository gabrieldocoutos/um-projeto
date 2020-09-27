import Database from "@ioc:Adonis/Lucid/Database";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async (ctx) => {
  return ctx.auth;
}).middleware("auth");

Route.get("/me", "UsersController.me").middleware("auth");
Route.get("users", "UsersController.index");
Route.post("users", "UsersController.create").middleware("auth");
Route.post("users/login", "UsersController.login");