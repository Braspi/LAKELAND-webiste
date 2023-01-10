<template>
    <section>
        <div class="footer-main">
            <div class="flex-display">
                <!-- <a href="/">LAKE-LAND.PL</a> -->
                <img src="@/assets/icon/logo/lakeland-round.png" alt="">
                <div class="link">
                    <router-link to="/">Strona Główna</router-link>
                    <router-link to="/">O nas</router-link>
                    <router-link to="/">Regulamin</router-link>
                    <router-link to="/">Sklep</router-link> 
                </div>
            </div>
            <div class="mojang">
                <p>PL: Serwer LAKE-LAND.PL nie jest powiązany z firmą Mojang. Wszystkie środki ze sklepu są przekazywane na utrzymanie i rozwój serwera.</p>
                <p>EN: The LAKE-LAND.PL server is in no way affiliated with Mojang, AB. Nor should it be considered a company endorsed by Mojang, AB.</p>
            </div>
            <div class="copyright">
                <span>© Lake-Land.pl 2023. All rights reserved</span>
                <span>Development by ycode.ovh</span>
            </div>

        </div>
    </section>
</template>

<style scoped src="@/assets/style/components/footer.less" lang="less"></style>