##### Table of Contents  
- [Tracking Events](#tracking-events)
    * [Khai báo tên các event như sau](#i-khai-báo-tên-các-event-như-sau)
    * [Khai báo các hàm để tracking](#ii-khai-báo-các-hàm-để-tracking)
    * [ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT](#iii-add_list_proucts_to_cart_tracking_event)
    * [REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT](#iv-remove_list_proucts_from_cart_tracking_event)
    * [CHECKOUT_TRACKING_EVENT](#v-checkout_tracking_event)
    * [PURCHASE_TRACKING_EVENT](#vi-purchase_tracking_event)
    * [VIEW_LIST_PRODUCTS_EVENT](#vii-view_list_products_event)
- [Google analytics](#google-analytics)
   * [ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT](#i-add_list_proucts_to_cart_tracking_event)
   * [REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT](#ii-remove_list_proucts_from_cart_tracking_event)
   * [CHECKOUT_TRACKING_EVENT](#iii-checkout_tracking_event)
   * [PURCHASE_TRACKING_EVENT](#iv-purchase_tracking_event)
   * [VIEW_LIST_PRODUCTS_EVENT](#v-view_list_products_event)


# Tracking Events
## I. Khai báo tên các event như sau
```javascript
const ADD_LIST_PRODUCTS_TO_CART_TRACKING_EVENT = 'addProductToCart';
const REMOVE_LIST_PRODUCTS_FROM_CART_TRACKING_EVENT = 'removeProductFromCart';
const CHECKOUT_TRACKING_EVENT = 'checkout';
const PURCHASE_TRACKING_EVENT = 'purchase';
const VIEW_LIST_PRODUCTS_EVENT = 'viewProduct';
```
## II. Khai báo các hàm để tracking
```javascript
// xem 1 hay nhiều sản phẩm
function trackingViewListProducts(data = []) {
    // google analytics
    // facebook analytics
    ...
}

// thêm 1 hay nhiều sản phẩm
function trackingAddListProductsToCart(data = []) {
    // google analytics
    // facebook analytics
    ...
}

// xóa 1 hay nhiều sản phẩm
function trackingRemoveListProductsFromCart(data = []) {
    // google analytics
    // facebook analytics
    ..
}

// đặt hàng 1 hay nhiều sản phẩm
function trackingCheckout(data) {
    // google analytics
    // facebook analytics
    ...
}

// thanh toán đơn hàng
function trackingPurchase(data) {
    // google analytics
    // facebook analytics
    ...
}
```
## III. ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT
### 1. Mô tả:
Thêm 1 hay nhiều sản phẩm vào giỏ hàng, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.ecommerceListProductsWillBeAddedToCart**
### 2. Trang áp dụng:
- Trang chi tiết sản phẩm (popup)
- Trang giỏ hàng
### 3. Ví dụ:
Thêm sản phẩm sau vào giỏ hàng:
```javascript
// khởi tạo dữ liệu
window.ecommerceListProductsWillBeAddedToCart = [{
    "productId":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "categoryName":"Tủ lạnh",
    "brandName":"Panasonic",
    "price":5090000,
    "quantity":1,
    "productCode":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommerceListProductsWillBeAddedToCart và tiến hành tracking
trackingAddListProductsToCart(window.ecommerceListProductsWillBeAddedToCart);
```
## IV. REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT
### 1. Mô tả:
Xóa 1 hay nhiều sản phẩm trong giỏ hàng, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.ecommerceListProductsWillBeRemovedFromCart**
### 2. Trang áp dụng
- Trang Giỏ hàng
### 3. Ví dụ:
Thêm sản phẩm sau vào giỏ hàng:
```javascript
window.ecommerceListProductsWillBeRemovedFromCart = [{
    "productId":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "categoryName":"Tủ lạnh",
    "brandName":"Panasonic",
    "price":5090000,
    "quantity":1,
    "productCode":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommerceListProductsWillBeRemovedFromCart và tiến hành tracking
trackingRemoveListProductsFromCart(window.ecommerceListProductsWillBeRemovedFromCart);
```
## V. CHECKOUT_TRACKING_EVENT
### 1. Mô tả:
Đặt hàng, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.ecommerceCheckoutInfo**
### 2. Trang áp dụng:
- Trang thankyou (Đặt hàng thành công)
### 3. Ví dụ:
Đặt hàng:
```javascript
window.ecommerceCheckoutInfo = {
    "orderId": 123456,
    "listProducts": [{
        "productId":"179592",
        "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
        "categoryName":"Tủ lạnh",
        "brandName":"Panasonic",
        "price":5090000,
        "quantity":1,
        "productCode":"3051097001512"
    }]
}
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommerceCheckoutInfo và tiến hành tracking
trackingCheckout(window.ecommerceCheckoutInfo)
```
## VI. PURCHASE_TRACKING_EVENT
### 1. Mô tả:
Thanh toán, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.ecommercePurchaseInfo**
### 2. Trang áp dụng:
- Trang thankyou (Đặt hàng thành công)
### 3. Ví dụ:
Thanh toán danh sách sản phẩm sau:
```javascript
window.ecommercePurchaseInfo = {
    "orderId": 123456,
    "listProducts": [{
        "productId":"179592",
        "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
        "categoryName":"Tủ lạnh",
        "brandName":"Panasonic",
        "price":5090000,
        "quantity":1,
        "productCode":"3051097001512"
    }]
}
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommercePurchaseInfo và tiến hành tracking
trackingPurchase(window.ecommercePurchaseInfo);
```
## VII. VIEW_LIST_PRODUCTS_EVENT
### 1. Mô tả:
Xem danh sách sản phẩm, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.ecommerceListProductsWillBeViewed**
### 2. Trang áp dụng:
Tất cả các trang có hiển thị thông tin sản phẩm:
- Trang chủ
- Trang chi tiết sản phẩm
- Trang giỏ hàng
- Trang thankyou (Đặt hàng thành công)
...
### 3. Ví dụ:
Xem danh sách sản phẩm sau:
```javascript
window.ecommerceListProductsWillBeViewed = [{
    "productId":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "categoryName":"Tủ lạnh",
    "brandName":"Panasonic",
    "price":5090000,
    "quantity":1,
    "productCode":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommerceListProductsWillBeViewed và tiến hành tracking
trackingViewListProducts(window.ecommerceListProductsWillBeViewed);
```
# Google analytics
## I. ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT
- Hàm ga tracking thêm danh sách sản phẩm vào giỏ hàng
```javascript
function gaAddListProductsToCart(data = []) {
    if (Array.isArray(data) === false || data.length === 0)
        return;
        
    // mapping
    const mappedListProducts = data.map(p => ({
        id: p.productId,
        name: p.name,
        category: p.categoryName,
        brand: p.brandName,
        price: p.price,
        quantity: p.quantity,
        variant: p.productCode
    }));
    // send event
    ...
}
```
- Chỉnh sửa hàm **trackingAddListProductsToCart**
```javascript
function trackingAddListProductsToCart(data = []) {
    // google analytics
    gaAddListProductsToCart(data);
    // facebook analytics
    ...
}
```
## II. REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT
- Hàm ga tracking xóa danh sách sản phẩm khỏi giỏ hàng
```javascript
function gaRemoveListProductsFromCart(data = []) {
    if (Array.isArray(data) === false || data.length === 0)
        return;
        
    // mapping
    const mappedListProducts = data.map(p => ({
        id: p.productId,
        name: p.name,
        category: p.categoryName,
        brand: p.brandName,
        price: p.price,
        quantity: p.quantity,
        variant: p.productCode
    }));
    // send event
    ...
}
```
- Chỉnh sửa hàm **trackingRemoveListProductsFromCart**
```javascript
function trackingRemoveListProductsFromCart(data = []) {
    // google analytics
    gaRemoveListProductsFromCart(data);
    // facebook analytics
    ...
}
```
## III. CHECKOUT_TRACKING_EVENT

## IV. PURCHASE_TRACKING_EVENT
## V. VIEW_LIST_PRODUCTS_EVENT
- Hàm ga tracking xem danh sách sản phẩm
```javascript
function gaViewListProducts(data = []) {
    if (Array.isArray(data) === false || data.length === 0)
        return;
        
    // mapping
    const mappedListProducts = data.map(p => ({
        id: p.productId,
        name: p.name,
        category: p.categoryName,
        brand: p.brandName,
        price: p.price,
        quantity: p.quantity,
        variant: p.productCode
    }));
    // send event
    ...
}
```
- Chỉnh sửa hàm **trackingViewListProducts**
```javascript
function trackingViewListProducts(data = []) {
    // google analytics
    gaViewListProducts(data);
    // facebook analytics
    ...
}
```
