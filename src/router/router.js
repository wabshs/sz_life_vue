import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import("../components/Index.vue"),
        children: [
            {path: '/Code_Gen', name: 'CodeGen', component: () => import("../components/CodeGenerator.vue")},
            {path: '/bye', name: 'bye', component: () => import("../components/DieInTheSea.vue")}
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router