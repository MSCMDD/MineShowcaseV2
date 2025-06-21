<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Page from "../components/Page.vue";

import "../assets/css/wiki.css";
import "../assets/common.js";
import "../assets/fonts/fa/css/fa-all.min.css";
import { validate } from "../assets/common.js";
import Router from "../components/Router.vue";

// 获取路由对象和参数
const route = useRoute();

onMounted(refresh);

const server = ref({ name: "正在加载...", desc: "#等待服务器返回信息..." });
const gallery = ref("");
const page = ref("desc");
const online = ref(false);

// 从路由参数获取ID
const id = ref(route.params.id);

function refresh() {
  console.log(`sending request of ${id.value} to API...`);

  $.ajax({
    url: `https://mscpoapi.crashvibe.cn/v1/servers/${id.value}/gallerys`,
    method: "GET",
    timeout: 0,
  }).done(function (response) {
    console.log(`received gallery data:`);
    console.log(response);
    gallery.value = response;
  });

  $.ajax({
    url: `https://mscpoapi.crashvibe.cn/v1/servers/info/${id.value}`,
    method: "GET",
    timeout: 0,
  }).done(function (response) {
    console.log(`received server-info data:`);
    console.log(response);
    server.value = response;
    online.value = validate(server.value.status);

    document.getElementById("title").innerHTML =
      "服务器详情: " + response.name + " | MSCPO";

    const doc = document.getElementById("markdown-section");
    doc.innerHTML = marked.parse(response.desc, {
      gfm: true,
      breaks: true,
      smartLists: true,
    });
  });
}

function copy(link, text) {
  const n = document.createElement("input");
  document.body.appendChild(n);
  n.setAttribute("value", link);
  n.select();
  document.execCommand("copy");
  alert(text);
  document.body.removeChild(n);
}
</script>

