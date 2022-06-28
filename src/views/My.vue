<template>
    <div class="bar-my bar-page-warp">
        <div class="bar-main">
            <div>我的</div>
        </div>
        <TabBar pagePath="/my"></TabBar>
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
