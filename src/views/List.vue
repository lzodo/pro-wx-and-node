<template>
    <div class="bar-list bar-page-warp">
        <div class="bar-main">
            <div>列表</div>
        </div>
        <TabBar pagePath="/list"></TabBar>
    </div>
</template>

<script>
import TabBar from "@/components/TabBar/index.vue";
export default {
    name: "List",
    components: {
        TabBar,
    },
};
</script>

<style lang="scss"></style>
