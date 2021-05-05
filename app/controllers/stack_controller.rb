class StackController < ApplicationController
  layout 'stack/application'
  def index; end

  def show()
    params[:page] = 'index' unless params[:page]   
    render 'stack/'+ params[:page]
  end
end
