import { defineMessages } from 'react-intl';
import styles from './Pricing.module.scss';

export const firstCardUl = [
  { text: '15-min video call to understand your process of content creation' },
  { text: 'Get professional tips on your existing videos' },
  { text: 'Experience an immediate boost to your viewership' },
];

export const secondCardUl = [
  // {
  //   text: 'One free trial',
  //   buttonTooltip: false,
  //   tooltipText: '',
  // },
  {
    text: 'Max 15-min running time',
    buttonTooltip: true,
    tooltipText: 'Max 45-min raw footage',
  },
  { text: 'One free thumbnail', buttonTooltip: false, tooltipText: '', buttonSvg: null },
  {
    text: `One round of revisions`,
    buttonTooltip: true,
    tooltipText: '5-10 small changes or 1-2 major changes including music',
    buttonSvg: null,
  },
  { text: 'High-quality royalty-free music', buttonTooltip: false, tooltipText: '', buttonSvg: null },
  { text: 'Pro cuts & transitions', buttonTooltip: false, tooltipText: '', buttonSvg: null },
  { text: 'Text and lower thirds', buttonTooltip: false, tooltipText: '', buttonSvg: null },
  {
    text: 'Standard features',
    buttonTooltip: true,
    tooltipText: `
    <p>1. Easy communication (Frame.io)</p>
    <p>2. Effects (time remapping, slow-mo, fast-mo, stabilization, zoom, glitch, etc.)</p>
    <p> 3. Remove objects and people from video</p>
    <p> 4. Audio mixing & correction</p>
    <p>5. B-rolls using your own footage (max 3)</p>
    <p>6. Color grading & Color correction</p>
    `,
  },
];

export const thirdCardUl = [
  {
    text: 'Everything in Gold+',
    buttonTooltip: false,
    tooltipText: '',
  },
  {
    text: 'Max 25-min running time',
    buttonTooltip: false,
    tooltipText:
      'Based on 90-min footage provided. $0.35 per additional minute of footage. $0.12 per additional minute of footage when Twitch markers and chat analytics are provided',
  },
  { text: 'Three free thumbnails', buttonTooltip: false, tooltipText: '' },
  { text: 'Unlimited revisions', buttonTooltip: false, tooltipText: 'Unlimited for 12 days' },
  { text: 'B-rolls using stock videos and images', buttonTooltip: false, tooltipText: 'Max 3 B-rolls' },
  { text: 'Repurposed video for other social media platforms', buttonTooltip: false, tooltipText: '' },
  {
    text: 'One free intro title card',
    buttonTooltip: true,
    tooltipText: `
    <p>1. Easy communication (Frame.io)</p>
    <p>2. Effects (time remapping, slow-mo, fast-mo, stabilization, zoom, glitch, etc.)</p>
    <p> 3. Remove objects and people from video</p>
    <p> 4. Audio mixing & correction</p>
    <p>5. Color grading & Color correction</p>
    <p>6. High-quality royalty-free music</p>
    <p>7. Pro cuts & transitions</p>
    <p>8. Text and lower thirds</p>
    `,
  },
];

export const pricingDataMainContainer = [
  {
    stylesCard: styles.card2,
    stylesTitleWrapper: styles.cardTitleWrapper2,
    cardTitle: 'Gold',
    stylesPricingBackMain: styles.pricingBack2,
    pricingBackFistText: '1 video',
    stylesPricingBackText: styles.pricingBackText2,
    pricingBackFistPrice: '$72.00',
    stylesHrContainer: styles.hrContainer,
    stylesTextHrWrapper: styles.textHrWrapper,
    pricingBackSecondText: '4 videos',
    pricingBackSecondPrice: '$265.00',
    stylesStrikethroughPrice: styles.pricingBackBottomText2,
    strikethroughPrice: '$288.00',
    stylesUlWrapper: styles.ulWrapper2,
  },
];

export const pricingFirstCardLiData = defineMessages({
  '15-min video call to understand your process of content creation': {
    id: 'pricing_card_1_li_1_1',
    defaultMessage: '15-min video call to understand your process of content creation',
  },
  'Get professional tips on your existing videos': {
    id: 'pricing_card_1_li_2_1',
    defaultMessage: 'Get professional tips on your existing videos',
  },
  'Experience an immediate boost to your viewership': {
    id: 'pricing_card_1_li_3_1',
    defaultMessage: 'Experience an immediate boost to your viewership',
  },
});

