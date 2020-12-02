<template>
    <div class="wrap-nav">
        <nav>
            <a
                v-for="(category, index) in LIST_CATEGORIES"
                :key="index"
                href="/dtdd"
                :title="category.title"
            >
                <i :class="[category.iconClassName]"></i><b>{{ category.text }}</b>
            </a>
            <model-info-popover
                v-bind="{
                    responseData: firstCategory,
                    apiUrl: $apiLinkType.listCategoriesApiLink,
                    title: 'Category Model'
                }"
            />
        </nav>
    </div>
</template>

<script>
import { FETCH_LIST_CATEGORIES, HOME_MODULE, LIST_CATEGORIES } from '@/store/module-types/home';
import { mapGetters } from 'vuex';
import ModelInfoPopover from '@/common/components/ModelInfoPopover.vue';

export default {
    components: {
        ModelInfoPopover,
    },
    computed: {
        ...mapGetters(HOME_MODULE, [
            LIST_CATEGORIES,
        ]),
        firstCategory() {
            return this.LIST_CATEGORIES[0];       
        },
    },
    created() {
        this.$store.dispatch(`${HOME_MODULE}/${FETCH_LIST_CATEGORIES}`);
    },
}
</script>
<style>
/*! CSS Used from: Embedded */

* {
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
}

nav {
	width: 780px;
	background: #fed700;
	margin: 0;
	padding: 0;
	display: table;
	*display: block;
	*float: none;
}

nav a {
	display: table-cell;
	*float: left;
	width: 75px;
	height: 44px;
	padding: 3px 0 4px;
	color: #000;
	background: #fed700;
	font-size: 11px;
	text-align: center;
	text-transform: uppercase;
	position: relative;
}

nav a:hover {
	background-color: #f5f5f5;
}

nav a.mobile {
	width: 80px;
}

nav a.tablet {
	width: 80px;
}

nav a.laptop {
	width: 74px;
}

nav a.phukien {
	width: 70px;
}

[class^="icontgdd-"],
[class*="icontgdd-"] {
	background-image: url(https://cdn.tgdd.vn/v2015/Content/desktop/images/V4/icondesktop2022@1x_edit.png?v=004);
	background-repeat: no-repeat;
	display: inline-block;
	height: 30px;
	width: 30px;
	line-height: 30px;
	vertical-align: middle;
}

@media all and (-webkit-min-device-pixel-ratio:1.5) {
	[class^="icontgdd-"],
	[class*="icontgdd-"] {
		background-image: url(https://cdn.tgdd.vn/v2015/Content/desktop/images/V4/icondesktop2022@2x_edit.png?v=003);
		background-size: 500px 100px;
	}
}

.icontgdd-mobile {
	background-position: -190px 0;
	width: 16px;
	height: 25px;
	display: block;
	margin: 2px auto 3px;
}

.icontgdd-tablet {
	background-position: -209px 0;
	display: block;
	margin: 0 auto 5px;
	width: 33px;
	height: 22px;
}

.icontgdd-laptop {
	background-position: -245px 0;
	display: block;
	margin: 0 auto 5px;
	width: 39px;
	height: 21px;
}

.icontgdd-phukien {
	background-position: -288px 0;
	display: block;
	margin: 0 auto 5px;
	width: 22px;
	height: 22px;
}

.icontgdd-watch {
	background-position: -362px -50px;
	display: block;
	margin: 0 auto 0;
	width: 16px;
	height: 27px;
}


/*! CSS Used from: Embedded */

[class^="icontgdd-"],
[class*="icontgdd-"] {
	background-image: url(https://www.thegioididong.com/Content/desktop/images/V5/icondesktop20200728@1x.png?v=2);
}

@media all and (-webkit-min-device-pixel-ratio: 1.5) {
	[class^="icontgdd-"],
	[class*="icontgdd-"] {
		background-image: url(https://www.thegioididong.com/Content/desktop/images/V5/icondesktop20200728@2x.png?v=2);
		background-size: 500px 115px;
	}
}

.icontgdd-mobile {
	width: 13px;
	height: 20px;
	background-position: 0 -91px;
}

.icontgdd-laptop {
	width: 24px;
	height: 20px;
	background-position: -16px -91px;
}

.icontgdd-tablet {
	width: 16px;
	height: 20px;
	background-position: -43px -91px;
}

.icontgdd-phukien {
	width: 22px;
	height: 20px;
	background-position: -60px -91px;
}

.icontgdd-watch {
	width: 14px;
	height: 20px;
	background-position: -83px -91px;
}

.icontgdd-fashionwatch {
	width: 14px;
	height: 20px;
	background-position: -102px -91px;
}

.icontgdd-pc {
	width: 23px;
	height: 20px;
	background-position: -118px -91px;
}

header .wrap-nav {
	background-color: #FED101;
	height: 40px;
	overflow: hidden;
}

header .wrap-nav {
	background-color: #FED101;
	height: 40px;
	overflow: hidden;
}

header .wrap-nav>nav {
	max-width: 1200px;
	margin: auto;
	min-width: 1024px;
	width: 100%;
}

header .wrap-nav>nav>a {
	padding: 0 12px;
	display: table-cell;
	vertical-align: middle;
	height: 40px;
	white-space: nowrap;
	color: #000;
	text-transform: none;
	font-size: 14px;
}

header .wrap-nav>nav>a>* {
	display: inline-block;
	vertical-align: middle;
}

header .wrap-nav>nav>a>i {
	margin: 0 5px 0 0;
}

header .wrap-nav>nav>a>b {
	font-weight: normal;
}

@media screen and (max-width:1220px) {
	header .wrap-nav>nav>a {
		padding: 0 12px;
	}
	header .wrap-nav>nav>a>i {
		display: none;
	}
}
</style>