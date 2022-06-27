class InviteMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.invite_mailer.invite_sent.subject
  #
  def invite_sent
    @greeting = "Hi"
    @invite = params[:invite]

    mail(
      to: email_address_with_name(@invite.email, @invite.email), 
      subject: "Invite to join the team"
    )
  end
end