export const pricingSecondCardLiData = defineMessages({
  'One free trial': {
    defaultMessage: 'One free trial',
    id: 'pricing_card_2_li_1_1',
  },
  'Max 15-min running time': {
    defaultMessage: 'Max 15-min running time',
    id: 'pricing_card_2_li_1',
  },
  'One free thumbnail': {
    defaultMessage: 'One free thumbnail',
    id: 'pricing_card_2_li_2',
  },
  'One round of revisions': {
    defaultMessage: 'One round of revisions',
    id: 'pricing_card_2_li_3',
  },
  'High-quality royalty-free music': {
    defaultMessage: 'High-quality royalty-free music',
    id: 'pricing_card_2_li_4',
  },
  'Pro cuts & transitions': {
    defaultMessage: 'Pro cuts & transitions ',
    id: 'pricing_card_2_li_5',
  },
  'Text and lower thirds': {
    defaultMessage: 'Text and lower thirds',
    id: 'pricing_card_2_li_7',
  },
  'Standard features': {
    defaultMessage: 'Standard features',
    id: 'pricing_card_2_li_8',
  },
});

export const pricingThirdCardLiData = defineMessages({
  'Everything in Gold+': {
    defaultMessage: 'Everything in Gold+',
    id: 'pricing_card_3_li_1',
  },
  'Max 25-min running time': {
    defaultMessage: 'Max 25-min running time',
    id: 'pricing_card_3_li_2',
  },
  'Three free thumbnails': {
    defaultMessage: 'Three free thumbnails',
    id: 'pricing_card_3_li_3',
  },
  'Unlimited revisions': {
    defaultMessage: 'Unlimited revisions',
    id: 'pricing_card_3_li_4',
  },
  'B-rolls using stock videos and images': {
    defaultMessage: 'B-rolls using stock videos and images',
    id: 'pricing_card_3_li_5',
  },
  'Repurposed video for other social media platforms': {
    defaultMessage: 'Repurposed video for other social media platforms',
    id: 'pricing_card_3_li_6',
  },
  'One free intro title card': {
    defaultMessage: 'One free intro title card',
    id: 'pricing_card_3_li_7',
  },
});

export const pricingSecondCardTooltipText = defineMessages({
  'Based on 45-min footage provided. $0.35 per additional minute of footage. $0.12 per additional minute of footage when Twitch markers and chat analytics are provided':
    {
      defaultMessage:
        'Based on 45-min footage provided. $0.35 per additional minute of footage. $0.12 per additional minute of footage when Twitch markers and chat analytics are provided',
      id: 'pricing_card_2_tooltip_1',
    },
  '5-10 small changes or 1-2 major changes including music': {
    defaultMessage: '5-10 small changes or 1-2 major changes including music',
    id: 'pricing_card_2_tooltip_2',
  },
  '1. Easy communication (Frame.io)': {
    defaultMessage: '1. Easy communication (Frame.io)',
    id: 'pricing_card_2_tooltip_3_1',
  },
  '2. Effects (time remapping, slow-mo, fast-mo, stabilization, zoom, glitch, etc.)': {
    defaultMessage: '1. Easy communication (Frame.io)',
    id: 'pricing_card_2_tooltip_3_2',
  },
  '3. Remove objects and people from video': {
    defaultMessage: '3. Remove objects and people from video',
    id: 'pricing_card_2_tooltip_3_3',
  },
  '4. Audio mixing & correction': {
    defaultMessage: '4. Audio mixing & correction',
    id: 'pricing_card_2_tooltip_3_4',
  },
  '5. B-rolls using your own footage (max 3)': {
    defaultMessage: '5. B-rolls using your own footage (max 3)',
    id: 'pricing_card_2_tooltip_3_5',
  },
  '6. Color grading & Color correction': {
    defaultMessage: '6. Color grading & Color correction',
    id: 'pricing_card_2_tooltip_3_6',
  },
});

export const pricingThirdCardTooltipText = defineMessages({
  'Based on 90-min footage provided. $0.35 per additional minute of footage. $0.12 per additional minute of footage when Twitch markers and chat analytics are provided':
    {
      defaultMessage:
        'Based on 90-min footage provided. $0.35 per additional minute of footage. $0.12 per additional minute of footage when Twitch markers and chat analytics are provided',
      id: 'pricing_card_3_tooltip_1',
    },
  'Unlimited for 12 days': {
    defaultMessage: 'Unlimited for 12 days',
    id: 'pricing_card_3_tooltip_2',
  },
  'Max 3 B-rolls': {
    defaultMessage: 'Max 3 B-rolls',
    id: 'pricing_card_3_tooltip_3',
  },
});
