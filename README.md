# Tag Manager Events
## ADD_LIST_PROUCTS_TO_CART_TRACKING_EVENT
Thêm 1 hay nhiều sản phẩm vào giỏ hàng, trước khi gọi tới *Tag Manager* thì cần thiết lập giá trị cho 1 biến **window.__gaListProductsWillBeAddedToCart__**
- Ví dụ: thêm sản phẩm sau vào giỏ hàng:
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
## REMOVE_LIST_PROUCTS_FROM_CART_TRACKING_EVENT
Xóa 1 hay nhiều sản phẩm vào giỏ hàng
## CHECKOUT_TRACKING_EVENT
## PURCHASE_TRACKING_EVENT
## VIEW_LIST_PRODUCTS_EVENT
