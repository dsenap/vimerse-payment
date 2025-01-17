import React from 'react';
import { Container, Link as MaterialLink, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import LazyLoad from 'react-lazyload';
import withOutAuth from 'src/HOC/withOutAuth';
import s from '../styles/Terms.module.scss';
import SocialHead from '../components/SocialHead';
import useScrollToTop from '../hooks/useScrollToTop';
import { LIGHT_HOUSE } from '../utils/regulars';

const TermsAndConditions = ({ gps }) => {
  useScrollToTop();

  const { formatMessage } = useIntl();
  return (
    <>
      <SocialHead
        title={formatMessage({ defaultMessage: 'Terms and conditions', id: '01_meta_terms_meta_title' })}
        gps={gps}
      />
      <Container>
        <div className={s.container}>
          <div className={s.mainHeader}>
            <Typography variant="h1">
              {formatMessage({ defaultMessage: 'Terms and conditions', id: 'terms_top_title' })}
            </Typography>
          </div>
          <div className={s.informationPersDataText}>
            <Typography variant="body1">
              {' '}
              {formatMessage({
                defaultMessage: `Above all, our goal is to offer the best quality video editing service at affordable rates. We strive to make the best out of the material our clients send us and therefore differentiate ourselves through the quality of the result of our work. Should disputes or misunderstandings arise we will always try to find a reasonable and fair solution based on the Terms outlined below.`,
                id: 'terms_1_block_text_1',
              })}
            </Typography>
          </div>
          <div className={s.secondaryPaddingTop}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `By employing the services of Vimerse, signing up for an account with us or supplying work related to our service, you are agreeing to these Terms. These are legal and binding.`,
                id: 'terms_1_block_text_2',
              })}
            </Typography>
          </div>
          <div className={s.secondaryPaddingTop}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Do note how each of the following terms are defined and/or used:`,
                id: 'terms_1_block_text_3',
              })}
            </Typography>
          </div>
          <LazyLoad resize>
            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `1. The service`,
                  id: 'terms_2_block_title_1',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Vimerse (“Service”) is a video editing service provider.`,
                  id: 'terms_2_block_text_1',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `2. The website`,
                  id: 'terms_2_block_title_2',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `The website or www.vimerse.com will contain the functionalities you need to use our service.`,
                  id: 'terms_2_block_text_2',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `3. We or us`,
                  id: 'terms_2_block_title_3',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `The service and website are owned, ran and managed by Vimerse LLC (“Vimerse” “we,” or “us”).`,
                  id: 'terms_2_block_text_3',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `4. You`,
                  id: 'terms_2_block_title_4',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `You or “Client”, is a customer of the Service or represents an individual or group considered to be a customer of the Service.`,
                  id: 'terms_2_block_text_4',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `5. Content`,
                  id: 'terms_2_block_title_5',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Through the Service, the Client is required to provide video footage, other materials and content, and a description of the particular video project (these particulars are referred to collectively as “Content”) to the %Editor.`,
                  id: 'terms_2_block_text_5',
                })}
              </Typography>
            </div>
            {/* -------------------------------Contract generalities  ---------------------------------*/}
            <div className={s.padding100}>
              <Typography variant="h3">
                <b>
                  {' '}
                  {formatMessage({
                    defaultMessage: `Contract generalities`,
                    id: 'terms_3_block_title',
                  })}
                </b>
              </Typography>
            </div>
            <div className={s.padding42}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `A. All-inclusive agreement / severability`,
                  id: 'terms_3_block_text__title_1',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `This agreement, along with any modifications and any further contracts you may enter into with us in relation to the Service, shall establish the complete and total agreement between you and Vimerse.`,
                  id: 'terms_3_block_text_1',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `If any facility of this contract is considered void by a court of competent jurisdiction, the baselessness of such provision will not affect the legitimacy of the other provisions of this Agreement.`,
                  id: 'terms_3_block_text_2',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `B. Agreement modifications`,
                  id: 'terms_3_block_text__title_2',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Vimerse reserves the right to modify and adjust these terms every so often. Otherwise explicitly mentioned elsewhere, all modified terms shall automatically take effect fourteen (14) calendar days after the revised terms and conditions are posted on this website.`,
                  id: 'terms_3_block_text_2_1',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `A Client who opts to sign up, register or otherwise using the Service recognizes that he/she has read, comprehends and willfully agrees to be duty-bound by these Terms. If you do not wish to accept them, you will be unable to access, look through or utilize the Service.`,
                  id: 'terms_3_block_text_2_2',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `These Terms of Service may not be altered except in writing hand-signed by Vimerse and the Client. For our purposes, “in writing” does not include email messages and “hand-signed” does not include electronic signatures.`,
                  id: 'terms_3_block_text_2_3',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Whether due to business-related reasons, marketing or law, we may send notifications via email, or through post (written and hard copy), or through posting on Vimerse’s website.`,
                  id: 'terms_3_block_text_2_4',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `We determine the platform and method by which we notify our users, as long as you do not opt out of certain notification platforms or means as noted in this agreement.`,
                  id: 'terms_3_block_text_2_5',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `We are not responsible for automatic filtering which you or your provider may have applied to the email address you have registered with us.`,
                  id: 'terms_3_block_text_2_6',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Your persistent and continuous use of the Service after it has been modified or updated means that you accept the new Terms.`,
                  id: 'terms_3_block_text_2_7',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `C. Assignment`,
                  id: 'terms_3_block_text__title_3',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `While Vimerse may assign without restriction under this agreement, you may not transfer or assign any rights and licenses granted hereunder. Any and all attempts at transferring or assigning will be considered as violations, and will therefore be considered null and void.`,
                  id: 'terms_3_block_text_3_1',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `D. No relinquishment`,
                  id: 'terms_3_block_text__title_4',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Our failure to affirm any right or provision under this agreement shall not create a relinquishment of such provision or right.`,
                  id: 'terms_3_block_text_4_1',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `E. Ownership of Intellectual property`,
                  id: 'terms_3_block_text__title_5',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Subject at all times to Client’s satisfaction of its payment obligations under this Agreement, Vimerse agrees that the delivered videos constitute audio and visual work(s) specially commissioned and made for hire within the meaning of the United States Copyright Law.  All tapes, negatives and prints of all pictures and sound tracks and material, exposed and/or processed, in the production of the videos, (except for materials supplied to Vimerse by Client) and all material and content contained in the videos, including but not limited to any characters, names, copy, art, logos, and animation, and all right, title, interest and copyrights therein, shall become the property of Client upon delivery thereof in accordance with the provisions hereof.  In the event that the videos for any reason are determined not to be a work made for hire, then Vimerse hereby grants and assigns all right, title and interest to the videos to Client, and VImerse will promptly execute and deliver such documents as may be requested by Client in order to accomplish the assignment and transfer of all such right, title and interest. Without in any way limiting the foregoing, Vimerse hereby waives any and all “moral rights,” and any rights Vimerse may have regarding the videos pursuant to the Visual Artist Rights Act (17 U.S.C. § 106 A(e)) or other federal, state or local statute. Vimerse will not mortgage, pledge, assign or otherwise encumber the aforementioned sound tracks, tapes and negative and positive films.`,
                  id: 'terms_3_block_text_5_1',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Notwithstanding the foregoing, all of VImerse’s original project files, animation files, and color correction files, and any other underlying proprietary technologies, plug-ins, architecture or other proprietary materials used by Vimerse in the creation of the delivered videos (collectively “Producer Materials”) shall remain the sole property of Vimerse. Vimerse hereby grants to Client a limited, non-exclusive, royalty-free license to use any such Vimerse Materials solely to the extent that may be necessary to enable the delivered videos to perform and/or be displayed as promised.`,
                  id: 'terms_3_block_text_5_2',
                })}
              </Typography>
            </div>

            {/* -------------- -------------- Your account  -------------- -------------- -------------- -------------- -------------- */}

            <div className={s.padding100}>
              <Typography variant="h3">
                <b>
                  {' '}
                  {formatMessage({
                    defaultMessage: `Your account`,
                    id: 'terms_4_block_title',
                  })}
                </b>
              </Typography>
            </div>
            <div className={s.padding42}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `Your account will enable you to have access to the Service, including all its functionality which we may create and maintain every so often.`,
                  id: 'terms_4_block_text_1_1',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `A Client has full access and control over his profile and over his interactions with the Service.`,
                  id: 'terms_4_block_text_1_2',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Should you open an account with us on behalf of the Service, another individual or organization, then (a) “you” is means both you and whoever you represent, and (b) you acknowledge that you are authorized by the entity to act on its behalf, can agree on the Terms on behalf of the entity, and you are therefore authorized to bind the entity to this Agreement.`,
                  id: 'terms_4_block_text_1_3',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Connecting Vimerse with another a third-party enables us to access and utilize your own information and details from the service as it permits, and to store your login credentials for the said service.`,
                  id: 'terms_4_block_text_1_4',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Also, giving Vimerse your email address automatically means consent with the usage of your email address to send you Service-related notices. Should you wish to opt out of these communications, please contact our support.`,
                  id: 'terms_4_block_text_1_5',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `You should provide accurate, as well as complete, information when creating your account. We highly encourage you to use account passwords which are considered as “strong”, i.e., passwords which consist of upper and lower case letters, symbols and numbers.`,
                  id: 'terms_4_block_text_1_6',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `You are not permitted to use another User’s account without their permission.`,
                  id: 'terms_4_block_text_1_7',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Should you experience any breach of security or unauthorized usage of your account, inform Vimerse as soon as possible.`,
                  id: 'terms_4_block_text_1_8',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Vimerse is not liable for any losses incurred or experienced should your account be used without your authorization.`,
                  id: 'terms_4_block_text_1_9',
                })}
              </Typography>
            </div>

            {/* -------------- -------------- The rules of our service  -------------- -------------- -------------- -------------- -------------- */}

            <div className={s.padding100}>
              <Typography variant="h3">
                <b>
                  {' '}
                  {formatMessage({
                    defaultMessage: `The rules of our service`,
                    id: 'terms_5_block_title',
                  })}
                </b>
              </Typography>
            </div>
            <div className={s.padding42}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `You consent to not engaging in the following outlawed undertakings when using the Service: (i) the utilization of any kind of automated system, which includes and is not limited to the use of “spiders”, “offline readers”, “bots”, etc. to access the Service; (ii) copying, circulating or divulging any aspect of the Service through any platforms; (iii)trying to interfere with, decipher and manipulate any transmissions, or attempting to compromise the system security or integrity the servers which run the Service; (iv) the transmission of chain letters, unsolicited emails, and spam; (v) actions taken which inflict or potentially impose an unreasonable or excessively huge load on our infrastructure; (vi) the collection of any confidential and personal information of other users, including account names and passwords, from the Service; (vii) uploading data which is invalid, or which may contain worms, viruses and others; (viii)the impersonation of another individual, or misrepresenting your association with another entity or person, fraud; (ix) commissioning the Service for commercial solicitation; (x) accessing contents in the Service through any technological means other than those permitted and given by the Service; or (xi) circumventing the measures we employ to inhibit or control access to the Service.`,
                  id: 'terms_5_block_text_1_1',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `We may opt to either permanently or temporarily end or defer your access to the Service without prior notice and/or liability for any reason, which includes our sole discretion or determination that you have violated any terms in this agreement, or for no other reason. Upon the end of deferment of your access, you continue to be constrained by this agreement.`,
                  id: 'terms_5_block_text_1_2',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `We reserve the right to change the Service without prior notice; halt the delivery of the Service or its features to you or to users in general; or establish limitations to the Service.`,
                  id: 'terms_5_block_text_1_3',
                })}
              </Typography>
            </div>

            {/* -------------- -------------- Terms and concerning clients  -------------- -------------- -------------- -------------- -------------- */}

            <div className={s.padding100}>
              <Typography variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: `Terms and concerning clients`,
                    id: 'terms_6_block_title',
                  })}
                </b>
              </Typography>
            </div>
            <div className={s.padding42}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `Age Restriction`,
                  id: 'terms_6_block_title_1_1',
                })}
              </Typography>
            </div>

            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Usage of access of the Service by any persons under the age of 13 is strictly prohibited, and doing so will be in violation of this Agreement. Also, any individuals or groups which have been removed from the Service in the past by Vimerse will not be allowed to employ the Service.`,
                  id: 'terms_6_block_text_1_2',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Through the Service, a Client will provide Content to an Editor.`,
                  id: 'terms_6_block_text_1_3',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `Content`,
                  id: 'terms_6_block_title_2_1',
                })}
              </Typography>
            </div>

            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Regarding Content, you assert, represent and certify it and our use thereof as intended in this agreement. The Service does not intend to violate any laws or third-party rights.`,
                  id: 'terms_6_block_text_2_1',
                })}
              </Typography>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `As a Client, you agree not to post Content that: (i)could potentially cause damage or loss to any individual or property; (ii) could possibly create loss, harm, emotional distress, physical or mental injury, disability, disfigurement, physical or mental illness or death to yourself, to another or to any animal; (iii)comprises any content or information that we believe to be harmful, unlawful, defamatory, abusive, racially or ethnically abusive, infringing, invasive of publicity rights or personal privacy, libelous, harassing, profane, threatening, humiliating to other people publicly or otherwise, or otherwise offensive; (iv) pursues to injure in any way or exploit children by subjecting them to content that is inappropriate; (v) consists of any content or information that is criminal (inclusive of, with no limitations, the disclosure and distribution of insider information of another party’s trade secrets under securities laws); (vi) could possibly represent or further tort or a crime; (vii) has content or information that you know and believe to be incorrect or outdated. (viii)comprises of any content or information that you are not permitted to give under any fiduciary or contractual relationships or law;`,
                  id: 'terms_6_block_text_2_2',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `You agree to post Content that do not infringe on third-party rights of any kind, including and not limited to rights to privacy and Intellectual Property Rights.`,
                  id: 'terms_6_block_text_2_3',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Make known that you are the owner of a piece of musical composition’s copyright rights, inclusive of and not limited to the mechanical, sound recording rights, and performance, with respect to all aspects of the musical work (including lyrics) and sound recording included in the said Content.`,
                  id: 'terms_6_block_text_2_4',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `We reserve the right, although we are not obliged, to solely determine whether or not to reject and/or delete any Content that we believe infringes on these stipulations.`,
                  id: 'terms_6_block_text_2_5',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `As a Client, you alone are accountable for the Content you post (whether or not they belong to you), and you are liable for the penalties and costs of uploading and/or publishing the materials.`,
                  id: 'terms_6_block_text_2_6',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `Order confirmation`,
                  id: 'terms_6_block_title_3_1',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `The media files a client wants to get edited must be uploaded as a complete package. Once we confirm that all necessary files and instructions are either uploaded or shared by the Client, we will send an order confirmation and start editing. The order confirmation will be made over an email.`,
                  id: 'terms_6_block_text_3_2',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `Delivery of an edited video`,
                  id: 'terms_6_block_title_4_1',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `While we strive to deliver edited videos in two calendar days since the order confirmation, this is not guaranteed. We reserve the right to extend the due date for Content with over 60 minutes footage duration and multiple projects. If a Client wants modifications such as change in category, addition of features or additional file uploads/sharing to the initial submission, we will delay the delivery of edited videos. Also, major holidays or natural disasters may delay the delivery of edited videos. We will attempt to notify Clients ahead of delay, should we fail to deliver in two calendar days. `,
                  id: 'terms_6_block_text_4_2',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `Revisions`,
                  id: 'terms_6_block_title_5_1',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `The client is in charge of viewing, reviewing and commenting the video project worked on by the Editor. After the delivery of an edited video, a client is permitted to request revisions. Any request for changes should be articulated within (5) five calendar days within the delivery of an edited video. Should the Client not communicate with Vimerse for more (5) five calendar days since the delivery of the edited video, we will consider the project complete.`,
                  id: 'terms_6_block_text_5_2',
                })}
              </Typography>
            </div>
            {/* <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Should a client request additional hourly revisions, purchase “unlimited revisions” add-on or  purchase plans including the “unlimited revisions” option, we accept revisions within (12) twelve calendar days from the order confirmation.  If a client is not completely satisfied with the production and result after (12) twelve calendar days after the order confirmation, Vimerse may opt to terminate the project.`,
                  id: 'terms_6_block_text_5_3',
                })}
              </Typography>
            </div> */}
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Your right to use the Vimerse services shall terminate upon your breach of any term of this Agreement. `,
                  id: 'terms_6_block_text_5_4',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {' '}
                {formatMessage({
                  defaultMessage: `Fees and billing`,
                  id: 'terms_6_block_title_6_1',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Should you decide to utilize paid features of our Service, you are aware that we add new products or services for extra charges, or adjust fees for current services. Clients should provide payment information that can authorize payment at the beginning of the project. When edited videos and revised videos reflecting client’s revisions are delivered, payment will be processed. During the revision process Vimerse reserves the right to ask the client to give the full payment for the project before any other revisions can take place.`,
                  id: 'terms_6_block_text_6_2',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Money Back Guarantee – If Vimerse has made evident mistakes due to neglect and has failed to demonstrate a reasonable level of efforts to correct the mistakes, client can request refund of the base project price within 14 days after the payment processed. The client must email to info@vimerse.com. The refund will be made net of processing fee. Fees related to revisions, including the additional fee paid for unlimited revisions, are non-refundable.`,
                  id: 'terms_6_block_text_6_3',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `A third-party payment processor is used to process all payments that go through the Service. We are not liable for any security or privacy breaches by the said processor. `,
                  id: 'terms_6_block_text_6_4',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `All charges you incur through the utilization of your debit or credit card, or other payment methods are reflective of the prices in effect during the time said charged were incurred. `,
                  id: 'terms_6_block_text_6_5',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `With No Warranties; “As Is” Service `,
                  id: 'terms_6_block_text_6_6',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Without restricting the foregoing, Vimerse, as well as its licensors and subsidiaries do not guarantee that the content given is truthful, complete, correct or updated; that the video editing service provided will meet you standards; that the service will always be available at any specified time or place, continuous or protected; that any flaws or mistakes will be amended. `,
                  id: 'terms_6_block_text_6_7',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `You alone are responsible for any destruction to your computer system or data loss which result from the usage of the service or from downloads which contain viruses and the like. `,
                  id: 'terms_6_block_text_6_8',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Service is rendered on either an “as is” or “as available” basis. `,
                  id: 'terms_6_block_text_6_9',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `As allowed by the full extent of applicable law, provided service will not have any attached guarantees or warranties, inclusive of but not limited to fitness for a specified purpose, non-infringement or implied warranties of merchantability. `,
                  id: 'terms_6_block_text_6_10',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Digital Millenium Copyright Act (DMCA). In the event materials are made available to this Site by third parties not within our control (ie: stock footage, creative commons license), we are under no obligation to, and do not, scan such content for the inclusion of illegal or impermissible content. However, we respect the copyright interests of others. It is our policy not to permit materials known by us to infringe another party’s copyright to remain on the Site. If you believe any materials on the Site infringe a copyright, you should provide us with written notice that at a minimum contains: `,
                  id: 'terms_6_block_text_6_11',
                })}
              </Typography>
            </div>

            <div className={s.ulListWrapper}>
              <ul>
                <li>
                  <Typography variant="body1">
                    {formatMessage({
                      defaultMessage: `A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;`,
                      id: 'terms_6_block_list_item_1',
                    })}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    {formatMessage({
                      defaultMessage: `Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;`,
                      id: 'terms_6_block_list_item_2',
                    })}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    {formatMessage({
                      defaultMessage: `Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material;`,
                      id: 'terms_6_block_list_item_3',
                    })}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    {formatMessage({
                      defaultMessage: `Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted;`,
                      id: 'terms_6_block_list_item_4',
                    })}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    {formatMessage({
                      defaultMessage: `A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;`,
                      id: 'terms_6_block_list_item_5',
                    })}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    {formatMessage({
                      defaultMessage: `And A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.`,
                      id: 'terms_6_block_list_item_6',
                    })}
                  </Typography>
                </li>
              </ul>
            </div>

            <div className={s.padding20SP}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `All DMCA notices should be sent to our designated agent as follows:`,
                  id: 'terms_7_block_text_7_1',
                })}
              </Typography>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `Hyunjae Lee`,
                  id: 'terms_7_block_text_7_2',
                })}
              </Typography>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `
                867 Boylston St 5th
                `,
                  id: 'terms_7_block_text_7_3',
                })}
              </Typography>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `
                  Boston, MA 02116
                `,
                  id: 'terms_7_block_text_7_4',
                })}
              </Typography>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `
                USA
                `,
                  id: 'terms_7_block_text_7_5',
                })}
              </Typography>
              <MaterialLink href="mailto: info@vimerse.com">
                <Typography style={{ textDecoration: 'underline' }} variant="body1">
                  {formatMessage({
                    defaultMessage: 'info@vimerse.com',
                    id: 'terms_7_block_text_7_6',
                  })}
                </Typography>
              </MaterialLink>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {formatMessage({
                  defaultMessage: `It is our policy to terminate relationships regarding content with third parties who repeatedly infringe the copyrights of others.`,
                  id: 'terms_7_block_text_7_7',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {formatMessage({
                  defaultMessage: 'Scope of liabilities',
                  id: 'terms_7_block_block_text_8_1',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `As allowed by the full extent of applicable law, under no circumstances will we, our agents, employees, affiliates, directors, suppliers or licensors be responsible and liable for any punitive, direct and indirect, special incidental, exemplary or consequential damages, inclusive of but not limited to damages incurred from profit loss, use, goodwill, data or other intangible losses which arise from the utilization of or inability of usage of this service.`,
                  id: 'terms_7_block_block_text_8_2',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `In no event shall we be accountable for any damages, injuries or losses which arise from tampering, hacking or other unauthorized access or utilization of the service from your account, or misuse of your personal details contained therein.`,
                  id: 'terms_7_block_block_text_8_3',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `As allowed by the full extent of applicable law, we assume no responsibility or liability for any and all (i) damage to property or personal injury which result from the use and access of the service; (ii)flaws, mistakes, inaccuracies or errors in your content; (iii) Trojan horses, viruses or the like which may be transferred to or through Vimerse by third-party entities; (iv) unsanctioned access to our secured servers as well as all the personal data that are contained in them; (v)cessations and interruptions of transmissions being done through the service; (vi) user content that contains illegal, criminal, defamatory or offensive acts or statements made by third parties, and/or (vii) oversights or mistakes in your content, or losses or damages acquired arising from any content posted, transferred, emailed or in any way made available through the service.`,
                  id: 'terms_7_block_block_text_8_4',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `The foregoing limitation will be applicable to full extent allowable by law in the pertinent jurisdiction.`,
                  id: 'terms_7_block_block_text_8_5',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `Take note that some states do not permit the omission of implied warranties, incidental or consequential damages, so limitations mentioned above may not be applicable to you.`,
                  id: 'terms_7_block_block_text_8_6',
                })}
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `Any exclusion, limitation of liability or disclaimer noted in this agreement will not relate to the extent forbidden by applicable law.`,
                  id: 'terms_7_block_block_text_8_7',
                })}
              </Typography>
            </div>

            <div className={s.padding54}>
              <Typography variant="h5">
                {formatMessage({
                  defaultMessage: 'Disputes',
                  id: 'terms_7_block_block_text_9_1',
                })}
              </Typography>
            </div>
            <div className={s.padding20}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `You are aware and consent to the fact that: (i) Vimerse is solely geographically based in Massachusetts, United States of America; and (ii) the Service will be seen as passive, not able to result to specific or general personal authority over Vimerse in jurisdictions other than United States of America.`,
                  id: 'terms_7_block_block_text_9_2',
                })}
              </Typography>
            </div>

            <div className={s.padding20}>
              <Typography variant="body1">
                <b>
                  <i>
                    {formatMessage({
                      defaultMessage: `Disputes`,
                      id: 'terms_7_block_block_text_9_3',
                    })}
                  </i>
                </b>
              </Typography>
              <Typography variant="body1">
                <i>
                  {formatMessage({
                    defaultMessage: `Any dispute arising from this Agreement shall be resolved through mediation. If the dispute cannot be resolved through mediation, then the dispute will be resolved through binding arbitration conducted in accordance with the rules of the American Arbitration Association.  `,
                    id: 'terms_7_block_block_text_9_4',
                  })}
                </i>
              </Typography>
            </div>
            <div className={s.secondaryPaddingTop}>
              <Typography variant="body1">
                {' '}
                {formatMessage({
                  defaultMessage: `These Terms and Conditions were last modified on April 11, 2022.`,
                  id: 'terms_7_block_last_modify',
                })}
              </Typography>
            </div>
          </LazyLoad>
        </div>
      </Container>
    </>
  );
};

export default TermsAndConditions;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
