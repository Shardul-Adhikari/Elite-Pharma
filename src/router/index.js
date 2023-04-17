import "../Firebase";
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NotFound from '../views/NotFound.vue'
import Home from '../views/HomeView'
import SignUpView from '../views/SignUpView'
import ProductsView from '../views/ProductsView'
import MyProductsView from '../views/MyProductsView'
import ProductDetails from '../views/ProductDetails'
import LinkNotFound from '../views/LinkNotFound'
import LoginView from '../views/LoginView'
import UploadPrescription from '../views/UploadPrescription'
import ProductReturn from '../views/ProductReturn'

const auth = getAuth();
const user = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase, admin ) => {
      unsubscribe()
      resolve(userFirebase, admin)
    }, reject)
  })
// };

// const admin = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(auth, (userFirebase, admin ) => {
//       unsubscribe()
//       if (admin.role=="admin"){
//         resolve(userFirebase, admin)

//       }else{
//         reject
//       }
//     }, reject)
//   })
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // {
  //   path: '/admin',
  //   name: 'home',
  //   component: Home,
  // },
  {
    path: '/signin',
    name: 'signin',
    component: SignUpView,
  },

  // will match everything and put it under `$route.params.pathMatch`

  { path: '/:pathMatch(.*)*', 
    name: 'NotFound',  
    component: NotFound,
  },


  {
    path: '/products',
    name: 'products',
    component: ProductsView,

  },
  {
    path: '/myproducts',
    name: 'myproducts',
    component: MyProductsView,
    meta: {
      // requiresAdmin: true
      requiresAuth: true
    }
  },
  {
    path: '/products/:id',
    name: 'details',
    component: ProductDetails,

  },
  {
    path: '/products/:id',
    name: 'LinkNotFound',
    component: LinkNotFound,

  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/HomeView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/orders',
    name: 'OrdersView',
    component: () => import('../views/Orders'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/UploadPrescription',
    name: 'UploadPrescription',
    component: UploadPrescription,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ProductReturn',
    name: 'ProductReturn',
    component: ProductReturn,
    meta: {
      requiresAuth: true
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  // if (requiresAdmin && await admin()) {
  //   next();
  // } else {
    if (requiresAuth && !await user()) {
      next('signin');
    } else {
      next();
    }
  // }



  
});

