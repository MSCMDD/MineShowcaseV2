<script setup lang="ts">
</script>

<template>
    <footer class="modal">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="../../public/assets/images/logo.png" alt="MSCPO Logo">
                    <span>MSCPO</span>
                </div>
                <div class="footer-links">
                    <a href="https://codeberg.org/mscpo/pages/">页面 由 GrassBlock2022 制作</a>
                    <a href="https://codeberg.org/mscpo/pages/">Powered by Vite</a>
                </div>
            </div>
            <div class="copyright">
                <p>© 2024-present MSCPO | <a href="https://mcicp.com/index.php?search=2025000002">MCICP备2025000002号</a> | 与Mojang Studios无关</p>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
/* 页脚 */
footer {
    padding: var(--space-xl) 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.footer-logo img {
    height: 36px;
    border-radius: var(--radius-sm);
}

.footer-logo span {
    font-weight: 500;
    color: var(--primary);
}

.footer-links {
    display: flex;
    gap: var(--space-md);
}

.footer-links a {
    font-size: 14px;
    color: var(--text-secondary);
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: rgba(108, 195, 73, 0.5);
}

.copyright {
    text-align: center;
    font-size: 13px;
    color: var(--text-secondary);
    padding-top: var(--space-md);
    border-top: 1px solid var(--text-secondary);
}
</style>