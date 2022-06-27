require "test_helper"

class InviteMailerTest < ActionMailer::TestCase
  test "invite_sent" do
    mail = InviteMailer.invite_sent
    assert_equal "Invite sent", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
