export const routes = [
    {
        name: 'Home', path: '/', component: () => import('./views/TheMain.vue')
    },
    {
        name: 'Favourite', path: '/basket', component: () => import('./views/TheFavourite.vue')
    },
    {
        name: 'Navbar', path: '/categories', component: () => import('./views/TheNavbar.vue')
    },
    {
        name: 'Search', path: '/search', component: () => import('./views/TheSearch.vue')
    },
]