<template>
    <div class="LyTab">
        <ly-tabs v-model="lyIndex" activeColor="#ad2e2f" :lineHeight="2">
            <ly-tab-item
                v-for="item in data"
                :name="item.name"
                :title="item.title"
                :key="item.name"
            />
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
            lyData: [],
        };
    },
    components: {
        LyTabs,
        LyTabBar,
        LyTabItem,
    },
    props: {
        data: {
            typeof: Object,
            required: true,
        },
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.ly-tabs {
    border-bottom: 0;
}
</style>
