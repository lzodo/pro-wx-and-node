<template>
    <div class="bar-card bar-page-warp">
        <div class="bar-main">
            <div>购物车</div>
        </div>
        <TabBar pagePath="/card"></TabBar>
    </div>
</template>

<script>
import TabBar from "@/components/TabBar/index.vue";
export default {
    name: "Card",
    components: {
        TabBar,
    },
};
</script>

<style lang="scss"></style>
