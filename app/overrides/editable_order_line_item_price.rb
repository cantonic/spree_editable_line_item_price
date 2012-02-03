Deface::Override.new(:virtual_path => "spree/admin/orders/_line_item",
                     :name => "editable_order_line_item_price",
                     :replace_contents => "[data-hook='admin_order_form_line_item_row']/td.price",
                     :text => '<%=f.text_field :price, :style => "width:60px;", :class => "price" %>')