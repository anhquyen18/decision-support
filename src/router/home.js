const home = [
  {
    path: '/',
    component: () => import('../layouts/home.vue'),
    // children: [{
    //         path: "users",
    //         name: "admin-users",
    //         component: () =>
    //             import ("../pages/admin/users/index.vue")
    //     },

    // ]
  },
];

export default home;
