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
      name: 'Post Details',
      component: () => import('../views/PostDetails.vue'),
      props: true,
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: '/post/:id/booking',
      name: 'Booking',
      component: () => import('../views/Booking.vue'),
      props: true,
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: '/post/:id/edit-post',
      name: 'Edit Post',
      component: () => import('../views/EditPost.vue'),
      props: true,
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: '/post/:id/leave-review',
      name: 'Leave Review',
      component: () => import('../views/LeaveReview.vue'),
      props: true,
      meta: {
        layout: 'main',
        auth: true
      },
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
          name: "My Posts",
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
      path: '/tasks/:id/complete-delivery',
      name: 'Complete Delivery',
      component: () => import('../views/CompleteDelivery.vue'),
      props: true,
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/tasks/:id/receipt',
      name: 'Receipt',
      component: () => import('../views/Receipt.vue'),
      props: true,
      meta: {
        layout: 'main',
        auth: true
      }
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
      path: '/messages/user/:id',
      name: 'Message User',
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
      },
    },
    {
      path: "/account/profile/:id",
      name: "Profile",
      props: true,
      component: () => import('../views/Account/Profile.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: "/account/profile/:id/reviews",
      name: "User Reviews",
      props: true,
      component: () => import('../views/Account/UserReviews.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: "/account/profile/:id/edit",
      name: "Edit Profile",
      props: true,
      component: () => import('../views/Account/EditProfile.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: "/account/points-overview",
      name: "Points Overview",
      component: () => import('../views/Account/PointsOverview.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: "/account/invite-friends",
      name: "Invite Friends",
      component: () => import('../views/Account/InviteFriends.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: "/account/verifications",
      name: "Verify Account",
      component: () => import('../views/Account/Verifications.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: "/account/verifications/phone",
      name: "Verify Phone Number",
      component: () => import('../views/Account/PhoneVerification.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
    },
    {
      path: "/account/verifications/id",
      name: "Verify ID",
      component: () => import('../views/Account/IdVerification.vue'),
      meta: {
        layout: 'main',
        auth: true
      },
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && (sessionStorage.getItem("token") === null)) {
    document.title = "Login | e-pant";
    next({
      name: 'Login'
    })
  } else {
    document.title = to.name + " | e-pant";
    next()
  }
})



export default router