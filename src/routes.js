import GuestMiddleware from './middleware/guest.middleware'
import AuthMiddleware from './middleware/auth.middleware'

export default function route ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./app/home/home.html'),
      controller: 'HomeCtrl'
    })
    .state('login', {
      url: '/login',
      template: require('./app/authentication/login.html'),
      controller: 'LoginCtrl',
      onEnter: GuestMiddleware
    })
    .state('register', {
      url: '/register',
      template: require('./app/authentication/register.html'),
      controller: 'RegisterCtrl',
      onEnter: GuestMiddleware
    })
    .state('users', {
      abstract: true,
      url: '/users',
      onEnter: AuthMiddleware
    })
    .state('users.all', {
      url: '',
      template: require('./app/user/users.html'),
      controller: 'UsersCtrl'
    })
    .state('categories', {
      abstract: true,
      url: '/categories',
      onEnter: AuthMiddleware
    })
    .state('categories.all', {
      url: '?page',
      template: require('./app/category/categories.html'),
      controller: 'CategoriesCtrl'
    })
    .state('categories.add', {
      url: '/add',
      template: require('./app/category/categories.add.html'),
      controller: 'AddCategoryCtrl'
    })
    .state('categories.edit', {
      url: '/:id/edit',
      template: require('./app/category/categories.edit.html'),
      controller: 'EditCategoryCtrl'
    })
    .state('clients', {
      abstract: true,
      url: '/clients',
      onEnter: AuthMiddleware
    })
    .state('clients.all', {
      url: '?page',
      template: require('./app/client/clients.html'),
      controller: 'ClientsCtrl'
    })
    .state('clients.add', {
      url: '/add',
      template: require('./app/client/clients.add.html'),
      controller: 'AddClientCtrl'
    })
    .state('clients.edit', {
      url: '/:id/edit',
      template: require('./app/client/clients.edit.html'),
      controller: 'EditClientCtrl'
    })
    .state('products', {
      abstract: true,
      url: '/products',
      onEnter: AuthMiddleware
    })
    .state('products.all', {
      url: '?page',
      template: require('./app/product/products.html'),
      controller: 'ProductsCtrl'
    })
    .state('products.add', {
      url: '/add',
      template: require('./app/product/products.add.html'),
      controller: 'AddProductCtrl'
    })
    .state('products.edit', {
      url: '/:id/edit',
      template: require('./app/product/products.edit.html'),
      controller: 'EditProductCtrl'
    })
    .state('stock', {
      abstract: true,
      url: '/stock',
      onEnter: AuthMiddleware
    })
    .state('stock.all', {
      url: '',
      template: require('./app/stock/stock.edit.html'),
      controller: 'EditStockCtrl'
    })
    .state('items', {
      abstract: true,
      url: '/items',
      onEnter: AuthMiddleware
    })
    .state('items.all', {
      url: '?page',
      template: require('./app/item/items.html'),
      controller: 'ItemsCtrl'
    })
    .state('items.add', {
      url: '/add?product_id',
      reloadOnSearch: false,
      template: require('./app/item/items.add.html'),
      controller: 'AddItemCtrl'
    })
    .state('items.edit', {
      url: '/:id/edit',
      reloadOnSearch: false,
      template: require('./app/item/items.edit.html'),
      controller: 'EditItemCtrl'
    })
    .state('locations', {
      abstract: true,
      url: '/locations',
      onEnter: AuthMiddleware
    })
    .state('locations.all', {
      url: '?page',
      template: require('./app/location/locations.html'),
      controller: 'LocationController'
    })
    .state('locations.add', {
      url: '/add',
      template: require('./app/location/locations.add.html'),
      controller: 'AddLocationController'
    })
    .state('locations.edit', {
      url: '/:id/edit',
      template: require('./app/location/locations.edit.html'),
      controller: 'EditLocationCtrl'
    })
    .state('locations.fiche', {
      url: '/:id/fiche',
      template: require('./app/location/location.fiche.html'),
      controller: 'EditFicheLocationCtrl'
    })
   .state('locations.delete', {
     url: '/:id/delete',
     template: require('./app/location/locations.html'),
     controller: 'LocationController'
   })
   .state('locations.facture', {
     url: '/:id/facture',
     template: require('./app/location/location.facture.html'),
     controller: 'FactureLocationCtrl'
   })
   .state('barcodes', {
     url: '/barcodes',
     template: require('./app/barcode/barcode.html'),
     controller: 'BarCodePrinter'
   })
}
