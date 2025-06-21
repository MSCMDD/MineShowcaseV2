<script setup>

import Page from "./components/Page.vue";

import "./assets/fonts/fa/css/fa-all.min.css"
import ServerCard from "./components/ServerCard.vue";

const PH_SERVER = {
    "id": -1,
    "name": "虚位以待...",
    "ip": "example.org",
    "type": "JAVA",
    "version": "1.20.1",
    "desc": "",
    "link": "#",
    "is_member": false,
    "auth_mode": "OFFICIAL",
    "tags": [
        "占位服务器",
        "别看了这里没有内容",
        "都说了这事占位符",
        "你™非要看是吧"
    ],
    "is_hide": false,
    "status": {
        "players": {
            "online": 0,
            "max": 2025
        },
        "delay": 114514,
        "version": "1.20.1",
    },
    "permission": "guest",
    "cover_url": null
}

</script>

<template>
    <Page>
        <section class="hero" style="padding-bottom: 180px;padding-top:100px;text-align: center">
            <div class="container">
                <h1>MSCPO - Minecraft服务器集体宣传组织</h1>
                <p>汇聚优质服务器，为玩家和服主搭建桥梁</p>
                <div class="btn-group">
                    <a href="/servers.html" class="oreui-button oreui-important-btn oreui-middle-btn">
                        浏览服务器
                    </a>
                    <a href="#join" class="oreui-button oreui-btn-normal oreui-middle-btn">
                        加入我们
                    </a>
                </div>
            </div>
        </section>

        <!-- 特色介绍 -->
        <!--
        <section class="features-section">
            <div class="container">
                <div class="features-grid">
                    <div class="feature-card oreui-card modal">
                        <div class="feature-icon">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <h3>互惠互利</h3>
                        <p>为服务器提供曝光机会，为玩家推荐优质服务器，实现双赢</p>
                    </div>
                    <div class="feature-card oreui-card modal">
                        <div class="feature-icon">
                            <i class="fas fa-filter"></i>
                        </div>
                        <h3>严格筛选</h3>
                        <p>所有加入的服务器都经过审核，确保质量和稳定性</p>
                    </div>
                    <div class="feature-card oreui-card modal">
                        <div class="feature-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h3>数据支持</h3>
                        <p>提供服务器在线人数、延迟等实时数据，帮助玩家选择</p>
                    </div>
                </div>
            </div>
        </section>
        -->

        <!-- 服务器列表 -->
        <section id="servers" class="servers-section">
            <div class="container">
                <div class="section-header">
                    <h2>精选服务器列表</h2>
                    <p>以下是我们精选的优质Minecraft服务器</p>
                </div>

                <div class="servers-grid">
                    <ServerCard :server="PH_SERVER"></ServerCard>
                    <ServerCard :server="PH_SERVER"></ServerCard>
                    <ServerCard :server="PH_SERVER"></ServerCard>
                </div>

                <div class="section-footer">
                    <a href="servers.html" style="display: block" class="oreui-button oreui-important-btn oreui-large-btn">浏览更多服务器</a>
                </div>
            </div>
        </section>

        <!-- 关于我们 -->
        <section id="about" class="about-section oreui-dark-card" style="text-align: left">
            <div class="container">
                <div class="about-content">
                    <div class="about-text">
                        <h2>关于MSCPO</h2>
                        <p class="lead">我们是一个致力于推广优质Minecraft服务器的组织。</p>
                        <p>MSCPO成立于2024年1月，由 M&amp;A互助公社、花枫服务器（原dfgg服务器）和 ZUYMC服务器
                            组织。我们发现很多优质服务器因为缺乏宣传而难以被玩家发现，而玩家也常常难以找到适合自己的服务器。</p>
                        <p>我们的目标是搭建一个公平、透明的平台，让优质服务器能够获得更多曝光，同时帮助玩家轻松找到符合自己喜好的服务器。</p>
                        <a href="https://qm.qq.com/q/RvirL5mFWi" style="display: block;text-align: center" class="oreui-small-btn oreui-button oreui-important-btn">了解更多</a>
                    </div>
                    <div class="about-image scan-wrap">
                        <img src="../public/assets/images/logo.png" alt="关于我们">
                    </div>
                </div>
            </div>
        </section>

        <!-- 加入我们 -->
        <section id="join" style="padding-top: 100px;padding-bottom: 100px">
            <div class="container">
                <div class="section-header">
                    <h2>加入MSCPO</h2>
                    <p>无论你是服主还是普通玩家，都可以加入我们的社区</p>
                </div>

                <div class="join-cards">
                    <div class="join-card">
                        <div class="join-icon">
                            <i class="fas fa-server"></i>
                        </div>
                        <h3>服务器加入</h3>
                        <p>如果你的服务器符合我们的标准，可以申请加入MSCPO，获得更多曝光机会。</p>
                        <ul class="join-benefits">
                            <li><i class="fas fa-check"></i>稳定运行至少3个月</li>
                            <li><i class="fas fa-check"></i>无作弊/黑历史</li>
                        </ul>
                        <a href="https://qm.qq.com/q/mNbyq0pGyA" class="btn">申请加入</a>
                    </div>

                    <div class="join-card">
                        <div class="join-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3>玩家社区</h3>
                        <p>加入我们的玩家社区，参与讨论、活动和服务器评测。</p>
                        <ul class="join-benefits">
                            <li><i class="fas fa-check"></i>获取服务器最新资讯</li>
                            <li><i class="fas fa-check"></i>参与专属活动</li>
                            <li><i class="fas fa-check"></i>提交服务器评测</li>
                        </ul>
                        <a href="https://qm.qq.com/q/RvirL5mFWi" class="btn btn-outline">加入社区</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 统计数据 -->
        <!--
        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">成员服务器</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">200+</div>
                        <div class="stat-label">社区成员</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">400+</div>
                        <div class="stat-label">成立天数</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">成员服</div>
                    </div>
                </div>
            </div>
        </section>


        <section id="contact" class="contact-section">
            <div class="container">
                <div class="section-header">
                    <h2>联系我们</h2>
                    <p>有任何问题或建议？欢迎通过以下方式联系我们</p>
                </div>

                <div class="contact-card">
                    <h3>联系方式</h3>
                    <ul class="contact-methods">
                        <li>
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4>电子邮件</h4>
                                <a href="mailto:mscpo2024@163.com">mscpo2024@163.com</a>
                            </div>
                        </li>
                        <li>
                            <i class="fab fa-discord"></i>
                            <div>
                                <h4>Discord</h4>
                                <a href="https://discord.gg/hygPY8Kryv">加入我们的Discord服务器</a>
                            </div>
                        </li>
                        <li>
                            <i class="fab fa-qq"></i>
                            <div>
                                <h4>QQ群</h4>
                                <span>1017254870</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4>云湖群</h4>
                                <span>810744457</span>
                            </div>
                        </li>
                    </ul>

                    <div class="social-media">
                        <h3>关注我们</h3>
                        <div class="social-icons">
                            <a href="#" class="social-icon"><i class="fab fa-weixin"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-weibo"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-bilibili"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        -->
    </Page>
</template>

<style scoped lang="scss">

</style>
