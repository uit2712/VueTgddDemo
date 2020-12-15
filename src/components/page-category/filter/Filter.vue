<template>
    <div class="filter">
        <manufacturer/>
        <div class="fl price">
            <label>Chọn mức giá: </label>
            <a href="/dtdd?p=duoi-2-trieu" class=" " data-id="7">
            Dưới 2 triệu
            </a>
            <a href="/dtdd?p=tu-2-4-trieu" class=" " data-id="9">
            Từ 2 - 4 triệu
            </a>
            <a href="/dtdd?p=tu-4-7-trieu" class=" " data-id="289">
            Từ 4 - 7 triệu
            </a>
            <a href="/dtdd?p=tu-7-13-trieu" class=" " data-id="562">
            Từ 7 - 13 triệu
            </a>
            <a href="/dtdd?p=tu-13-20-trieu" class=" " data-id="252">
            Từ 13 - 20 triệu
            </a>
            <a href="/dtdd?p=tren-20-trieu" class=" " data-id="253">
            Trên 20 triệu
            </a>
        </div>
        <div class="fl feature">
            <span class="criteria">Bộ lọc</span>
            <div class="property threecol">
                <a href="javascript:;" class="closefilter"><i class="icontgdd-closefilter"></i></a>
                <div class="prop ">
                    <strong>Loại điện thoại</strong>
                    <a href="/dtdd?g=android" class="" data-id="39237">
                    <i class="icontgdd-checkbox"></i>
                    Android
                    </a>
                    <a href="/dtdd?g=iphone-ios" class="" data-id="39238">
                    <i class="icontgdd-checkbox"></i>
                    iPhone (iOS)
                    </a>
                    <a href="/dtdd?g=dien-thoai-pho-thong" class="" data-id="62879">
                    <i class="icontgdd-checkbox"></i>
                    Điện thoại phổ thông
                    </a>
                </div>
                <div class="prop ">
                    <strong>Dung lượng pin</strong>
                    <a href="/dtdd-pin-3000-den-5000-mah" class="" data-id="163466">
                    <i class="icontgdd-checkbox"></i>
                    Từ 3000 đến 5000 mAh
                    </a>
                    <a href="/dtdd-pin-khung" class="" data-id="163467">
                    <i class="icontgdd-checkbox"></i>
                    Pin khủng trên 5000 mAh
                    </a>
                </div>
                <div class="prop ">
                    <strong>Dung lượng RAM</strong>
                    <a href="/dtdd-ram-duoi-4gb" class="" data-id="172937">
                    <i class="icontgdd-checkbox"></i>
                    Dưới 4 GB
                    </a>
                    <a href="/dtdd-ram-4-den-6gb" class="" data-id="172938">
                    <i class="icontgdd-checkbox"></i>
                    4 - 6 GB
                    </a>
                    <a href="/dtdd-ram-8gb-tro-len" class="" data-id="172939">
                    <i class="icontgdd-checkbox"></i>
                    8 GB trở lên
                    </a>
                </div>
                <div class="prop ">
                    <strong>Bộ nhớ trong</strong>
                    <a href="/dtdd-rom-duoi-32gb" class="" data-id="172941">
                    <i class="icontgdd-checkbox"></i>
                    Dưới 32 GB
                    </a>
                    <a href="/dtdd-rom-32-den-64gb" class="" data-id="172942">
                    <i class="icontgdd-checkbox"></i>
                    32 - 64 GB
                    </a>
                    <a href="/dtdd-rom-128-den-256gb" class="" data-id="172943">
                    <i class="icontgdd-checkbox"></i>
                    128 - 256 GB
                    </a>
                    <a href="/dtdd-rom-512gb-tro-len" class="" data-id="172944">
                    <i class="icontgdd-checkbox"></i>
                    512 GB trở lên
                    </a>
                </div>
                <div class="prop ">
                    <strong>Tính năng camera</strong>
                    <a href="/dtdd-camera-macro" class="" data-id="163409">
                    <i class="icontgdd-checkbox"></i>
                    Chụp cận cảnh (Macro)
                    </a>
                    <a href="/dtdd-camera-goc-rong" class="" data-id="140894">
                    <i class="icontgdd-checkbox"></i>
                    Chụp góc rộng
                    </a>
                    <a href="/dtdd-camera-xoa-phong" class="" data-id="140895">
                    <i class="icontgdd-checkbox"></i>
                    Chụp xoá phông
                    </a>
                    <a href="/dtdd-camera-zoom" class="" data-id="140896">
                    <i class="icontgdd-checkbox"></i>
                    Chụp zoom xa
                    </a>
                </div>
                <div class="prop ">
                    <strong>Tính năng đặc biệt</strong>
                    <a href="/dtdd-choi-game" class="" data-id="176504">
                    <i class="icontgdd-checkbox"></i>
                    Chơi game / Cấu hình cao
                    </a>
                    <a href="/dtdd-bao-mat-khuon-mat" class="" data-id="173170">
                    <i class="icontgdd-checkbox"></i>
                    Bảo mật khuôn mặt
                    </a>
                    <a href="/dtdd-bao-mat-van-tay" class="" data-id="173171">
                    <i class="icontgdd-checkbox"></i>
                    Bảo mật vân tay
                    </a>
                    <a href="/dtdd-sac-pin-nhanh" class="" data-id="173172">
                    <i class="icontgdd-checkbox"></i>
                    Sạc pin nhanh
                    </a>
                    <a href="/dtdd-sac-khong-day" class="" data-id="173173">
                    <i class="icontgdd-checkbox"></i>
                    Sạc không dây
                    </a>
                    <a href="/dtdd-chong-nuoc-bui" class="" data-id="173174">
                    <i class="icontgdd-checkbox"></i>
                    Chống nước, bụi
                    </a>
                </div>
                <a href="javascript:;" class="morefeature" onclick="$(this).parent().find('div').removeClass('hide');$(this).remove();">Xem thêm tính năng khác</a>
                <div class="prop hide">
                    <strong>Kiểu màn hình</strong>
                    <a href="/dtdd-man-hinh-sieu-tran-vien" class="" data-id="140891">
                    <i class="icontgdd-checkbox"></i>
                    Siêu tràn viền
                    </a>
                    <a href="/dtdd-man-hinh-tran-vien" class="" data-id="140890">
                    <i class="icontgdd-checkbox"></i>
                    Tràn viền (tai thỏ, giọt nước...)
                    </a>
                </div>
                <div class="prop hide">
                    <strong>Kích thước màn hình</strong>
                    <a href="/dtdd-nho-gon" class="" data-id="163351">
                    <i class="icontgdd-checkbox"></i>
                    Nhỏ gọn dễ cầm
                    </a>
                    <a href="/dtdd-tu-6-inch" class="" data-id="40435">
                    <i class="icontgdd-checkbox"></i>
                    Màn hình lớn 6 inch trở lên
                    </a>
                </div>
                <div class="prop hide">
                    <strong>Chất liệu vỏ</strong>
                    <a href="/dtdd?g=kim-loai-va-kinh" class="" data-id="57311">
                    <i class="icontgdd-checkbox"></i>
                    Kim loại và kính
                    </a>
                    <a href="/dtdd?g=kim-loai-nguyen-khoi" class="" data-id="57279">
                    <i class="icontgdd-checkbox"></i>
                    Kim loại nguyên khối
                    </a>
                </div>
                <p class="doit"></p>
                <p class="cslder">
                    <span class="cswrap">
                    <span class="csdot"></span>
                    <span class="csdot"></span>
                    <span class="csdot"></span>
                    </span>
                </p>
            </div>
        </div>
        <div class="fl barpage">
            <a href="?s=moi-ra-mat" data-id="moi-ra-mat" class="">
            <i class="icontgdd-checkbox"></i> Mới
            </a>
            <a href="?s=tra-gop-0-phan-tram" data-id="tra-gop-0-phan-tram" class="">
            <i class="icontgdd-checkbox"></i> Trả góp 0%
            </a>
            <a href="?s=doc-quyen" data-id="doc-quyen" class="">
            <i class="icontgdd-checkbox"></i> Độc quyền
            <span class="n">MỚI</span>                </a>
        </div>
        <div class="fr sort">
            <span class="criteria">Sắp xếp</span>
            <div>
                <label class="closefilter"><i class="icontgdd-closefilter"></i></label>
                <a href="javascript:;" class="check" data-id="5"><i class="icontgdd-checklist"></i>Nổi bật nhất</a>
                <a href="javascript:;" data-id="6"><i class="icontgdd-checklist"></i>Bán chạy nhất</a>
                <a href="javascript:;" data-id="1"><i class="icontgdd-checklist"></i>Giá cao đến thấp</a>
                <a href="javascript:;" data-id="2"><i class="icontgdd-checklist"></i>Giá thấp đến cao</a>
            </div>
        </div>
        <choosed-filter/>
    </div>
</template>

<script>
import { CATEGORY_MODULE, LIST_CHOOSED_MANUFACTURERS, LIST_PRODUCTS, SET_FILTERED_LIST_PRODUCTS } from '@/store/module-types/category';
import { mapGetters } from 'vuex';
import ChoosedFilter from './choosed-filter/ChoosedFilter.vue';
import Manufacturer from './manufacturer/Manufacturer.vue';
import { manuFilter } from '@/design-patterns/chain-of-responsibilities/filters/manufacturer-filter';
import filter from '@/design-patterns/chain-of-responsibilities/filters';

export default {
    components: {
        Manufacturer,
        ChoosedFilter,
    },
    computed: {
        ...mapGetters(CATEGORY_MODULE, [
            LIST_CHOOSED_MANUFACTURERS,
            LIST_PRODUCTS,
        ])
    },
    watch: {
        LIST_CHOOSED_MANUFACTURERS: {
            deep: true,
            handler: function(values) {
                manuFilter.setListManufactures(values);
                this.$store.commit(`${CATEGORY_MODULE}/${SET_FILTERED_LIST_PRODUCTS}`, { values: filter.filter(this.LIST_PRODUCTS) });
            }
        }
    }
}
</script>