<template>
    <div class="bar-search bar-page-warp">
        <div class="bar-main">
            <div @click="routerPush('/search/search-list')">默认搜索</div>
        </div>
        <TabBar pagePath="/none"></TabBar>
    </div>
</template>

<script>
import TabBar from "@/components/TabBar/index.vue";
export default {
    name: "My",
    components: {
        TabBar,
    },
};
</script>

<style lang="scss"></style>
