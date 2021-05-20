import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/welcome'
    },
    // EMPTY LAYOUTS
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('../views/Welcome.vue'),
      meta: {
        layout: 'empty',
        auth: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta: {
        layout: 'empty',
        auth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      meta: {
        layout: 'empty',
        auth: false
      }
    },
    {
      path: '/step-one',
      name: 'Step 1',
      component: () => import('../views/InfoScreens/InfoScreenOne.vue'),
      meta: {
        layout: 'empty',
        auth: true
      }
    },
    {
      path: '/step-two',
      name: 'Step 2',
      component: () => import('../views/InfoScreens/InfoScreenTwo.vue'),
      meta: {
        layout: 'empty',
        auth: true
      }
    },
    {
      path: '/step-three',
      name: 'Step 3',
      component: () => import('../views/InfoScreens/InfoScreenThree.vue'),
      meta: {
        layout: 'empty',
        auth: true
      }
    },
    {
      path: '/step-four',
      name: 'Step 4',
      component: () => import('../views/InfoScreens/InfoScreenFour.vue'),
      meta: {
        layout: 'empty',
        auth: true
      }
    },

    // MAIN LAYOUTS (WITH NAV)
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/post/:id',
      name: 'PostDetails',
      component: () => import('../views/PostDetails.vue'),
      props: true,
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/tasks',
      component: () => import('../views/Tasks.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
      props: true,
      children: [{
          path: "/",
          name: "MyPosts",
          meta: {
            layout: 'main',
            auth: true
          },
          component: () => import('@/components/Tasks/MyPosts.vue'),
        },
        {
          path: "/tasks/my-deliveries",
          name: "Treat Categories",
          meta: {
            layout: 'main',
            auth: true
          },
          component: () => import('@/components/Tasks/MyDeliveries.vue'),
        },
      ]
    },
    {
      path: '/add-post',
      name: 'Add Post',
      component: () => import('../views/AddPost.vue'),
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/messages',
      name: 'Messages',
      component: () => import('../views/Messages.vue'),
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/conversation',
      name: 'Conversation',
      component: () => import('../views/Conversation.vue'),
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../views/Account.vue'),
      meta: {
        layout: 'main',
        auth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && (sessionStorage.getItem("token") === null)) {
    document.title = "Login | My Graitor Account";
    next({
      name: 'Login'
    })
  } else {
    document.title = to.name + " | My Graitor Account";
    next()
  }
})



export default router