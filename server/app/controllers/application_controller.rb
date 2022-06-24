class ApplicationController < ActionController::API
    include ActionController::Flash
    include ActionController::RequestForgeryProtection
    respond_to :json
    protect_from_forgery
    
end
