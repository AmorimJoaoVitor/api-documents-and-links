'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/documents', 'DocumentController.list');

Route.get('/documents/:id', 'DocumentController.show');

Route.post('/documents', 'DocumentController.store');

Route.put('/documents/:id', 'DocumentController.update');

Route.delete('/documents/:id', 'DocumentController.delete');


