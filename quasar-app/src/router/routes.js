const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "/swipe", component: () => import("pages/SwipeGallery.vue") },
      { path: "/motion", component: () => import("pages/MotionPath.vue") },
       { path: "/scrolly", component: () => import("pages/ScrollyImages.vue") },
       { path: "/scene", component: () => import("pages/SceneAnimation.vue") },
       { path: "/scroll", component: () => import("pages/ScrollAnimation.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
