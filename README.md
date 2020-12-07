# Tag Manager Events
## I. Khai báo tên các event như sau
```javascript
const ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT = 'ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT';
const REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT = 'REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT';
const CHECKOUT_TRACKING_EVENT = 'CHECKOUT_TRACKING_EVENT';
const PURCHASE_TRACKING_EVENT = 'PURCHASE_TRACKING_EVENT';
const VIEW_LIST_PRODUCTS_EVENT = 'VIEW_LIST_PRODUCTS_EVENT';
```
## II. ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT
### 1. Mô tả:
Thêm 1 hay nhiều sản phẩm vào giỏ hàng, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.__gaListProductsWillBeAddedToCart__**
### 2. Trang áp dụng:
- Trang chi tiết sản phẩm (popup)
- Trang giỏ hàng
### 3. Ví dụ:
Thêm sản phẩm sau vào giỏ hàng:
```javascript
window.__gaListProductsWillBeAddedToCart__ = [{
    "id":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "category":"Tủ lạnh",
    "brand":"Panasonic",
    "price":5090000,
    "quantity":1,
    "variant":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.__gaListProductsWillBeAddedToCart__ và tiến hành tracking
```
## III. REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT
### 1. Mô tả:
Xóa 1 hay nhiều sản phẩm trong giỏ hàng, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.__gaListProductsWillBeRemovedFromCart__**
### 2. Trang áp dụng
- Trang Giỏ hàng
### 3. Ví dụ:
Thêm sản phẩm sau vào giỏ hàng:
```javascript
window.__gaListProductsWillBeRemovedFromCart__ = [{
    "id":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "category":"Tủ lạnh",
    "brand":"Panasonic",
    "price":5090000,
    "quantity":1,
    "variant":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.__gaListProductsWillBeRemovedFromCart__ và tiến hành tracking
```
## IV. CHECKOUT_TRACKING_EVENT
### 1. Mô tả:
Đặt hàng, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.__gaListProductsWillBeCheckedOut__**
### 2. Trang áp dụng:
- Trang thankyou (Đặt hàng thành công)
### 3. Ví dụ:
Đặt hàng:
```javascript
window.__gaListProductsWillBeCheckedOut__ = [{
    "id":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "category":"Tủ lạnh",
    "brand":"Panasonic",
    "price":5090000,
    "quantity":1,
    "variant":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.__gaListProductsWillBeCheckedOut__ và tiến hành tracking
```
## V. PURCHASE_TRACKING_EVENT
### 1. Mô tả:
Thanh toán, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.__gaListProductsWillBePurchased__**
### 2. Trang áp dụng:
- Trang thankyou (Đặt hàng thành công)
### 3. Ví dụ:
Thanh toán danh sách sản phẩm sau:
```javascript
window.__gaListProductsWillBePurchased__ = [{
    "id":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "category":"Tủ lạnh",
    "brand":"Panasonic",
    "price":5090000,
    "quantity":1,
    "variant":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.__gaListProductsWillBePurchased__ và tiến hành tracking
```
## VI. VIEW_LIST_PRODUCTS_EVENT
### 1. Mô tả:
Xem danh sách sản phẩm, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.__gaListProductsWillBeViewed__**
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
window.__gaListProductsWillBeViewed__ = [{
    "id":"179592",
    "name":"Tủ lạnh Panasonic Inverter 234 lít NR-BL267PKV1",
    "category":"Tủ lạnh",
    "brand":"Panasonic",
    "price":5090000,
    "quantity":1,
    "variant":"3051097001512"
}]
// gọi event tracking của tag manager tại đây => trên event đọc dữ liệu từ biến window.__gaListProductsWillBeViewed__ và tiến hành tracking
```
