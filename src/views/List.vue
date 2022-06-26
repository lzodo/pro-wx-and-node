<template>
    <div class="bar-list">
        <div>列表</div>
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
