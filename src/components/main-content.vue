<template>
    <section id="mainContent">
        <router-view/>
    </section>
</template>

<style lang="scss">
    @import "~#/_variables";
    #mainContent {
        flex: 1;

        > section {
            height: 100%;

            .header {
                padding: 1.5em 0 0.5em 0.5em;
                border: $borderBottom;

                h1 {
                    font-size: 28px;
                }
            }
        }
    }
</style>