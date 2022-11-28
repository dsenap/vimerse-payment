import React from 'react';
import { defineMessages } from 'react-intl';
import s from './HowItWork.module.scss';

export const howItWorkContent = [
  {
    image: (
      <svg width="142" height="108" viewBox="0 0 142 108" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d3)">
          <path
            d="M59.4646 17.7921L36.6047 77.2278C35.4739 80.1678 38.0273 83.2005 41.1169 82.5872L115.931 67.7351C119.204 67.0854 120.29 62.9494 117.757 60.7762L65.8029 16.1924C63.705 14.3922 60.457 15.2119 59.4646 17.7921Z"
            fill="#3A8FC6"
          />
          <path
            d="M75.087 40.2725H70.8249L64.6793 44.2206V48.3257L70.4627 44.6311H70.6076V64.9998H75.087V40.2725Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d3"
            x="-18"
            y="-10"
            width="182"
            height="130"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="5" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.75 0 0 0 0 0.75 0 0 0 0 0.75 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    ),
    title: 'Video call',
    title_id: 'how_it_work_title1',
    text: "Let's have a chat.Tell us your style, requirements and reference channels.Learn how to get the most out of our services.",
    imageStyle: s.cardImage1,
    textStyle: s.cardText,
    text_id: 'how_it_work_text1',
  },
  {
    image: (
      <svg width="142" height="116" viewBox="0 0 142 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d4)">
          <path
            d="M36.7244 20.9348L58.0633 87.4622C58.9617 90.263 62.4743 91.1689 64.6152 89.1518L115.243 41.453C117.53 39.2977 116.553 35.4674 113.512 34.6718L41.5457 15.8433C38.4929 15.0446 35.7606 17.93 36.7244 20.9348Z"
            fill="#F99E74"
          />
          <path
            d="M62.6388 62.9998H79.5906V59.2569H68.8207V59.0878L73.0827 54.7533C77.8881 50.1411 79.2163 47.8954 79.2163 45.1063C79.2163 40.965 75.8477 37.9344 70.8732 37.9344C65.9712 37.9344 62.494 40.977 62.494 45.6738H66.756C66.756 43.1503 68.3498 41.5686 70.8129 41.5686C73.1673 41.5686 74.918 43.0054 74.918 45.3357C74.918 47.4003 73.6623 48.8733 71.2234 51.3485L62.6388 59.764V62.9998Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d4"
            x="-18"
            y="-12"
            width="182"
            height="130"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="5" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.75 0 0 0 0 0.75 0 0 0 0 0.75 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    ),
    title: 'Revisions',
    title_id: 'how_it_work_title2',
    text: 'Our video editors will complete the first draft in two calendar days. Through our video collaboration tool, you can make revision requests.',
    imageStyle: s.cardImage,
    textStyle: s.cardText2,
    text_id: 'how_it_work_text2',
  },
  {
    image: (
      <svg width="142" height="114" viewBox="0 0 142 114" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d5)">
          <path
            d="M108.548 21L31.3781 21C28.0145 21 26.1528 24.8992 28.2676 27.5149L76.0795 86.651C77.9123 88.9179 81.4765 88.5258 82.7728 85.9148L112.131 26.7787C113.451 24.1198 111.517 21 108.548 21Z"
            fill="#F486AE"
          />
          <path
            d="M70.9985 60.3378C76.2868 60.3378 80.1384 57.3073 80.1263 53.1297C80.1384 50.0388 78.2066 47.8172 74.7414 47.3222V47.129C77.4218 46.5495 79.2208 44.5573 79.2087 41.7803C79.2208 38.0132 76.0091 34.9344 71.0709 34.9344C66.2655 34.9344 62.5468 37.7959 62.4502 41.9373H66.7606C66.833 39.8606 68.7648 38.5686 71.0468 38.5686C73.3529 38.5686 74.8863 39.9692 74.8742 42.0459C74.8863 44.2071 73.0993 45.6439 70.5397 45.6439H68.3543V49.0971H70.5397C73.6668 49.0971 75.5262 50.6667 75.5141 52.9003C75.5262 55.0857 73.6306 56.5829 70.9864 56.5829C68.4992 56.5829 66.5795 55.2909 66.4708 53.2746H61.931C62.0518 57.4522 65.7826 60.3378 70.9985 60.3378Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d5"
            x="-18"
            y="-15"
            width="182"
            height="130"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="5" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.75 0 0 0 0 0.75 0 0 0 0 0.75 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    ),
    title: 'Complete',
    title_id: 'how_it_work_title3',
    text: 'You will receive final videos in two calendar days following your submission of revision requests. Then, you can start sharing!',
    imageStyle: s.cardImage,
    textStyle: s.cardTex3,
    text_id: 'how_it_work_text3',
  },
];

export const messagesHowItWork = defineMessages({
  'Video call': {
    defaultMessage: 'Video call',
    id: 'how_it_work_title1',
  },
  "Let's have a chat.Tell us your style, requirements and reference channels.Learn how to get the most out of our services.":
    {
      defaultMessage:
        "Let's have a chat.Tell us your style, requirements and reference channels.Learn how to get the most out of our services.",
      id: 'how_it_work_text1',
    },
  Revisions: {
    defaultMessage: 'Revisions',
    id: 'how_it_work_title2',
  },
  'Our video editors will complete the first draft in two calendar days. Through our video collaboration tool, you can make revision requests.':
    {
      defaultMessage:
        'Our video editors will complete the first draft in two calendar days. Through our video collaboration tool, you can make revision requests.',
      id: 'how_it_work_text2',
    },
  Complete: {
    defaultMessage: 'Complete',
    id: 'how_it_work_title3',
  },
  'You will receive final videos in two calendar days following your submission of revision requests. Then, you can start sharing!':
    {
      defaultMessage:
        'You will receive final videos in two calendar days following your submission of revision requests. Then, you can start sharing!',
      id: 'how_it_work_text3',
    },
});
