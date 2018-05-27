const sg = require('sendgrid')
const { Mail, Content, TrackingSettings, ClickTracking, Personalization } = sg.mail
const helper = sg.mail
const keys = require('../config/keys')

const FROM_EMAIL = 'no-reply@emailsurveys.com'
const MIME_TYPE = 'text/html'

class Mailer extends Mail {
  constructor({ subject, recipients }, content) {
    super()
    this.sendgrid = sg(keys.sendGridKey)
    this.from_email = new helper.Email(FROM_EMAIL)
    this.subject = subject
    this.body = new Content(MIME_TYPE, content)
    this.recipients = this.formatAddresses(recipients)

    this.addContent(this.body)
    this.addClickTracking()
    this.addRecipients()
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return helper.Email(email)
    })
  }

  addClickTracking() {
    const trackingSettings = new TrackingSettings()
    const clickTracking = new ClickTracking(true, true)

    trackingSettings.setClickTracking(clickTracking)
    this.addTrackingSettings(trackingSettings)
  }

  addRecipients() {
    const personalization = new Personalization()
    this.recipients.forEach(recipient => {
      personalization.addTo(recipient)
    })
    this.addPersonalization(personalization)
  }

  async send() {
    const request = this.sendgrid.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    })
    return this.sendgrid.API(request)
  }
}

module.exports = Mailer
