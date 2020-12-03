<template>
    <div class="wrap-main">
        <a
            class="logo"
            title="Về trang chủ Thegioididong.com"
            href="/"
            aria-label="logo"
        >
            <i class="icontgdd-logo"></i>
        </a>

        <form
            id="search-site"
            action="/tim-kiem"
            method="get"
            autocomplete="off"
        >
            <input
                class="topinput"
                id="search-keyword"
                name="key"
                type="text"
                aria-label="Bạn tìm gì..."
                placeholder="Bạn tìm gì..."
                autocomplete="off"
                onkeyup="SuggestSearch(event,this, 0);"
                maxlength="50"
            />
            <button class="btntop" type="submit" aria-label="tìm kiếm">
                <i class="icontgdd-topsearch"></i>
            </button>
        </form>
        <div class="menu-info">
            <a href="/gio-hang" class="a1 actmenu"
                ><i class="icontgdd-cart">1</i><span>Giỏ hàng</span></a
            >
            <a href="/lich-su-mua-hang" class="a2">LỊCH SỬ MUA HÀNG</a>
            <a
                class="liveevent"
                href="https://www.bachhoaxanh.com/khuyen-mai?utm_source=tgdd_ttc&amp;utm_medium=link_header&amp;utm_campaign=tgdd"
                target="_blank"
                ><span id="dot"><span class="ping"></span></span
                ><span class="text"
                    ><img
                        style="
                            width: 82px;
                            display: inline-block;
                            vertical-align: middle;
                        "
                        src="https://www.thegioididong.com/Content/desktop/images/V5/logo-bhx.png"
                    />
                    <b
                        style="
                            display: inline-block;
                            vertical-align: middle;
                            margin-left: 2px;
                            width: 100px;
                        "
                        ><span style="font-weight: normal">giảm</span> đến 50%
                        +<br />5 lần FREEship</b
                    ></span
                ></a
            >
            <div>
                <a href="/tin-tuc" class="mn-new">24h CÔNG NGHỆ</a>
                <a href="/hoi-dap" class="mn-faq">HỎI ĐÁP</a>
                <a href="/game-app" class="mn-gameapp">GAME APP</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>