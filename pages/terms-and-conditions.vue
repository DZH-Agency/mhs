<template>
  <div>
    <portal-target name="app" />
    <top-nav-bar />
    <div class="tnc-wrapper">
      <div class="container">
        <div class="tnc">
          <div class="tnc__header">
            TERMS & CONDITIONS FOR
            <br>
            <span class="text-purple-gradient">MAD HARE SOCIETY NFT</span>
          </div>
          <div class="tnc-about">
            <div class="tnc-about__title">
              These Terms and Conditions (hereinafter the <b>“Terms”</b>) were last updated on 13 April 2022.
            </div>
            <ul class="tnc-about-list">
              <li>These Terms govern any access or use of the website at <a href="https://www.madharesociety.com/#" target="_blank">https://www.madharesociety.com/#</a> and any other website and marketplace operated or made available by and for Mad Hare Society (hereinafter the <b>“Site”</b>) as well as your use of Genius Arts LLC’s (hereinafter the <b>“DaRealGenius”</b>) Mad Hare Society NFT project, and products and services associated to it including but not limited to the original art, design, and/or drawings embodied in the underlying Mad Hare NFT (hereinafter the <b>“Art”</b>). </li>
              <li>Whereas currently Mad Hare Society NFTs are sold through Crypto.com, your purchase and ownership of Mad Hare Society NFT with its Art are governed by these Terms and Terms & Conditions published on the website of Cprypto.com -
                <a href="https://crypto.com/nft/terms" target="_blank">https://crypto.com/nft/terms</a> (hereinafter the <b>“Crypto.com Terms”</b>), which are incorporated herein by reference. Please review the Crypto.com Terms carefully.  If you do not wish to abide by these Terms and/or the Crypto.com Terms you may not purchase Mad Hare Society NFT. In case of inconsistency between these Terms and Crypto.com Terms, these Terms published in this Site shall prevail. </li>
              <li>You acknowledge and agree that by accessing or using this Site, you are indicating that you have read, understand and agree to these Terms with Crypto.com Terms and to be bound by them.</li>
              <li>Mad Hare Society (hereinafter the <b>“MHS”</b>) is a collection of digital artworks (NFTs) running on the Crypto.com platform. Users are entirely responsible for the safety and management of their own private Crypto.com wallets and validating all relevant transactions and contracts before approval. Furthermore, as the respective smart contracts run on the Crypto.com platform, there is a limited ability, and in most cases no ability, to undo, reverse, or restore any transactions.</li>
              <li>All pricing and payment terms are as set forth on Crypto.com website, and any payment obligations you incur are binding at the time of purchase. All sales are final. Unless otherwise required by applicable law, we will not provide a refund on any purchase.</li>
              <li>This Site and its connected services are provided “as is” and “as available” without warranty of any kind. By using this Site you are accepting sole responsibility for any and all transactions involving MHS digital collectibles. Mad Hare NFT and its Art are collectively referred to as <b>“Mad Hare”</b> in these Terms.</li>
            </ul>
          </div>
          <client-only>
            <div class="tnc-faq">
              <div class="tnc-faq-item" :class="{active: activeAnswerIndex === idx}"
                   v-for="(item, idx) in $options.faqItems" :key="idx">
                <div class="tnc-faq-item__title">{{ item.title }}</div>
                <the-accordion
                  :is-opened="activeAnswerIndex === idx"
                >
                  <terms-item :html-content="item.content" class="tnc-faq-item__content"/>
                </the-accordion>
                <div
                  class="tnc-faq-item__toggle"
                  :class="{opened: activeAnswerIndex === idx}"
                  @click="activeAnswerIndex = activeAnswerIndex === idx ? null : idx"
                />
              </div>
            </div>
          </client-only>
        </div>
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'terms-and-conditions',
  faqItems: [
    {
      title: '1. Ownership',
      content: `
        <p><b>A.</b> Upon Purchase You Own the NFT. Each Mad Hare is an NFT with its Art on the Crypto.org blockchain. When you purchase an NFT, we grant you the rights to the underlying Art, as specified herein. Ownership of the NFT is mediated entirely by the Smart Contract and the Crypto.org platform: at no point may we seize, freeze, or otherwise modify the ownership of any Mad Hare NFT. </p>
        <p><b>B.</b> Personal Use. Subject to your continued compliance with these Terms, for so long as you own your Mad Hare, MHS grants you a worldwide, royalty-free license to use, copy, and display the purchased Art, along with any extensions that you choose to create or use, solely for the following purposes: </p>
        <ul>
          <li>for your own personal, non-commercial use;</li>
          <li>as part of a marketplace that permits the display, purchase and sale of your Mad Hare / NFT, for so long as you own your Mad Hare, provided that the marketplace cryptographically verifies each Mad Hare owner’s rights to display the Art for their Mad Hare to ensure that only the actual owner can display the Art; or </li>
          <li>as part of a third party website or application that permits the inclusion, involvement, or participation of your Mad Hare, for so long as you own your Mad Hare, provided that the website/application cryptographically verifies each Mad Hare owner’s rights to display the Art for their Mad Hare to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Mad Hare leaves the website/application.</li>
        </ul>
        <p><b>C.</b> Commercial Use. Subject to your continued compliance with these Terms, for so long as you own your Mad Hare, MHS grants you an unlimited, worldwide license to use, copy, and display the purchased Art (hereinafter the <b>“Commercial Use”</b>). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products (T-Shirts etc.) displaying copies of the Art or by licensing the exact, unmodified Mad Hare to a writer looking for an artwork for a book. For the sake of clarity, nothing in this Section will be deemed to restrict you from (1) owning or operating a marketplace that permits the use and sale of Mad Hare generally, for so long as you own your Mad Hare, provided that the marketplace cryptographically verifies each Mad Hare owner’s rights to display the Art for their Mad Hare to ensure that only the actual owner can display the Art; (2) owning or operating a third party website or application that permits the inclusion, involvement, or participation of Mad Hare generally, for so long as you own your Mad Hare, provided that the third party website or application cryptographically verifies each Mad Hare owner’s rights to display the Art for their Mad Hare to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the purchased Mad Hare leaves the website/application; or (3) earning revenue from any of the foregoing.</p>
        <p><b>D.</b> You acknowledge and understand that by purchasing Mad Hare you are not acquiring any equity or other ownership or profit-sharing interest in MHS or DaRealGenius, or any of their affiliates or any brand or other business venture.</p>
        <p><b>E.</b> For the avoidance of doubt, nothing herein gives you any rights to (i) create and sell derivatives of the Mad Hare art, or (iii) distort or otherwise modify Mad Hare or any of its parts, its colors, design, etc. (ii) use any trademarks, brand names, logos or other intellectual property rights belonging to MHS/DaRealGenius.</p>
        <p><b>F.</b> You may not, and may not allow any third party to use name, pseudonym and/or likeness of Mad Hare authors/artists, MHS/DaRealGenius brand name, logos or other IP and assets in any kind of activities that may lead to misleading costumers or/and false association, false endorsement, etc. </p>
        <p><b>G.</b> Notwithstanding anything contrary, MHS/DaRealGenius  retains all rights necessary to exploit any Mad Hare in any commercial and non-commercial way, and build new partnerships and collaborations with regard to any Mad Hare.  Unless DaRealGenius permits otherwise in writing, you are not entitled to any royalties or any other proceedings coming from such commercialization, partnerships and collaborations. You hereby irrevocably waive right to make any claim against MHS/DaRealGenius or any third party authorized by MHS/DaRealGenius to exploit Mad Hare based on activities, partnerships and collaborations permitted or directly executed by MHS/DaRealGenius.</p>
        <p><b>H.</b> MHS IP.  Other than the rights to the Art, nothing herein gives you any rights to any other trademarks or other intellectual property rights belonging to MHS including, without limitation, to MHS/DaRealGenius, Mad Hare and the associated logos. All of these rights are expressly reserved in the name of MHS/ DaRealGenius.</p>
        <p><b>I.</b> Feedback. You may choose to submit comments, bug reports, ideas or other feedback about the Site, including without limitation about how to improve the Site (collectively, “Feedback”). By submitting any Feedback, you agree that we are free to use such Feedback in any way we choose without additional compensation to you and you hereby grant us a perpetual, irrevocable, nonexclusive, worldwide license to incorporate and use the Feedback for any purpose. You hereby waive all moral rights with regard to your Feedback.</p>
      `
    },
    {
      title: '2. Your Obligations',
      content: `
        <p><b>A.</b> In order to use any of our products and services, you shall not:</p>
        <ul>
          <li>be, or be located in a country subject to any financial sanctions, embargoes or other restrictive measures imposed by the United Nations, European Union, any EU country, UK Treasury or US Office of Foreign Assets Control (OFAC), or any governmental authority in any jurisdiction in which this Site or Crypto.com platform is available, or that has been designated by the United States government, the UK, European Union, or any EU country as a "terrorist supporting" country; or/and </li>
          <li>be listed on any United States government, the UK, European Union, or any EU country list of prohibited or restricted parties.</li>
        </ul>
        <p><b>B.</b> This Site accepts users only from those countries where products and services associated to MHS and DaRealGenius is legal. You are solely responsible for determining whether your accessing and/or use of this Site and/or purchasing respective products and services are compliant with applicable laws in your jurisdiction and you warrant to us that such activity is allowed by laws of the territory where you reside. Any claim against DaRealGenius or/and MHS brought by you for any reason whatsoever in regard to the above mentioned will be considered void and shall not be accepted.</p>
        <p><b>C.</b> You are solely responsible for your own conduct while accessing or using the Site, and for any consequences thereof. You agree to use the Site only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations. By way of example, and not as a limitation, you may not, and may not allow any third party to: (i) send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, fraudulent, hateful, violent, obscene, or otherwise objectionable content; (ii) distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a destructive or deceptive nature; (iii) impersonate another person; (iv) upload, post, transmit or otherwise make available through the Site any content that infringes the intellectual property or proprietary rights of any party or otherwise violates the legal rights of others; (v) engage in, promote, or encourage illegal activity (including, without limitation, money laundering); (vi) interfere with other users' use of the Site; (vii) use the Site for any unauthorized commercial purpose; (viii) modify, adapt, translate, or reverse engineer any portion of the Site; (ix) remove any copyright, trademark or other proprietary rights notices contained in or on the Site or any part of it; (x) use any technology to collect information about the Site’s for any unauthorized purpose; (xi) access or use the Site for the purpose of creating a product or service that is competitive with any of our products or services; (xii) use the Art or any of its part separated from the Mad Hare NFT; (xiii) register or attempt to register any trademark or copyright or otherwise acquire additional intellectual property rights in or to any Mad Hare, this Site or any other asset of MHS or DaRealGenius; (xiv) use any Mad Hare in connection with any advertisement, campaign, business, product, or service, or in any manner that may imply endorsement of any business, message, product, or service; (xv) use Mad Hare or any asset pf MHS or DaRealGenius  in any manner that infringes, violates or misappropriates any third party intellectual property rights, or that violates these Terms.</p>
        <p><b>D.</b> You shall not portray any Mad Hare as an opportunity to gain economic benefit or profit, or as an investment, equity, or other ownership or profit-sharing interest in MHS or DaRealGenius, or any of their affiliates or any brand or other business venture. </p>
        <p><b>E.</b> If you engage in any of the activities prohibited by this Section, we may, at our sole and absolute discretion, without notice to you, and without limiting any of our other rights or remedies at law or in equity, immediately suspend or terminate your user account.</p>
        <p><b>F.</b> Any use of Mad Hare other than as specifically authorized herein, without MHS’s prior written permission, is strictly prohibited, and entitles us to terminate the rights granted to you herein effective immediately as it violates intellectual property rights of MHS and DaRealGenius</p>
      `
    },
    {
      title: '3. Fees and Payment',
      content: `
        <p><b>A.</b> If you elect to purchase Mad Hare, any financial transactions that you engage in will be conducted solely through the Crypto.com platform. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions.  We will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage or any other transactions that you conduct via the the Crypto.com platform.</p>
        <p><b>B.</b> Crypto.com requires the payment of a transaction fee for transactions that occur on the Crypto.com platform. </p>
        <p><b>C.</b> You represent and warrant that any purchase of Mad Hare by you is solely for your personal collection, use and enjoyment, and not for speculative or investment purposes, for use as a substitute for currency or other medium of exchange, or for resale or redistribution. </p>
      `
    },
    {
      title: '4. Disclaimers',
      content: `
        <p><b>A.</b> YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF THE SITE IS AT YOUR SOLE RISK, AND THAT THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE SITE AND ANY PART OF IT (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY, OR RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR USE OF THE SITE WILL MEET YOUR REQUIREMENTS, (II) YOUR ACCESS TO OR USE OF THE SITE WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, (III) USAGE DATA PROVIDED THROUGH THE SITE WILL BE ACCURATE, (III) THE SITE OR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE ON OR THROUGH THE SITE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR (IV) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU USE THE SITE WILL BE SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.</p>
        <p><b>B.</b> YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR WILLFUL MISCONDUCT.</p>
        <p><b>C.</b> WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU INCUR AS THE RESULT OF YOUR USE OF THE CRYPTO.COM PLATFORM NOR DO WE HAVE NO CONTROL OVER AND MAKE NO GUARANTEES REGARDING ANY SMART CONTRACTS.</p>
      `
    },
    {
      title: '5. Limitation of Liability',
      content: `
        <p><b>A.</b> YOU UNDERSTAND AND AGREE THAT WE WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p><b>B.</b> YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF (OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE SITE, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS LIMITED TO THE GREATER OF (A) THE AMOUNTS YOU ACTUALLY PAID US UNDER THESE TERMS IN THE 12 MONTH PERIOD PRECEDING THE DATE THE CLAIM AROSE, OR (B) $500.</p>
        <p><b>C.</b> YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE SITE AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN. WE WOULD NOT BE ABLE TO PROVIDE THE SITE TO YOU WITHOUT THESE LIMITATIONS.</p>
        <p><b>D.</b> Nothing in this disclaimer will:</p>
        <ul>
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
      `
    },
    {
      title: '6. Risk Assumption',
      content: `
        <p>You accept and acknowledge each of the following:</p>
        <p><b>A.</b> To the extent that you sell your Mad Hare NFT, please be aware that the prices of NFTs are extremely volatile and fluctuations in the prices of other NFTs and impact the price of your Mad Hare both positively and negatively. Given the volatility, NFTs such as Mad Hare should not be considered an investment. You assume all risks in that connection.</p>
        <p><b>B.</b> Ownership of Mad Hare confers ownership of digital artwork only. Accordingly, no information on this Site (or any other documents mentioned therein) is or may be considered to be advice or an invitation to enter into an agreement for any investment purpose. Further, nothing on this Site qualifies or is intended to be an offering of securities in any jurisdiction nor does it constitute an offer or an invitation to purchase shares, securities or other financial products.  Due to the artistic nature of the project, MHS has not been registered with or approved by any regulator in any jurisdiction. It remains your sole responsibility to assure that the purchase of the Mad Hare and the associated art is in compliance with laws and regulations in your jurisdiction.</p>
        <p><b>C.</b> You assume all risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet.</p>
        <p><b>D.</b> Legislative or regulatory changes at the state, federal or international level may adversely affect the use, transfer, sale, distribution, exchange of or any other commercial and non-commercial activities related to Mad Hare.</p>
        <p><b>E.</b> NFTs, cryptocurrencies and blockchain technology are relatively new and the regulatory landscape is unsettled.  New regulations could negatively impact such technologies impacting the value for your Mad Hare. You understand and accept all risk in that regard.</p>
        <p><b>F.</b> You assume all responsibility for any adverse effects of disruptions or other issues impacting Crypto.com platform or any of your wallet.</p>
      `
    },
    {
      title: '7. Indemnification',
      content: `
        You agree to hold harmless and indemnify MHS and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or nature, suit, judgment, litigation cost, and reasonable attorneys' fees arising out of or in any way related to (1) your breach of these Terms, (2) your misuse of the Site, or (3) your violation of applicable laws, rules or regulations in connection with your access to or use of the Site.
      `
    },
    {
      title: '8. Changes to the Terms and Conditions',
      content: `
      We may make changes to the Terms at our discretion. Please check these Terms periodically for changes. Any changes to the Terms will apply on the date that they are made, and your continued access to or use after the Terms have been updated will constitute your binding acceptance of the updates. If you do not agree to any revised Terms and/or revised Crypto.com Terms, you may not access or use the Site.
      `
    },
    {
      title: '9. Children',
      content: `
      Our Site is not intended for children. You must be at least 18 years old to access this Site or purchase Mad Hare. If you are under 18 years old you are not permitted to use this Site for any reason. By accessing the Site, you represent and warrant that you are at least 18 years of age.
      `
    },
    {
      title: '10. Dispute Resolution; Arbitration',
      content: `
      These Terms shall be deemed to have been entered into, and shall be interpreted in accordance with the substantive laws of Commonwealth of Puerto Rico, without reference to the principles of conflicts of laws. All disputes arising out of or in connection with these Terms, including without limitation your access or use of the Site, or to any products sold or distributed through the Site, will be referred to and finally resolved by arbitration under the rules of the American Arbitration Association. The case will be adjudicated by a single arbitrator and will be administered by the American Arbitration Association in accordance with its applicable rules and the substantive law of Commonwealth of Puerto Rico. The party initiating an arbitration proceeding/claim shall cover all fees and costs associated with the arbitration proceedings. The place of arbitration will be New York, New York, USA. The award of the arbitrator will be final and binding, and any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Notwithstanding the foregoing, we may seek and obtain injunctive relief in any jurisdiction in any court of competent jurisdiction.
      `
    },
    {
      title: '11. Severability ',
      content: `
      If any provision or part of a provision of these Terms is unlawful, void or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions.
      `
    },
    {
      title: '12. Privacy',
      content: `
      By using this Site and related services, you are subject to MHS’s Privacy Policy located at Privacy Policy, which is hereby incorporated into and made part of these Terms.
      `
    },
    {
      title: '13. How to Contact Us',
      content: `
        <p>If you have any questions or concerns, or need to submit any information, you can contact us via email, phone or regular mail directed to: </p>
        <p>Address: P.O. Box 624, Lares, Puerto Rico 00669</p>
        <p>Email: <a href="mailto:madharesociety@gmail.com" target="_blank">madharesociety@gmail.com</a></p>
      `
    },
    {
      title: '14. Waiver ',
      content: `WITH RESPECT TO ANY DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS, INCLUDING WITHOUT LIMITATION DISPUTES RELATED TO THE SITE OR ANY PRODUCTS SOLD OR DISTRIBUTED THROUGH THE SITE, OR THE SMART CONTRACTS: (I) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO HAVE A TRIAL BY JURY; AND (II) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS IN ANY LAWSUIT, INCLUDING BUT NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY SUCH DISPUTE.`
    }
  ],
  data() {
    return {
      activeAnswerIndex: null
    }
  },
  methods: {
    toggleAnswer(index) {
      this.activeAnswerIndex = this.activeAnswerIndex === index ? null : index
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/terms-and-conditions.scss";
</style>
