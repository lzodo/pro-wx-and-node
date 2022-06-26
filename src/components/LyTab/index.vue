<template>
    <div class="LyTab">
        <ly-tabs v-model="value" activeColor="#ad2e2f" :lineHeight="2">
            <ly-tab-item name="1" title="首页" />
            <ly-tab-item name="2" title="签到" />
            <ly-tab-item name="3" title="前端" />
            <ly-tab-item name="4" title="后端" />
            <ly-tab-item name="5" title="关于" />
            <ly-tab-item name="6" title="更多" />
        </ly-tabs>
    </div>
</template>

<script>
import { LyTabs, LyTabBar, LyTabItem } from "ly-tab";
export default {
    naem: "LyTab",
    data() {
        return {
            value:1
        };
    },
    components: {
        LyTabs,
        LyTabBar,
        LyTabItem,
    },
};
</script>

<style lang="scss" scoped>
.ly-tabs{
    border-bottom: 0;
}
</style>
