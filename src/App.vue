<template>
    <div id="app">
        <mt-header fixed title="信息管理系统"></mt-header>
        <router-view />
        <mt-tabbar v-model="selected">
            <mt-tab-item id="首页">
                <img slot="icon" src="">
                首页
            </mt-tab-item>
            <mt-tab-item id="会员">
                <img slot="icon" src="">
                会员
            </mt-tab-item>
            <mt-tab-item id="购物车">
                <img slot="icon" src="">
                购物车
            </mt-tab-item>
            <mt-tab-item id="查找">
                <img slot="icon" src="">
                查找
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected: ''
            }
        },
    }
</script>
<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>