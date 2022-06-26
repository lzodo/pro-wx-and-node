<template>
    <ul class="TabBar">
        <li
            class="item"
            :class="{ active: item.path == pagePath }"
            v-for="item in list"
            :key="item.id"
            @click="routerPush(item.path)"
        >
            <span class="iconfont" v-html="item.icoCode"></span>
            <div class="font">{{ item.name }}</div>
        </li>
        <!-- <li class="item">
            <span class="iconfont">&#xec6b;</span>
            <div class="font">列表</div>
        </li>
        <li class="item">
            <span class="iconfont">&#xe73d;</span>
            <div class="font">购物</div>
        </li>
        <li class="item">
            <span class="iconfont">&#xe615;</span>
            <div class="font">我的</div>
        </li> -->
    </ul>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { icoCode: "&#xe600;", name: "首页", path: "/home", id: 1 },
                { icoCode: "&#xec6b;", name: "列表", path: "/list", id: 2 },
                { icoCode: "&#xe73d;", name: "购物", path: "/card", id: 3 },
                { icoCode: "&#xe615;", name: "我的", path: "/my", id: 4 },
            ],
        };
    },
    props: {
        pagePath: {
            type: String,
            default: "/home",
        },
    },
};
</script>

<style lang="scss" scoped>
.TabBar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    // background: #f00;
    width: 100%;
    height: 100px;
    .item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #8f8e8f;
        .iconfont {
            font-size: 40px;
        }
        .font {
            font-size: 20px;
        }
        &.active {
            color: #d33625;
        }
    }
}
</style>
