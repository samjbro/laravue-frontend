<template>
    <nav id="sidebar">
        <div class="row">
            <div class="column title">Laravue</div>
        </div>
        <ul class="menu">
            <li>
                <router-link to="/home" :class="['home', currentView === 'Home' ? 'active' : '']">
                    Home
                </router-link>
            </li>
            <li>
                <router-link to="/categories" :class="['categories', currentView === 'Categories' ? 'active' : '']">
                    Categories
                </router-link>
            </li>
            <li>
                <router-link to="/products" :class="['products', currentView === 'Products' ? 'active' : '']">
                    Products
                </router-link>
            </li>
            <li>
                <a @click.prevent="logout" class="logout">Log Out</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import {event} from '@/utils';
    export default {
        computed: {
            currentView() {
                return this.$route.name;
            }
        },

        methods: {
            logout() {
                event.emit('logout');
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/_variables.scss";
    #sidebar {
        flex: 0 0 150px;
        background: $colorSidebarBgr;

        .column {
            margin-bottom: 12px;
            font-weight: bold;
            font-size: 20px;
            letter-spacing: 2px;
            padding-top: 1em;

            &.title {
                flex: 1;
            }
        }

        .menu {
            a {
                display: block;
                height: 40px;
                line-height: 40px;
                border-right: 5px solid transparent;
                text-align: right;
                padding-right: 30px;

                &:after {
                    width: 24px;
                    display: inline-block;
                    font-family: FontAwesome;
                }

                &.active, &:hover {
                    border-right-color: $colorHighlight;
                    color: $colorLinkHovered;
                    background: rgba(0, 0, 0, .2);
                }

                &.home::after {
                    content: "\f015";
                }

                &.categories::after {
                    content: "\f0ca";
                }

                &.products::after {
                    content: "\f02b";
                }

                &.logout::after {
                    content: "\f08b";
                }
            }
        }
    }
</style>