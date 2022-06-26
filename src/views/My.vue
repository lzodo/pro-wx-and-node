<template>
    <div class="bar-my">
        <div>我的</div>
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
