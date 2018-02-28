<template>
    <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email Address" autofocus required>
        <input v-model="password" type="password" placeholder="Password" required>
        <button type="submit">Log In</button>
    </form>
</template>

<script>
    import {userStore} from '@/stores';
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            async login() {
                try {
                    await userStore.login(this.email, this.password);
                    this.password = '';
                    this.$emit('loggedin');
                } catch (err) {
                    console.log('login failed');
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/_variables";

    form {
        width: 280px;
        padding: 1.8rem;
        border: 1px solid #333;
        border-radius: .6rem;
        background: $colorBgr;

        &::before {
            content: " ";
            display: block;
            background: url(../../assets/img/logo.png) center top no-repeat;
            background-size: 156px;
            height: 172px;
        }
    }
</style>