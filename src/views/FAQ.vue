<template>
  <div class="flex-row">
    <div>
      <h3 style="text-align: center">FREQUENTLY ASKED QUESTIONS - NIP</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How can I download previous NIP settlements of reports of my Financial Institution?</div>
          <p style="color: #1a9945">
            All connecting Institutions must connect to the NIP Settlement Report URL, and login credentials will be made available to the Profiled Users.
            Financial Institutions are expected to download their settlement reports on a daily basis as made available in the two settlement cycles. Note that NIP settlement reports
            are ONLY available for one month. Settlement reports after a month will be made available for download at a fee.
          </p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">What is the transaction fee per NIP transaction?</div>
          <p style="color: #1a9945">The transaction fee is 5.50 NGN (Five naira fifty kobo only).</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How is the Billing of NIP transactions implemented for all Institutions?</div>
          <p
            style="color: #1a9945"
          >Billing is done on a weekly basis, specifically between 14:00:00 of the previous Friday and 13:59:59 of the current Friday.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How is settlement passed against a non DMB?</div>
          <p
            style="color: #1a9945"
          >Settlements is passed against a non-DMB via their Settlement Bank.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >An erroneous transfer was made to a Destination Institution. How do I recover funds?</div>
          <p style="color: #1a9945">
            Destination Institution is notified to place a lien on the account and asked to secure approval from Customer for the disputed transaction to be logged by
            the Source Institution for return, so that Destination Institution can acknowledge the Dispute for Reversal to take place.
          </p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Why am I unable to see my session ID on the NIP DRS portal?</div>
          <p
            style="color: #1a9945"
          >NIP transactions on the DRS portal are archived after some days. Kindly log request to make the Session ID available on the helpdesk.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Why is there sometimes a delay in crediting Customers' account for successful NIP transfers?</div>
          <p style="color: #1a9945">This might be due to either of the following:</p>
          <ul style="color: #1a9945">
            <li>The account type might not have the capabilities to receive funds</li>
            <li>There might have been a technical glitch at the beneficiary bank that caused this.</li>
          </ul>
          <p
            style="color: #1a9945"
          >Log such transactions with the complete Session ID on the helpdesk for further engagement with the beneficiary bank.</p>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FREQUENTLY ASKED QUESTIONS - POS</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">On what group key is my POS TID?</div>
          <p
            style="color: #1a9945"
          >This can be checked on the EPMS service portal using the steps below:</p>
          <ul>
            <li>Log onto the EPMS service portal</li>
            <li>Click on "List POS activity"</li>
            <li>Paste your TID in the Card acceptor terminal ID field and click on inquiry</li>
            <li>Click on the TID and scroll down to POS data</li>
            <li>The field "POS group ID" is your Terminals group key</li>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >What is the duration of POS transaction report availability on the TLM portal?</div>
          <p style="color: #1a9945">
            POS transaction reports are available on the TLM portal for a period of 5 days and downloadable within 3 days. Merchants and Users are
            advised to keep a daily download record of transactions for reference purposes.
          </p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How do I convert a .csv file to excel to get complete transaction report?</div>
          <p style="color: #1a9945">
            The report would have been provided in a .csv format (due to the quantity of data contained in the file). Kindly follow the detailed
            steps below to convert from csv to excel:
          </p>
          <ul>
            <li>Open a blank excel sheet.</li>
            <li>Click on "Data" and "get additional data from Text".</li>
            <li>Select the .csv file in your computer location. A dialog box will open up.</li>
            <li>Select Delimited and click Next.</li>
            <li>Tick Comma and Next.</li>
            <li>Tick Text Box.</li>
            <li>Hold Shift and click on the last column to highlight all data.</li>
            <li>Click Finish.</li>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >When can an acquirer request change of a terminal's PTSP?</div>
          <p
            style="color: #1a9945"
          >PTSP change can be logged on the NIBSS Helpdesk for processing whenever it is required.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">What are the requirements for PTSP change?</div>
          <p style="color: #1a9945">Below is a list of requirements for PTSP change:</p>
          <ul>
            <li>Full details of affected terminals in the complete terminal upload format.</li>
            <li>A letter of authorization duly signed off by authorized Bank signatories.</li>
            <li>The old and new PTSPs MUST be copied in the change email request sent to NIBSS Client Services contactcenter@nibss-plc.com.ng>.</li>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">When is PTSP change effected?</div>
          <p style="color: #1a9945">PTSP change is processed once a month on the first working day.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How do I confirm that the PTSP change has been effected?</div>
          <p
            style="color: #1a9945"
          >A feedback will be provided upon conclusion with exceptions if any.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >What if I'm unable to view the effected changes on the TLM and service Portal?</div>
          <p style="color: #1a9945">Kindly log the complaint on the NIBSS Helpdesk for resolution.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How can I resolve the "routing error" on my POS terminal?</div>
          <p
            style="color: #1a9945"
          >Kindly confirm the point where error occurs and do the following.</p>
          <ul>
            <li>
              <strong>At log on point</strong> - Contact your PTSP to update the application running on the terminal
            </li>
            <li>
              <strong>At Key exchange</strong> - Confirm from the EPMS Service portal if the terminal is already on the requested group key.
              If yes, check the "last connected date". If no date is shown, log a request on helpdesk for a change of group key.
            </li>
            <li>
              <strong>At transaction point</strong> - Log onto the Service/TLM portal to confirm that you can view the stated transactions on the portal.
            </li>
            <p style="color: #1a9945">
              Once you can confirm option (3) above, raise a request with the full details of the terminal in an upload format for further investigation
              by our support team.
            </p>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >What can be done to resolve the error "Issuer or Switch inoperative error" on any terminal?</div>
          <p style="color: #1a9945">
            This error could either be from the issuer of the card or the switch that is processing that transaction.
            Kindly engage both parties for resolution
          </p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >What is the new Merchant Service Charge (MSC) fee sharing formula?</div>
          <p
            style="color: #1a9945"
          >The new MSC fee is 0.5% and is shared among the stakeholders as stated in the below:</p>
          <ul style="font-weight: bold;">
            <li>ISSUER - 30%</li>
            <li>ACQUIRER - 7.5%</li>
            <li>PTSA - 7.5%</li>
            <li>TERMINAL OWNER - 25%</li>
            <li>SWITCH - 5%</li>
            <li>PTSP - 25%</li>
          </ul>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - NIBSSPAY</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How do I download the report for a batch on NIBSSPAY?</div>
          <p
            style="color: ##0070c0"
          >This can be downloaded from the NIBSSPAY portal following the steps below:</p>
          <ul>
            <li>Log onto the NIBSSPAY portal as an operator</li>
            <li>Click on "operator"</li>
            <li>Select the date range on "payment date"</li>
            <li>Click on the search button</li>
            <li>Download the batch report to excel format by clicking on the "xls" button</li>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How do I reset my password on NIBSSPAY?</div>
          <p
            style="color: ##0070c0"
          >Password reset on NIBSSPAY can be done following the steps below:</p>
          <ul style="color: ##0070c0;">
            <li>Access the NIBSSPAY portal</li>
            <li>Click on "forget your password"</li>
            <li>Input your registered email address</li>
            <li>A password reset e-mail is sent to your e-mail address</li>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How do I download OFI (Other Financial Institutinos) credit schedule on NIBSSPAY?</div>
          <p
            style="color: ##0070c0"
          >OFI credit schedule can be downloaded on NIBSSPAY following the steps below:</p>
          <ul style="color: ##0070c0">
            <li>Log onto the NIBSSPAY portal as an OFI credit officer.</li>
            <li>Click on "OFI CREDITS".</li>
          </ul>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - NIBSS HELPDESK</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How can I gain access to the NIBSS Helpdesk?</div>
          <p
            style="color: #2386ca6"
          >Click on the "new user? Sign up" option on the landing page of the Helpdesk and follow the prompt.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How can I reset my password on NIBSS Helpdesk?</div>
          <p
            style="color: #1a9945"
          >Make use of the "Forgot password" option on the Helpdesk portal to reset your login details.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How do I know the TAT for my logged request?</div>
          <p
            style="color: #1a9945"
          >Check information on this in the due date field of the request. This is also contained in the email auto notification</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How do I confirm the status of my request on the NIBSS Helpdesk?</div>
          <p
            style="color: #1a9945"
          >You can track the status of your request on the Helpdesk by following the steps below:</p>
          <ul>
            <li>Log onto the Helpdesk</li>
            <li>All pending requests will be displayed under "My Tickets" while concluded requests will be displayed under "Recently Closed".</li>
            <li>Click on the specific request to be tracked to view details.</li>
            <li>Resolution comment is found under "Notes".</li>
          </ul>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - mCASH</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How many digits does a Merchant code have?</div>
          <p style="color: ###845fbc;">A merchant code has 8 unique digits.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >What other way can a merchant get his/her merchant code without recourse to the bank?</div>
          <p
            style="color: ###845fbc;"
          >The merchant can retrieve the merchant code using the USSD code *402*2# with his/her registered phone number.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Can a big Supermarket (Shoprite, Spar, HubMart, Grand Square, etc.) use mCash?</div>
          <p
            style="color: ###845fbc;"
          >Yes, mCash is for any business (Small, Medium, and Large scale) that desires a reliable, efficient and convenient payment channel</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How can customers pay a merchant using mCash?</div>
          <p
            style="color: ###845fbc;"
          >By dialing the USSD code "*402*merchant code*amount#" on the phone number registered to the customer's bank account.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >When do merchant get settlement for transactions done on mCash?</div>
          <p
            style="color: ###845fbc;"
          >mCash settlement is done instantly as value is received instantly into the merchant's account.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How can a merchant know that a mCash transaction is successful?</div>
          <p
            style="color: ###845fbc;"
          >A transaction notification alert will be sent to the merchant (seller) and the customer (buyer).</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How are mCash disputed transactions handled?</div>
          <p
            style="color: ###845fbc;"
          >The merchant or customer can contact their respective bank to report the disputed transaction.</p>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - EPCCOS</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How much is the service charge on EPCCOS portal?</div>
          <p style="color: ###845fbc;">N70.00 (Seventy naira only).</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">Can I add a new employer without employer code?</div>
          <p style="color: ###845fbc;">No, this cannot be done..</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">Why am I unable to uploade schedules?</div>
          <p style="color: ###845fbc;">
            This happens when one or more protocols are not adhered to. Kindly ensure all rules for upload have been followed. If this persists, kindly click
            on the error message provided to see the reason for failure.
          </p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">Which PFCs are listed on EPCCOS?</div>
          <p style="color: ###845fbc;">There are 4 PFCs on EPCCOS:</p>
          <ul>
            <li>Zenith custodian</li>
            <li>Diamond custodian</li>
            <li>UBA custodian</li>
            <li>First custodian</li>
          </ul>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - eREFERENCE</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Why does an account number not populate customer's details?</div>
          <p style="color: ###845fbc;">
            If a customer's account details is not populating, it means the account is not on ICAD (Industry Customer Account Database).
            The IT team in your institution should update the account on ICAD.
          </p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How many users is a bank allowed to have on the e-Reference portal?</div>
          <p style="color: ###845fbc;">As much as the bank requires.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >What is the file size and type of references/mandate that is acceptable?</div>
          <p style="color: ###845fbc;">400kb/ Portable Document Format (PDF)</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">Why is a user unable to authorize references?</div>
          <p
            style="color: ###845fbc;"
          >If the bank operator has not submitted reference, the authorizer will be unable to authorize such references.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >As a bank branch user, can the user add branches?</div>
          <p
            style="color: ###845fbc;"
          >No, the user cannot add branches. Kindly refer to your Bank Administrator for such request.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How can I generate pending mandates for my bank?</div>
          <p
            style="color: ###845fbc;"
          >NIBSS Administrators/portal management team generates this report from the backend for the user upon request.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How can I generate a report containing information on rejected references?</div>
          <p style="color: ###845fbc;">Kindly log this request on the NIBSS Helpdesk.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Why don't I get automatic password reset notification?</div>
          <p
            style="color: ###845fbc;"
          >This should be due to a network challenges. Whenever this occurs, kindly log on the NIBSS Helpdesk for a manual reset.</p>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - NACS</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How do I download old reports on the Central Clearing (NACS) Application?</div>
          <p
            style="color: ###845fbc;"
          >You can download old reports on the Central Clearing (NACS) application by following the steps below:</p>
          <ul>
            <li>Log on to the NACS Portal</li>
            <li>Go to the report menu and select the required report</li>
            <li>Select the Archive DB radio button, required date and settlement time</li>
            <li>Click on view report and wait for the report to be displayed.</li>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How do I reset my password on the NACS portal?</div>
          <p
            style="color: ###845fbc;"
          >You can do a self password reset on the NACS portal following the steps below:</p>
          <ul>
            <li>Browse to the Home page of the NACS portal and click forgot password</li>
            <li>Input your username and continue.</li>
            <li>A link will be sent to your email that will enable you change to a new password.</li>
          </ul>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - AUTHORIZED SIGNATORY VERIFICATION</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Where can I get the list of my institutions users/Authorized Bank signatories?</div>
          <p
            style="color: ###845fbc;"
          >This request can be handled by NIBSS admin. Kindly make your request via the NIBSS Helpdesk.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">Can I change the role of a user?</div>
          <p
            style="color: ###845fbc;"
          >No, you cannot change user role yourself. Kindly log this on NIBSS Helpdesk.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Can I grant access to our offshore branches to view Authorized Signatories?</div>
          <p
            style="color: ###845fbc;"
          >Yes, you can grant foreign branches access to the portal in line with your internal/banking access control.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">What should I do if I forget my password?</div>
          <p style="color: ###845fbc;">Kindly log for password reset on NIBSS Helpdesk.</p>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - CENTRAL MANDATORY MANAGEMENT SYSTEM</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How do I download transaction reports on CMMS?</div>
          <p
            style="color: ###845fbc;"
          >Transaction reports can be downloaded on CMMS using the steps below:</p>
          <ul>
            <li>Log on to the CMMS portal</li>
            <li>Click on 'Mandate'</li>
            <li>Click on transaction report</li>
            <li>Select date range on date created and download report to csv, pdf or excel.</li>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How do I create a mandate on CMMS?</div>
          <p style="color: ###845fbc;">Mandates can be created on CMMS following the steps below:</p>
          <ul>
            <li>Biller initiator clicks on "Mandate -> Create" tab on the menu bar and the create mandate page is displayed.</li>
            <li>Initiator enters the subscriber's mandate code which the biller uses to identify its customer.</li>
            <li>
              Other details such as Product/Service, Amount, Validity date range, Mandate Image (JPG, PNG, PDF file types acceptable with a max size of 2.5MB),
              Customer Bank, Account Number (Must be NUBAN), Narration (only the first 25 characters will be captured for the payment) and other personal data
              (Name, address, email and phone number) are captured on the form.
            </li>
            <li>Click "Save" to commit the information. At this point, the mandate has been submitted to the next approver in the approval chain.</li>
            <li>A successful message is displayed to the biller initiator that the mandate has been created.</li>
          </ul>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Can I grant access to our offshore branches to view Authorized Signatories?</div>
          <p
            style="color: ###845fbc;"
          >Yes, you can grant foreign branches access to the portal in line with your internal/banking access control.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">What should I do if I forget my password?</div>
          <p style="color: ###845fbc;">Kindly log for password reset on NIBSS Helpdesk.</p>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - e-BILLSPAY</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">Why are E-BillsPay reversals not instant?</div>
          <p style="color: ###845fbc;">
            They are not instant because NIBSS has to get across to the biller to confirm the transaction, validate the reason for the reversal
            and give approval for debit to Merchant account.
          </p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >What am I to do after receiving E-BillsPay reversal approval?</div>
          <p
            style="color: ###845fbc;"
          >Engage the beneficiary bank with the biller's approval document and log on DRS for the transaction to be reversed.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >Why am I unable to print transaction receipt for a successful E-BillsPay transaction?</div>
          <p
            style="color: ###845fbc;"
          >This may be due to network time-out or a technical glitch. Kindly log this as a request for the receipt on the NIBSS Helpdesk.</p>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <div>
      <h3 class="text-center">FAQs - e-PASSPORT</h3>
      <vs-collapse>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div
            slot="header"
            style="color: #ff0000"
          >How many administrators/users can a bank/branch have?</div>
          <p style="color: ###845fbc;">As many as is required.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">How can a Bank Admin issue a PIN to a user?</div>
          <p
            style="color: ###845fbc;"
          >Once the Admin inputs the details of the user in the required fields and clicks ok, a GUID PIN is generated to allow the user continue his/her registration process.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">As a Bank Admin user, can I add branches?</div>
          <p
            style="color: ###845fbc;"
          >No, only NIBSS Admin users can add branches. Kindly log this on NIBSS Helpdesk for this request.</p>
        </vs-collapse-item>
        <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
          <div slot="header" style="color: #ff0000">What is the service charge per verification?</div>
          <p style="color: ###845fbc;">The service charge is 35NGN.</p>
        </vs-collapse-item>
      </vs-collapse>
    </div>
  </div>
</template>