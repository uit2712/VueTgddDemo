# Tag Manager Events
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
## II. ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT
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
    "id":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "category":"Tủ lạnh",
    "brand":"Panasonic",
    "price":5090000,
    "quantity":1,
    "variant":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommerceListProductsWillBeAddedToCart và tiến hành tracking
trackingAddListProductsToCart(window.ecommerceListProductsWillBeAddedToCart);
```
## III. REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT
### 1. Mô tả:
Xóa 1 hay nhiều sản phẩm trong giỏ hàng, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.ecommerceListProductsWillBeRemovedFromCart**
### 2. Trang áp dụng
- Trang Giỏ hàng
### 3. Ví dụ:
Thêm sản phẩm sau vào giỏ hàng:
```javascript
window.ecommerceListProductsWillBeRemovedFromCart = [{
    "id":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "category":"Tủ lạnh",
    "brand":"Panasonic",
    "price":5090000,
    "quantity":1,
    "variant":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommerceListProductsWillBeRemovedFromCart và tiến hành tracking
trackingRemoveListProductsFromCart(window.ecommerceListProductsWillBeRemovedFromCart);
```
## IV. CHECKOUT_TRACKING_EVENT
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
        "id":"179592",
        "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
        "category":"Tủ lạnh",
        "brand":"Panasonic",
        "price":5090000,
        "quantity":1,
        "variant":"3051097001512"
    }]
}
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommerceCheckoutInfo và tiến hành tracking
trackingCheckout(window.ecommerceCheckoutInfo)
```
## V. PURCHASE_TRACKING_EVENT
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
        "id":"179592",
        "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
        "category":"Tủ lạnh",
        "brand":"Panasonic",
        "price":5090000,
        "quantity":1,
        "variant":"3051097001512"
    }]
}
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommercePurchaseInfo và tiến hành tracking
trackingPurchase(window.ecommercePurchaseInfo);
```
## VI. VIEW_LIST_PRODUCTS_EVENT
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
    "id":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "category":"Tủ lạnh",
    "brand":"Panasonic",
    "price":5090000,
    "quantity":1,
    "variant":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.ecommerceListProductsWillBeViewed và tiến hành tracking
trackingViewListProducts(window.ecommerceListProductsWillBeViewed);
```
