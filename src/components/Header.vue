<script setup>
import {ref} from "vue";

const mobileOpen = ref(false)
const mobileDropdown1 = ref(false)

function toggleMobileBar(){
    mobileOpen.value = !mobileOpen.value;
}

function toggleMobileDropdown1(){
    mobileDropdown1.value = !mobileDropdown1.value;
}
</script>

<template>
    <header class="oreui-header" style="z-index: 999">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <img style="height: 80px" src="../../public/assets/images/mscpo-logo-v2.png" alt="MSCPO Logo">
                </div>
                <nav>
                    <ul id="nav-content">
                        <li><a href="/">首页</a></li>
                        <li><a href="/servers.html">服务器列表</a></li>

                        <li class="dropdown">
                            <a href="javascript:void(0)">合作伙伴</a>
                            <ul class="dropdown-menu oreui-card">
                                <li><a href="https://qm.qq.com/q/ftRMUc1ztm" target="_blank">维和服区</a></li>
                                <li><a href="https://cmsa.flmp.uk/" target="_blank">Cuberite Minecraft服务器联盟</a></li>
                                <li><a href="https://www.mc.sccc.top/" target="_blank">我的世界FOX服务器联盟</a></li>
                                <li><a href="https://qm.qq.com/q/oOu3jKU6Ws" target="_blank">沧澜联合公社</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="javascript:void(0)">友情链接</a>
                            <ul class="dropdown-menu oreui-card">
                                <li><a href="https://mscpodoc.netlify.app/" target="_blank">集宣组织开服文档</a></li>
                                <li><a href="https://mcjpg.org/" target="_blank">MCJPG</a></li>
                                <li><a href="https://www.mcicp.com/nav/" target="_blank">MC导航网</a></li>
                                <li><a href="https://bbs.hxit.top/" target="_blank">和谐论坛</a></li>
                                <li><a href="https://cmsa.flmp.uk/" target="_blank">Cuberite Minecraft服务器联盟</a></li>
                                <li><a href="https://www.mc.sccc.top/" target="_blank">我的世界FOX服务器联盟</a></li>
                                <li><a href="http://www.anran.xyz/" target="_blank">黯然的小破站</a></li>
                            </ul>
                        </li>

                        <li><a href="https://old.mscpo.top/AddServers/" target="_blank">前往腐竹端 ↗️</a></li>
                    </ul>
                </nav>
                <div class="mobile-menu-btn" @click="toggleMobileBar()">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </div>

        <!-- 添加移动菜单容器 -->
        <div class="mobile-menu oreui-card oreui-dark-card" :class="mobileOpen?'active':''" id="mobileMenu">
            <ul>
                <li><a href="/">首页</a></li>
                <li><a href="/servers.html">服务器列表</a></li>
                <li><a href="https://old.mscpo.top/AddServers/">加入我们</a></li>
                <li><a href="https://old.mscpo.top/">合作伙伴</a></li>
                <li class="dropdown" :class="mobileDropdown1?'active':''" @click="toggleMobileDropdown1">
                    <a href="javascript:void(0)">友情链接 <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu oreui-card">
                        <li><a href="https://mscpodoc.netlify.app/" target="_blank">集宣组织开服文档</a></li>
                        <li><a href="https://mcjpg.org/" target="_blank">MCJPG</a></li>
                        <li><a href="https://www.mcicp.com/nav/" target="_blank">MC导航网</a></li>
                        <li><a href="https://bbs.hxit.top/" target="_blank">和谐论坛</a></li>
                        <li><a href="https://cmsa.flmp.uk/" target="_blank">Cuberite Minecraft服务器联盟</a></li>
                        <li><a href="https://www.mc.sccc.top/" target="_blank">我的世界FOX服务器联盟</a></li>
                        <li><a href="http://www.anran.xyz/" target="_blank">黯然的小破站</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>

</style>