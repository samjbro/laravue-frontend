<template>
    <div id="app">
        <div id="main" v-if="authenticated">
            <main-wrapper/>
        </div>

        <div class="login-wrapper" v-else>
            <login-form @loggedin="onUserLoggedIn"/>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {sharedStore, userStore} from '@/stores';
    import {ls} from '@/services';
    import {event, forceReloadWindow} from '@/utils';
    import {focusDirective} from '@/directives';
    import MainWrapper from "@/components/main-wrapper.vue";
    import LoginForm from '@/components/auth/login-form.vue';

    export default {
        name: 'App',
        components: {MainWrapper, LoginForm},

        data () {
            return {
                authenticated: false
            }
        },

        methods: {
            async init() {
              try {
                  await sharedStore.init();
              }  catch (err) {
                  console.log('App.vue init failed');
                  console.log(err);
              }
            },

            onUserLoggedIn() {
                this.authenticated = true;
                this.init();
            }
        },

        mounted() {
            const token = ls.get('jwt-token');
            if(token) {
                this.authenticated = true;
                this.init();
            }
        },

        created() {
            event.on({
                async logout() {
                    await userStore.logout();
                    ls.remove('jwt-token');
                    forceReloadWindow();
                }
            })
        }
    }

    Vue.directive('global-focus', focusDirective);
</script>

<style lang="scss">
    @import "~#/app.scss";

    #main, .login-wrapper {
        display: flex;
        min-height: 100vh;

        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .login-wrapper {
        @include vertical-center();
    }
</style>
