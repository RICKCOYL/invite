require "test_helper"

class InvitesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @invite = invites(:one)
  end

  test "should get index" do
    get invites_url, as: :json
    assert_response :success
  end

  test "should create invite" do
    assert_difference("Invite.count") do
      post invites_url, params: { invite: { email: @invite.email, user_id: @invite.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show invite" do
    get invite_url(@invite), as: :json
    assert_response :success
  end

  test "should update invite" do
    patch invite_url(@invite), params: { invite: { email: @invite.email, user_id: @invite.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy invite" do
    assert_difference("Invite.count", -1) do
      delete invite_url(@invite), as: :json
    end

    assert_response :no_content
  end
end
