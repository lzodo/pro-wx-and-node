<template>
    <div class="LyTab">
        <ly-tabs v-model="lyIndex" activeColor="#ad2e2f" :lineHeight="2">
            <ly-tab-item v-for="item in lyData" :name="item.name" :title="item.title" :key="item.name" />
        </ly-tabs>
    </div>
</template>

<script>
import { LyTabs, LyTabBar, LyTabItem } from "ly-tab";
export default {
    naem: "LyTab",
    data() {
        return {
            lyIndex: 1,
            lyData: [
                {
                    name: 1,
                    title: "首页",
                },
                {
                    name: 2,
                    title: "签到",
                },
                {
                    name: 3,
                    title: "前端",
                },
                {
                    name: 4,
                    title: "后端",
                },
                {
                    name: 5,
                    title: "关于",
                },
                {
                    name: 6,
                    title: "更多",
                },
            ],
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
.ly-tabs {
    border-bottom: 0;
}
</style>
