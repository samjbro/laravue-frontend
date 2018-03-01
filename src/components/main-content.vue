<template>
    <section id="mainContent">
        <router-view/>
    </section>
</template>

<style lang="scss">
    @import "~#/_variables";
    #mainContent {
        flex: 1;
        position: relative;

        > section {
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;

            .header {
                padding: 1.5em 0 0.5em 0.5em;
                border-bottom: $borderBottom;

                h1 {
                    font-size: 28px;
                }
            }

            .main-scroll-wrap {
                padding: 12px 24px 48px;
                overflow: auto;
                flex: 1;
            }
        }
    }
</style>