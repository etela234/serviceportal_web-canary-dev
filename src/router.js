/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "/app",
      meta: {
        rule: "guest"
      },
      component: () => import("./layouts/main/Main.vue"),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: "/",
          name: "home",
          meta: {
            breadcrumb: [
              { title: 'Home', active: true, url: '/app' },
            ],
            pageTitle: 'Home',
            rule: "guest"
          },
          component: () => import("./views/pages/app/Dashboard.vue")
        },
        {
          path: "/app/users",
          name: "users",
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/app' },
              { title: 'Users Management', active: true, url: '/app/users' },
            ],
            // pageTitle: 'Users',
            rule: "guest"
          },
          component: () => import("./views/pages/app/Users/index.vue")
        },
        {
          path: "/app/users/create",
          name: "users-create",
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/app' },
              { title: 'Users', url: '/app/users' },
              { title: 'Create new', active: true, url: '/app/users/create.vue' },
            ],
            pageTitle: 'Add Users',
            rule: "guest"
          },
          component: () => import("./views/pages/app/Users/create.vue")
        },
        {
          path: "/app/Documents",
          name: "documents",
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/app' },
              { title: 'Document Manager', url: '/app/Documents' },
            ],
            pageTitle: 'Documents',
            rule: "guest"
          },
          component: () => import("./views/pages/app/Documents/index.vue")
        },
        {
          path: "/page2",
          name: "page-2",
          component: () => import("./views/Page2.vue")
        }
      ]
    },
    // =============================================================================
    // Auth Layouts
    // =============================================================================
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: "/",
          name: "page-landing",
          meta: {
            rule: "guest"
          },
          component: () => import("@/views/Home.vue")
        },
        {
          path: "/login",
          name: "page-login",
          alias: "/login",
          meta: {
            rule: "guest"
          },
          component: () => import("@/views/pages/auth/Login.vue")
        },
        {
          path: "/forgot-password",
          name: "page-forgot-password",
          meta: {
            rule: "guest"
          },
          component: () => import("@/views/pages/auth/ForgotPassword.vue")
        },
        {
          path: "/reset-password",
          name: "page-reset-password",
          meta: {
            rule: "guest"
          },
          component: () => import("@/views/pages/auth/ResetPassword.vue")
        },
        {
          path: "/signup",
          name: "page-signup",
          meta: {
            rule: "guest"
          },
          component: () => import("@/views/pages/auth/SignUp.vue")
        },
        {
          path: "/password-changed",
          name: "page-password-changed",
          meta: {
            rule: "guest"
          },
          component: () => import("@/views/pages/auth/PasswordChanged.vue")
        },
        {
          path: "/reset-link",
          name: "page-reset-link",
          meta: {
            rule: "guest"
          },
          component: () => import("@/views/pages/auth/ResetLink.vue")
        },
        {
          path: "/account-created",
          name: "page-account-created",
          meta: {
            rule: "guest"
          },
          component: () => import("@/views/pages/auth/AccountCreated.vue")
        },
        {
          path: "/pages/error-404",
          name: "page-error-404",
          meta: {
            rule: "public"
          },
          component: () => import("@/views/pages/Error404.vue")
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/error-404"
    }
  ]
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
