# Preview all emails at http://localhost:3000/rails/mailers/invite_mailer
class InviteMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/invite_mailer/invite_sent
  def invite_sent
    InviteMailer.with(invite: Invite.first).invite_sent
  end

end
