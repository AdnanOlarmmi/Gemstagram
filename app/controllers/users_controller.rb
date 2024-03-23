class UsersController < ApplicationController
    before_action :set_user, only: [:show]

    def show    
    end

    def index
        if params[:search_query].present?
            @users = User.where("LOWER(username) LIKE ?", "%#{params[:search_query].downcase}%")
        else
            @users = []
        end

        if turbo_frame_request?
            render partial: "layouts/search_results", locals: {users: @users} 
        end
    end

    private

    def set_user
        @user = User.find(params[:id])
    end
end