<template>
  <Page>
    <main class="server-detail">
      <Router :path="['home', 'servers', server.name]"></Router>

      <div class="server-info-header">
        <div style="flex: 1 1 0" id="server-desc">
          <img
            alt="server icon"
            v-if="online"
            width="100"
            height="100"
            style="margin-right: 20px; float: left"
            decoding="async"
            :src="server.status.icon"
          />
          <!--suppress CheckImageSize -->
          <img
            alt="server icon"
            v-else
            width="100"
            height="100"
            style="margin-right: 20px; float: left"
            decoding="async"
            src="/assets/images/unknown-server.png"
          />

          <div style="margin-top: 15px">
            <h2 class="ant-typography">
              {{ server.name }}
              <span
                v-if="server.is_member"
                style="display: inline-block"
                class="server-badge member"
                ><i class="fas fa-check"></i>成员服</span
              >
            </h2>

            <!--tmd接口里面就没这玩意-->
            <div>此服务器未提供描述...</div>
          </div>
        </div>

        <div style="flex: 0 1 0">
          <a :href="server.link" target="_blank">
            <button class="oreui-button oreui-small-btn oreui-important-btn">
              官网
            </button>
          </a>
        </div>
        <div style="flex: 0 1 0">
          <a @click="copy(`${server.ip}`, '已复制到剪贴板！')" target="_blank">
            <button class="oreui-button oreui-small-btn oreui-btn-normal">
              复制IP
            </button>
          </a>
        </div>
      </div>

      <div class="box-container">
        <div class="box box-a oreui-dark-card oreui-card" style="">
          <div class="modal_button_area">
            <div class="oreui-tab-area oreui-tab-bar" style="width: 100%">
              <div class="oreui-tab-bar">
                <button
                  :class="page === 'desc' ? 'active' : 'no_active'"
                  @click="page = 'desc'"
                  class="oreui-tab-button"
                >
                  服务器描述
                </button>
                <button
                  :class="page !== 'desc' ? 'active' : 'no_active'"
                  class="oreui-tab-button"
                  @click="page = 'gallery'"
                >
                  画廊
                </button>
              </div>
            </div>
          </div>

          <div
            :hidden="page !== 'desc'"
            id="markdown-section"
            class="markdown-section"
          ></div>

          <div :hidden="page === 'desc'" id="gallery-section">
            <div class="servers-grid" style="padding: 20px">
              <template v-for="data of gallery.gallerys_url" :key="data.id">
                <div>
                  <div
                    class="server-image"
                    :style="{ backgroundImage: `url(${data.image_url})` }"
                  ></div>

                  <div class="oreui-light-card" style="text-align: left">
                    <h3>{{ data.title }}</h3>
                    <p>{{ data.description }}</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <div
          class="box box-b oreui-dark-card oreui-card"
          style="text-align: left"
        >
          <div class="modal_button_area">
            <h3 style="margin: 16px">服务器信息</h3>
          </div>

          <div class="filter-grid" style="padding: 15px">
            <div class="filter-group">
              <h3>| 基本信息</h3>
              <p>
                服务器IP:
                <a class="text-secondary" @click="copy(server.ip, '复制成功!')"
                  >{{ server.ip }} [点击复制]</a
                >
              </p>
              <p>
                服务器链接:
                <a class="text-secondary" :href="server.link">[点击前往]</a>
              </p>
            </div>

            <div>
              <h3>| 服务器状态</h3>

              <div class="filter-group" v-if="online">
                <p>
                  服务器版本:
                  <span class="text-secondary">{{
                    server.status.version
                  }}</span>
                </p>
              </div>

              <div class="filter-group" v-if="online">
                <p>
                  在线人数:
                  <span class="text-secondary"
                    >{{ server.status.players.online }} /
                    {{ server.status.players.max }}</span
                  >
                </p>
              </div>

              <div class="filter-group" v-if="online">
                <p>
                  延迟(MSCPO服务器测速):
                  <span class="text-secondary"
                    >{{ parseInt(server.status.delay) }} ms</span
                  >
                </p>
              </div>

              <div class="filter-group" v-else>
                <p class="text-secondary">(服务器离线，无法获取信息)</p>
              </div>
            </div>

            <div>
              <h3>| 服务器MOTD</h3>

              <div
                class="filter-group"
                v-if="online"
                style="
                  background-color: #222222;
                  padding: 10px;
                  margin-top: 20px;
                "
              >
                <span
                  class="text-secondary"
                  v-html="
                    server.status.motd['html'].replaceAll(
                      '\n',
                      '<br><div style=\'margin:5px\'></div>'
                    )
                  "
                ></span>
              </div>

              <div class="filter-group" v-else>
                <p class="text-secondary">(服务器离线，无法获取信息)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Page>
</template>

<style scoped>
.server-detail {
  padding-top: 24px;
  flex-direction: column;
  gap: 8px;
  display: block;

  align-self: center;
  max-width: 1400px;
  margin-left: calc(max((100vw - 1400px) / 2, 20px));
  margin-right: calc(max((100vw - 1400px) / 2, 20px));
}

.text-secondary {
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .server-detail {
    padding-top: 24px;
    flex-direction: column;
    gap: 8px;
    display: block;
    max-width: 100%;
    margin: 20px;
  }

  .box-container {
    width: 100% !important;
  }

  .server-info-header {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

.server-info-header {
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 6em;
  margin-left: 40px;
  margin-right: 40px;
  flex-flow: row wrap;
}

/* 移动端优先（B在上，A在下） */
.box-container {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  width: 90%;
  margin: 0 auto;
  gap: 20px;
  align-items: flex-start;
  padding-bottom: 36px;
}

.box-b {
  order: -1; /* 强制B在上方（HTML无需调整） */
  width: 100%;
}

.box-a {
  width: 100%;
}

@media (max-width: 660px) {
  #server-desc {
    min-width: 100%;
  }
}

/* 桌面端（>768px：A左B右，比例7.5:2.5） */
@media (min-width: 1400px) {
  .box-container {
    flex-direction: row; /* 水平排列 */
    width: 100%;
    flex-wrap: nowrap; /* 禁止换行 */
  }

  .box-b {
    order: 0; /* 重置顺序 */
  }

  .box-a {
    flex: 7.5; /* 比例7.5 */
    min-width: 0;
  }

  .box-b {
    flex: 2.5; /* 比例2.5 */
  }
}
</style>
