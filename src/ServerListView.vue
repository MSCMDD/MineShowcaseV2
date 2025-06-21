<script setup>
import {onMounted, ref} from "vue";
import ServerCard from "./components/ServerCard.vue";

import "./assets/fonts/fa/css/fa-all.min.css"

import {validate} from "./assets/common.js";
import Page from "./components/Page.vue";
import Router from "./components/Router.vue";

onMounted(() => refresh(0));

const result = ref(null);

let seed = parseInt(Math.random() * 1000000000);

let member = false;
let official = true;
let yggdrasil = true;
let offline = true;
let keyword = "";

let amountPerPage = 12;
let currentPage = 1;
let pages = 1;

function reset() {
    seed = parseInt(Math.random() * 1000000000);
    pages = 1;
    currentPage = 1;
    refresh(0);
}

function next() {
    if (currentPage === pages) {
        return;
    }

    currentPage++;

    refresh(0);
}

function prev() {
    if (currentPage === 1) {
        return;
    }

    currentPage--;

    refresh(0);
}


function refresh(attempt) {
    if (attempt > 10) {
        result.value = undefined;
        console.log("failed")

        document.getElementById("refresh-btn").disabled = false;
        document.getElementById("prev-page").disabled = true;
        document.getElementById("next-page").disabled = true;

        return;
    }

    document.getElementById("refresh-btn").disabled = true;
    document.getElementById("prev-page").disabled = true;
    document.getElementById("next-page").disabled = true;

    result.value = null;

    let params = `limit=${amountPerPage}&is_member=${!member}&seed=${seed}&offset=${(currentPage - 1) * amountPerPage}`

    if (official) {
        params = params + "&authModes=OFFICIAL"
    }
    if (offline) {
        params = params + "&authModes=OFFLINE"
    }
    if (yggdrasil) {
        params = params + "&authModes=YGGDRASIL"
    }

    if (keyword.length > 0) {
        $.ajax({"url": `https://mscpoapi.crashvibe.cn/v1/search?query=${keyword}&` + params, "method": "GET", "timeout": 0})
            .error(() => refresh(attempt + 1))
            .success(function (response) {
                pages = Math.ceil(response.results.length / amountPerPage);

                const out = [];

                let k = 0;

                for (const server of response.results) {
                    if (!server.is_member && !member) {
                        continue;
                    }

                    if (official || yggdrasil || offline) {
                        if (server.auth_mode === 'OFFICIAL' && !official) {
                            continue;
                        }

                        if (server.auth_mode === 'OFFLINE' && !offline) {
                            continue;
                        }

                        if (server.auth_mode === 'YGGDRASIL' && !yggdrasil) {
                            continue
                        }
                    }

                    out[k] = server;
                    k++;
                }

                if (out.length === 0) {
                    result.value = undefined;
                } else {
                    result.value = out;
                }

                console.log(out)

                pages = 1;
                unlockUI();
            });
        return;
    }

    $.ajax({"url": "https://mscpoapi.crashvibe.cn/v1/servers?" + params, "method": "GET", "timeout": 0})
        .error(() => refresh(attempt + 1))
        .success(function (response) {
            pages = Math.ceil(response.total / amountPerPage);

            result.value = response.server_list

            console.log(response)
            unlockUI();
        });
}

function unlockUI() {
    document.getElementById("refresh-btn").disabled = false;
    document.getElementById("prev-page").disabled = currentPage === 1;
    document.getElementById("next-page").disabled = currentPage === pages;
}


</script>

<template>
    <Page>
        <main class="server-list-container">
            <div class="container">
                <Router :path="['home','list']"></Router>

                <!-- 筛选区域 -->
                <div class="filter-section oreui-card oreui-dark-card">
                    <div style="width: 100%;text-align: left;margin-bottom: 20px">
                        <h2>服务器列表</h2>
                    </div>

                    <div class="filter-grid">
                        <div class="filter-group">
                            <input v-model="keyword" class="input" type="text" placeholder="搜索服务器名称或描述...">
                        </div>
                        <div class="filter-group">
                            <select id="version-filter" class="filter-select dropdown_label" v-model="amountPerPage">
                                <option value="6">6条 / 页</option>
                                <option value="12">12条 / 页</option>
                                <option value="18">18条 / 页</option>
                                <option value="36">36条 / 页</option>
                            </select>
                        </div>
                    </div>

                    <div style="display: flex;align-items: center">
                        <div style="flex: 1 1 0" class="filter-checkbox">
                            <input checked="" type="checkbox" id="show-non-member" v-model="member">
                            <label for="show-non-member">显示非成员服</label>

                            <input type="checkbox" id="java-filter" checked="checked" v-model="official">
                            <label for="java-filter">正版登录</label>

                            <input type="checkbox" id="bedrock-filter" checked="checked" v-model="offline">
                            <label for="bedrock-filter">离线登录</label>

                            <input type="checkbox" id="crossplay-filter" checked="checked" v-model="yggdrasil">
                            <label for="crossplay-filter">第三方登录</label>
                        </div>
                    </div>

                    <div style="flex: 1 1 0;text-align: right">
                        <button class="oreui-button oreui-middle-btn oreui-important-btn" id="refresh-btn" @click="reset">刷新列表</button>
                    </div>
                </div>

                <!-- 无结果提示 -->
                <div v-if="result===undefined" class="no-results">
                    <i class="fas fa-server"></i>
                    <h3>无法查询到合适的结果...</h3>
                    <p>请尝试修改条件或确认服务器没炸</p>
                </div>

                <!-- 服务器列表容器 -->
                <div class="servers-grid" id="server-list" v-if="validate(result)">
                    <template v-for="server of result" :key=server.id>
                        <ServerCard :server=server></ServerCard>
                    </template>
                </div>

                <div class="no-results">
                    <div class="oreui-dark-card oreui-card" style="padding: 10px">
                        <p id="list-info">当前为第 {{ currentPage }}/{{ pages }}页({{ amountPerPage }}条/页)</p>

                        <button @click="prev" id="prev-page" class="oreui-button oreui-small-btn oreui-important-btn">上一页</button>
                        <button @click="next" id="next-page" class="oreui-button oreui-small-btn oreui-important-btn">下一页</button>
                    </div>
                </div>
            </div>
        </main>
    </Page>
</template>

<style scoped>
@media (max-width: 768px) {
    #list-info {
        width: 100%
    }
}
</style>