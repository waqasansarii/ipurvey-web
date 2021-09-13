import React, { useLayoutEffect, useState } from 'react'
import img from '../../Assets/undraw_privacy_protection_nlwy@2x.png'
import './Privacy.css'
import SubNav from '../../Layout/SubNav'

const termsData = [
  {
    head: 'LLorem ipsum dolo',
    para:
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea',
    id: '01',
  },
  {
    head: 'OWNERSHIT,COPYRIGHT AND TRADEMARK NOTICES',
    para:
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea',
    id: '02',
    link: '',
  },
  {
    head: 'WARRANTY DISCLAIMER',
    para:
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea',
    id: '03',
  },
]

const Privacy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="terms_and_cond_container">
      <SubNav head="Privacy policy" />
      <div className="terms_and_cond_main_div privacy_md">
        <div className="terms_boxex_div privacy_scroll_div">
          <div className="terms_one_box_div">
            <div className="term_main ">
              {/* about us  */}
              <h6 className="term_note_para">About Us</h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  {' '}
                  iPurvey is a trading name of The Digital Purveyor Company
                  Limited. iPurvey will be a data controller of any personal
                  data it holds about you.
                </p>
                <p className="mt-3">
                  A data controller is an individual or organisation which
                  decides how your personal data will be used. The data
                  controller is referred to as “we”, “us” and “our” in this
                  privacy policy.
                </p>
                <p className="mt-3">
                  If you have any questions or require further information about
                  this Privacy Policy, please contact us by post at
                </p>
                <p className="mt-3">The Digital Purveyor Company Limited</p>
                <p>130 Old Street</p>
                <p>London</p>
                <p>England</p>
                <p>EC1V 9BD</p>
                <p>Email: hello@ipurvey.com</p>
              </div>
              <h6 className="term_note_para mt-3">
                Why a privacy policy is required
              </h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  Applicable Data Protection laws (including the General Data
                  Protection Regulation 2016 and the Data Protection Act 2018),
                  impose obligations on us as the data controller, when we
                  process (collect or create, hold, amend, share, use or erase)
                  your personal data, and give you the data subject, rights over
                  your personal data.
                </p>
                <p className="mt-3">
                  We are obliged to process your personal data fairly, lawfully
                  and in a transparent manner. This privacy policy meets that
                  obligation by explaining what personal data we will hold about
                  you, how we will process your personal data, why we process
                  your personal data and the lawful grounds on which we are
                  processing it. It also seeks to set out some of your legal
                  rights.
                </p>
                <p>
                  We may change this privacy policy in the future. If we make
                  any substantial changes and those changes materially affect
                  you, we will inform you of any changes before they take
                  effect.
                </p>
              </div>
              <h6 className="term_note_para mt-3">
                Legal grounds on which we will process your data
              </h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  We will only process your personal data if we have a reason to
                  do so and in line with regulation. We rely on the following
                  legal reasons when processing your personal data
                </p>
                <p className="mt-3">
                  You have consented to us processing your personal data for one
                  or more of the specified purposes
                </p>
                <p>
                  The purpose is necessary to enable us to enter a contract with
                  you The purpose is necessary to comply with our legal and
                  regulatory obligations
                </p>
                <p>
                  The purpose is necessary for our legitimate interest *
                  Legitimate interest for processing your personal data will
                  include to –
                </p>
                <p>Comply with our legal and contractual obligations</p>
                <p>Ensure best codes of practice</p>
                <p>Exercise our legal rights</p>
                <p>Meet your expectations of us</p>
                <p>Carry out analysis, modelling, and forecasting</p>
                <p>Manage risks to you and our business</p>
                <p>Keep our records complete and accurate</p>
                <p>
                  Contact customers who signed up to our service about other
                  products and services we offer
                </p>
                <p>
                  Ensure our business is profitable and has adequate levels of
                  capital and facilitate the growth of our business
                </p>
              </div>
              <h6 className="term_note_para mt-3">
                Sending your personal data outside the United Kingdom and the
                European Economic Area
              </h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  If you choose not to give us the information requested as part
                  of subscribing to our service, it may prevent us from being
                  able to request a travel disruption compensation claim on your
                  behalf, from your travel operator. It may also affect our
                  ability to meet our contractual or legal obligations.
                </p>
              </div>
              <h6 className="term_note_para mt-3">How to complain</h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  If you are unsatisfied with the outcome of your request to
                  exercise your rights, or how we handle your personal data then
                  please let us know.
                </p>
                <p className="mt-3">
                  You are also entitled to complain to the Information
                  Commissioner’s Office (Information Commissioner’s Office
                  Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF. Email:
                  Casework@ico.org.uk Tel: 0303 123 1113
                </p>
              </div>
              <h6 className="term_note_para mt-3">
                What types of personal data we hold about you
              </h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  We may process a range of data about you including the
                  following
                </p>
                <p className="mt-3">Individual</p>
                <p className="mt-1">Name</p>
                <p className="mt-1">Address</p>
                <p className="mt-1">
                  Other contact details (including email and telephone numbers
                  Finances
                </p>
                <p className="mt-3">
                  Bank accounts including payment information
                </p>
                <p>Existing transaction</p>
                <p className="mt-3">
                  Existing travel disruption compensation request and/or travel
                  booking details.
                </p>
                <p>Preferences</p>
                <p className="mt-3">Your communications channel preference</p>
                <p>Yur marketing communication preference</p>
                <p>Devices and Technology</p>
                <p className="mt-3">
                  Device fingerprint (including IP address, type and version of
                  browser, geographical location)
                </p>
                <p>Correspondence and communication</p>
                <p className="mt-3">Recordings of your calls to and from us</p>
                <p>Transcript of live chat with us</p>
              </div>
              <h6 className="term_note_para mt-3">How long we will hold your data for</h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  We will usually keep your personal data for 6 years.
                </p>
                <p className="mt-3">
                  We may retain the data for longer where it is necessary for us
                  to do so to meet our legal or regulatory obligations, or for
                  research purposes or technical reasons.
                </p>
              </div>
            </div>
          </div>
          <div className="terms_box_two_scroll">
            <div className="privacy_about_you">
              <h6 className="term_note_para">About You</h6>
              <div className="privacy_para_div">
                <p>
                  {' '}
                  This privacy policy applies to the following types of
                  individual:
                </p>
                <p className="mt-3">
                  A person whose personal data we process as part of subscribing
                  to or using our service
                </p>
                <p className="mt-1">
                  Within this privacy policy, each such person is referred to as
                  “you” and “your”.
                </p>
              </div>
              <h6 className="mt-3">Your legal rights</h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  In addition to your right to be informed which this Privacy
                  Policy addresses, you have several rights over your personal
                  data provided to and controlled by us. These include your
                  rights to
                </p>
                <p className="mt-1">
                  Request access to the personal data we hold for you, this is
                  called the right to access
                </p>
                <p className="mt-1">
                  Request our use of the personal data we hold for you is
                  limited, this is called right to restriction
                </p>
                <p className="mt-1">
                  Request we transfer personal data we hold for you to another
                  person, this is called the right to portability
                </p>
                <p className="mt-1">
                  Request we correct incomplete or inaccurate personal data we
                  hold for you, this is called right to rectification
                </p>
                <p className="mt-1">
                  Request we stop using your data, this is called the right to
                  object Request we delete personal data we hold for you, this
                  is called the right to erasure
                </p>
                <p className="mt-1">
                  The extent of these rights is limited by law and we may not
                  act on part or all your request(s) where the right(s) are not
                  applicable. If we do not act on your request, we will explain
                  our reasons for not doing so when responding to your request.
                </p>
                <p className="mt-3">
                  If you require further information about how we handle your
                  personal data in addition to the information included in this
                  policy, or wish to make a request to exercise any of your
                  rights under applicable Data Protection laws, please contact
                  our Data Protection Officer at the address listed in the
                  contact us section above.
                </p>
              </div>
              <h6 className="mt-3">Opt out of providing us personal data</h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  If you choose not to give us the information requested as part
                  of subscribing to our service, it may prevent us from being
                  able to request a travel disruption compensation claim on your
                  behalf, from your travel operator. It may also affect our
                  ability to meet our contractual or legal obligations.
                </p>
              </div>
              <h6 className="mt-3">
                Sending your personal data outside the United Kingdom and the
                European Economic Area
              </h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  Your personal data may be processed or transferred outside the
                  United Kingdom and the European Economic Area.
                </p>
                <p className="mt-3">
                  If you require further information as to where your personal
                  data is transferred to, and the measures we have implemented
                  to safeguard that information, please contact us on the
                  address listed in the contact us section above.
                </p>
              </div>
              <h6 className="mt-3">How we obtain your personal data</h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  We obtain personal data about you from the following sources,
                  in addition to creating data about you during travel
                  disruption monitoring and compensation request initiation.
                </p>
                <p className="mt-3">You</p>
                <p className="mt-1">Your travel operator</p>
                <p className="mt-1">
                  Your accounting software provider where applicable
                </p>
                <p className="mt-1">
                  Your bank or building society where applicable
                </p>
              </div>
              <h6 className="mt-3">How we use your data</h6>
              <div className="privacy_para_div">
                <p className="mt-3">
                  Travel disruption claim request processing
                </p>
                <p className="mt-3">
                  Requesting payment from your bank or building society for your
                  travel booking on behalf of your travel operator and/or
                  payment for iPuvey claim request service
                </p>
                <p className="mt-1">
                  Requesting travel disruption compensation from your travel
                  operator on your behalf
                </p>
                <p className="mt-1">Managing our relationship with you</p>
                <p className="mt-3">Contacting and corresponding with you</p>
                <p className="mt-1">
                  Correcting inaccurate data held by us and/or improving the
                  accuracy and quality of the data held by us.
                </p>
                <p className="mt-1">
                  Updating you about products and services offered by us which
                  we think may be of interest to you
                </p>
                <p className="mt-1">
                  Ensuring we comply with our legal, contractual, and regulatory
                  obligations, codes of practice and to be able to run our
                  business
                </p>
                <p className="mt-3">
                  Complying with legal obligations imposed on us
                </p>
                <p className="mt-1">Seeking advice from our advisers</p>
                <p className="mt-1">
                  Manage our resources, resources, risk, and business
                  performance Develop and improve our products and services
                </p>
                <p className="mt-3">
                  Test our products and services including training staff to
                  ensure we meet high standard of service
                </p>
                <p className="mt-1">
                  Obtaining feedback on existing products and services we offer
                  Market research for the improvement or introduction of new
                  products and services
                </p>
                <p className="mt-1">Analysis , modelling, and forecasting</p>
                <p className="mt-3">
                  Predicting your current and/or future travel preferences
                  Complaints and disputes dispute management
                </p>
                <p className="mt-3">
                  Documenting facts evidence to enable investigating and
                  responding to complaints and disputes, allowing us to offer
                  the highest standard of service
                </p>
                <p className="mt-1">Marketing</p>
                <p className="mt-3">
                  Contacting you about product and services via:
                </p>
                <p className="mt-1">Post</p>
                <p className="mt-1">Email</p>
                <p className="mt-1">Telephone</p>
                <p className="mt-1">Online or interactive media</p>
              </div>
              <h6 className="mt-3">Who we share your data with</h6>
              <div className="privacy_para_div">
                <p className="mt-3">We may share your personal data with</p>
                <p className="mt-3">You</p>
                <p className="mt-1">
                  Any other person you ask us to provide information to
                </p>
                <p className="mt-1">Our insurers</p>
                <p className="mt-1">Your bank or building society</p>
                <p className="mt-1">
                  Our bank, BACS, and the Direct Debit Scheme.
                </p>
                <p className="mt-1">
                  The Financial Ombudsman Service, courts and any arbitrator or
                  adjudicator of a dispute involving us
                </p>
                <p className="mt-1">
                  Statutory and regulatory bodies including tax authorities,
                  HMRC, Information Commissioner’s Office, Prudential Regulation
                  Authority, Financial Conduct Authority, European Central Bank
                  and Bank of England
                </p>
                <p className="mt-1">Law enforcement agencies</p>
                <p className="mt-1">Market research companies</p>
                <p className="mt-1">
                  Our investors, prospective investors and their advisers or any
                  business with which we are seeking to merge and their advisers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="terms_two_div">
          <div className="terms_two_box_para_div privacy_img_div">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
