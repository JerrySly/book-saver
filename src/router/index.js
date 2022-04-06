import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "book-table",
        component: () =>
            import ("@/views/BookTable.vue"),
    },
    {
        path: "/add",
        name: "add-book",
        component: () =>
            import ("@/views/AddBook.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;