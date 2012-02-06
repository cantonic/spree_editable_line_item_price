Spree::Admin::LineItemsController.class_eval do

  def update
    if @line_item.update_attributes(params[:line_item])
  		respond_with(@line_item) do |format|
        format.html { render :partial => 'spree/admin/orders/form', :locals => { :order => @order.reload }, :layout => false}
      end
    else
      respond_with(@line_item) do |format|
        format.html { render :partial => 'spree/admin/orders/form', :locals => { :order => @order.reload }, :layout => false}
      end
    end
  end
end