<template>
    <div class="Header">
        <div class="logo flexc">
            <span class="iconfont">&#xe601;</span>
        </div>
        <div class="search">
            <div class="ico flexc">
                <span class="iconfont flexc">&#xe617;</span>
            </div>
            <input type="text" placeholder="请输入关键字" />
        </div>
        <div class="contact flexc">
            <span class="iconfont">&#xe7a6;</span>
        </div>
    </div>
</template>

<script>
export default {
    naem: "Header",
    data() {
        return {};
    },
    props: {},
};
</script>

<style lang="scss" scoped>
.Header {
    background: #ad2e2f;
    height: 90px;
    color: #fff;
    display: flex;
    .search {
        flex: 1;
        background: #fff;
        margin: 13px 0;
        padding-right: 20px;
        border-radius: 50px;
        display: flex;
        height: 64px;
        .ico {
            margin: 0px 5px 0 8px;
            min-width: 50px;
            float: right;
            .iconfont {
                font-size: 40px;
                display: block;
                color: #ccc;
            }
        }
        input {
            font-size: 35px;
            margin-top: -2px;
            background: initial;
            flex: 1;
        }
    }
    .logo {
        min-width: 80px;
    }
    .iconfont {
        font-size: 60px;
    }
    .contact {
        width: 80px;
    }
}
</style>
