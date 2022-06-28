<template>
    <div class="bar-home bar-page-warp">
        <Header></Header>
        <LyTab></LyTab>
        <div class="bar-main wrapper">
            <div class="wrapper-cen">
                <Swiper></Swiper>
                <HomeIcons></HomeIcons>
            </div>
        </div>
        <TabBar pagePath="/home"></TabBar>
    </div>
</template>

<script>
import TabBar from "@/components/TabBar/index.vue";
import Header from "@/components/Header/index.vue";
import LyTab from "@/components/LyTab/index.vue";
import Swiper from "@/components/Swiper/Swiper.vue";
import HomeIcons from "@/components/HomeIcons/index.vue"

//插件 better-scroll 滚动插件，给需要滚动的父元素添加相应的类
import BScroll from "better-scroll";

export default {
    name: "Home",
    components: {
        TabBar,
        Header,
        LyTab,
        Swiper,
        HomeIcons
    },
    mounted() {
        const bs = new BScroll(".wrapper", {
            // pullUpLoad: true,
            // scrollbar: true,
            // pullDownRefresh: true,
        });
    },
};
</script>

<style lang="scss" scoped></style>
