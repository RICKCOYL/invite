class InvitesController < ApplicationController
  before_action :set_invite, only: %i[ show update destroy ]

  # GET /invites
  def index
    @invites = Invite.all

    render json: @invites
  end

  # GET /invites/1
  def show
    render json: @invite
  end

  # POST /invites
  def create
    @invite = Invite.create(invite_params)
    
    if @invite.save
      InviteMailer.with(invite: @invite).invite_sent.deliver_later
      render json: @invite, status: :created
    else
      render json: @invite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /invites/1
  def update
    if @invite.update(invite_params)
      render json: @invite
    else
      render json: @invite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /invites/1
  def destroy
    @invite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invite
      @invite = Invite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def invite_params
      params.require(:invite).permit(:email, :user_id)
    end
end
