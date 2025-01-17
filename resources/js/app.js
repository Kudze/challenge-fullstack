/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.use(require('vue-google-login'), {
    client_id: '1091528950892-ndm33msvssq94e0onpqjtqtvn9ql6ji8.apps.googleusercontent.com'
});
Vue.use(
    require('vue-cookies')
);

Vue.component(
    'auth-card', require('./components/AuthCard').default
);
Vue.component('comment-card', require('./components/CommentCard').default);
Vue.component('page-wrapper', require('./components/PageWrapper').default);
Vue.component('google-login', require('vue-google-login').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
