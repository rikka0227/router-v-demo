const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          title: "",
          keepAlive: true,
        },
      },
      {
        path: "article",
        component: () => import("@/views/Article.vue"),
        meta: {
          title: "",
          keepAlive: true,
        },
      },
      {
        path: "collect",
        component: () => import("@/views/Collect.vue"),
        meta: {
          title: "",
          keepAlive: true,
        },
      },
      {
        path: "like",
        component: () => import("@/views/Like.vue"),
        meta: {
          title: "",
          keepAlive: true,
        },
      },
      {
        path: "user",
        component: () => import("@/views/User.vue"),
        meta: {
          title: "",
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: "/article_detail",
    component: () => import("@/views/ArticleDetail.vue")
  }
]

export default routes
