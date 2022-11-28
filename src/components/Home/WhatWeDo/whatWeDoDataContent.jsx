import React from 'react';
import { defineMessages } from 'react-intl';

export const whatWeDoData = [
  {
    title: 'Twitch stream highlights',
    text: 'Do you have a 5-hour long stream VOD that you want to make highlights out of? We have developed an efficient process to handle these requirements such as:',
    listComponent1: 'Submitting whole VODs',
    listComponent2: 'Analyzing chats and your markers',
    listComponent3: 'Featuring funny and entertaining highlights',
    svgComponent1: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
          fill="#CCD2D7"
        />
        <path
          d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
          fill="#CCD2D7"
        />
        <path
          d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
          fill="#CCD2D7"
        />
        <path d="M18.3477 4.22708L13.9434 8.61902L15.3556 10.0352L19.7599 5.64328L18.3477 4.22708Z" fill="#CCD2D7" />
        <path
          d="M8.32004 9.67998L8.63004 9.99998L10.05 8.58998L6.03004 4.54998H6.02004L5.71004 4.22998L4.29004 5.63998L8.31004 9.68998L8.32004 9.67998Z"
          fill="#CCD2D7"
        />
        <path
          d="M15.41 13.9399L14 15.3499L17.99 19.3599L18.34 19.7099L19.76 18.2999L15.77 14.2899L15.41 13.9399Z"
          fill="#CCD2D7"
        />
        <path
          d="M8.59023 13.95L4.56023 17.96L4.24023 18.29L5.65023 19.7L9.68023 15.68L10.0102 15.36L8.59023 13.95Z"
          fill="#CCD2D7"
        />
        <path
          d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent3: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 22L16 17L7 8L2 22ZM12.35 16.18L5.3 18.7L7.82 11.65L12.35 16.18Z" fill="#CCD2D7" />
        <path
          d="M14.5297 12.53L20.1197 6.94001C20.6097 6.45001 21.3997 6.45001 21.8897 6.94001L22.4797 7.53001L23.5397 6.47001L22.9497 5.88001C21.8797 4.81001 20.1297 4.81001 19.0597 5.88001L13.4697 11.47L14.5297 12.53Z"
          fill="#CCD2D7"
        />
        <path
          d="M10.0597 6.87996L9.46973 7.46996L10.5297 8.52996L11.1197 7.93996C12.1897 6.86996 12.1897 5.11996 11.1197 4.04996L10.5297 3.45996L9.46973 4.52996L10.0597 5.11996C10.5397 5.59996 10.5397 6.39996 10.0597 6.87996Z"
          fill="#CCD2D7"
        />
        <path
          d="M17.0597 11.88L15.4697 13.47L16.5297 14.53L18.1197 12.94C18.6097 12.45 19.3997 12.45 19.8897 12.94L21.4997 14.55L22.5597 13.49L20.9497 11.88C19.8697 10.81 18.1297 10.81 17.0597 11.88Z"
          fill="#CCD2D7"
        />
        <path
          d="M15.0597 5.87996L11.4697 9.46996L12.5297 10.53L16.1197 6.93996C17.1897 5.86996 17.1897 4.11996 16.1197 3.04996L14.5297 1.45996L13.4697 2.51996L15.0597 4.10996C15.5397 4.59996 15.5397 5.39996 15.0597 5.87996Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    image360: '/images/whatWeDo/kraken-new-client/6-360.jpg',
    image768: '/images/whatWeDo/kraken-new-client/6-768.jpg',
    videoId: 'dzWY0zsB8Sk',
  },
  {
    title: 'Fashion and beauty',
    text: 'Are you sharing your fashion tips or beauty secrets? We will not only make glamorous videos for you, but we will also nurture your brand by: ',
    listComponent1: 'Expressing in vivid colors',
    listComponent2: 'Making the audience understand your style',
    listComponent3: 'Incorporating sponsorship requirements',
    svgComponent1: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.52985 19.65L3.86985 20.21V11.18L1.43986 17.04C1.02986 18.06 1.51985 19.23 2.52985 19.65ZM22.0299 15.95L17.0699 3.98C16.7599 3.23 16.0299 2.77 15.2599 2.75C14.9999 2.75 14.7299 2.79 14.4699 2.9L7.09985 5.95C6.34985 6.26 5.88985 6.98 5.86985 7.75C5.85985 8.02 5.90985 8.29 6.01986 8.55L10.9799 20.52C11.2899 21.28 12.0299 21.74 12.8099 21.75C13.0699 21.75 13.3299 21.7 13.5799 21.6L20.9399 18.55C21.9599 18.13 22.4499 16.96 22.0299 15.95ZM12.8299 19.75L7.86985 7.79L15.2199 4.75H15.2299L20.1799 16.7L12.8299 19.75Z"
          fill="#CCD2D7"
        />
        <path
          d="M11 10C11.5523 10 12 9.55228 12 9C12 8.44772 11.5523 8 11 8C10.4477 8 10 8.44772 10 9C10 9.55228 10.4477 10 11 10Z"
          fill="#CCD2D7"
        />
        <path
          d="M5.87988 19.75C5.87988 20.85 6.77988 21.75 7.87988 21.75H9.32988L5.87988 13.41V19.75Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent3: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    image360: '/images/whatWeDo/kraken-new-client/1-360.jpg',
    image768: '/images/whatWeDo/kraken-new-client/1-768.jpg',
    videoId: '928VLS2ZNGk',
  },
  {
    title: 'Cooking',
    text: 'Is this your family’s favorite recipe? We can help you make it viral until it becomes everyone’s favorite by:',
    listComponent1: 'Showing the recipe in a graphic',
    listComponent2: 'Using voiceover, if needed',
    listComponent3: 'Handling footages from multiple camera angles',
    svgComponent1: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 8C19.55 8 18.74 9.44 19.07 10.51L15.52 14.07C15.22 13.98 14.78 13.98 14.48 14.07L11.93 11.52C12.27 10.45 11.46 9 10 9C8.55 9 7.73 10.44 8.07 11.52L3.51 16.07C2.44 15.74 1 16.55 1 18C1 19.1 1.9 20 3 20C4.45 20 5.26 18.56 4.93 17.49L9.48 12.93C9.78 13.02 10.22 13.02 10.52 12.93L13.07 15.48C12.73 16.55 13.54 18 15 18C16.45 18 17.27 16.56 16.93 15.48L20.49 11.93C21.56 12.26 23 11.45 23 10C23 8.9 22.1 8 21 8Z"
          fill="#CCD2D7"
        />
        <path d="M15 9L15.94 6.93L18 6L15.94 5.07L15 3L14.08 5.07L12 6L14.08 6.93L15 9Z" fill="#CCD2D7" />
        <path d="M3.5 11L4 9L6 8.5L4 8L3.5 6L3 8L1 8.5L3 9L3.5 11Z" fill="#CCD2D7" />
      </svg>
    ),
    svgComponent2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 15C13.66 15 14.99 13.66 14.99 12L15 6C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6V12C9 13.66 10.34 15 12 15ZM10.8 5.9C10.8 5.24 11.34 4.7 12 4.7C12.66 4.7 13.2 5.24 13.2 5.9L13.19 12.1C13.19 12.76 12.66 13.3 12 13.3C11.34 13.3 10.8 12.76 10.8 12.1V5.9ZM17.3 12C17.3 15 14.76 17.1 12 17.1C9.24 17.1 6.7 15 6.7 12H5C5 15.41 7.72 18.23 11 18.72V22H13V18.72C16.28 18.24 19 15.42 19 12H17.3Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent3: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 13H12V15L15 12L12 9V11H8V9L5 12L8 15V13ZM18 9.5V6C18 5.45 17.55 5 17 5H3C2.45 5 2 5.45 2 6V18C2 18.55 2.45 19 3 19H17C17.55 19 18 18.55 18 18V14.5L22 18.5V5.5L18 9.5ZM16 17H4V7H16V17Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    image360: '/images/whatWeDo/kraken-new-client/3-360.jpg',
    image768: '/images/whatWeDo/kraken-new-client/3-768.jpg',
    videoId: 'PJgQEsxo7ok',
  },
  {
    title: 'Vlog',
    text: 'Do you want your audience to experience your emotion from a trip or event, or share an important moment of your life with others? We will help you with that by:',
    listComponent1: 'Inserting great background music',
    listComponent2: 'Adding fancy cuts and transitions',
    listComponent3: 'Delivering your emotions effectively',
    svgComponent1: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 2H4C2.9 2 2 2.9 2 4V14H4V4H14V2ZM18 6H8C6.9 6 6 6.9 6 8V18H8V8H18V6ZM20 10H12C10.9 10 10 10.9 10 12V20C10 21.1 10.9 22 12 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10ZM20 20H12V12H20V20Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent3: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
          fill="#CCD2D7"
        />
        <path
          d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
          fill="#CCD2D7"
        />
        <path
          d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM7 14C7.78 16.34 9.72 18 12 18C14.28 18 16.22 16.34 17 14H7Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    image360: '/images/whatWeDo/kraken-new-client/4-360.jpg',
    image768: '/images/whatWeDo/kraken-new-client/4-768.jpg',
    videoId: 'jwzhDGJ6cWM',
  },
  {
    title: 'Product review',
    text: 'Did you just try out interesting products? We will help you share your unique insights on those products by:',
    listComponent1: 'Using appropriate B-rolls',
    listComponent2: 'Handling footages from multiple camera angles',
    listComponent3: 'Incorporating sponsorship requirements',
    svgComponent1: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 8V16L15 12L10 8ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 13H12V15L15 12L12 9V11H8V9L5 12L8 15V13ZM18 9.5V6C18 5.45 17.55 5 17 5H3C2.45 5 2 5.45 2 6V18C2 18.55 2.45 19 3 19H17C17.55 19 18 18.55 18 18V14.5L22 18.5V5.5L18 9.5ZM16 17H4V7H16V17Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent3: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    image360: '/images/whatWeDo/kraken-new-client/5-360.jpg',
    image768: '/images/whatWeDo/kraken-new-client/5-768.jpg',
    videoId: 'MAhqHodtflM',
  },
  {
    title: 'Fitness',
    text: 'Ready to share your own workout routine? We give special treatment to fitness videos by:',
    listComponent1: 'Selecting energetic music',
    listComponent2: 'Adding a countdown timer',
    listComponent3: 'Giving a hint to the next exercise',
    svgComponent1: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.0703 1.01001H9.07031V3.01001H15.0703V1.01001ZM11.0703 14.01H13.0703V8.01001H11.0703V14.01ZM19.1003 7.39001L20.5203 5.97001C20.0903 5.46001 19.6203 4.98001 19.1103 4.56001L17.6903 5.98001C16.1403 4.74001 14.1903 4.00001 12.0703 4.00001C7.10031 4.00001 3.07031 8.03001 3.07031 13C3.07031 17.97 7.09031 22 12.0703 22C17.0503 22 21.0703 17.97 21.0703 13C21.0703 10.89 20.3303 8.94001 19.1003 7.39001ZM12.0703 20.01C8.20031 20.01 5.07031 16.88 5.07031 13.01C5.07031 9.14001 8.20031 6.01001 12.0703 6.01001C15.9403 6.01001 19.0703 9.14001 19.0703 13.01C19.0703 16.88 15.9403 20.01 12.0703 20.01Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    svgComponent3: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.55 19.09L4.96 20.5L6.75 18.7L5.34 17.29L3.55 19.09ZM11 20H13V23H11V20ZM1 11H4V13H1V11ZM13 4.04999V8.00999L14 8.58999C15.24 9.30999 16 10.63 16 12.05C16 14.26 14.21 16.05 12 16.05C9.79 16.05 8 14.26 8 12.05C8 10.63 8.77 9.30999 10 8.58999L11 8.00999V4.04999H13ZM15 2.04999H9V6.85999C7.21 7.89999 6 9.82999 6 12.05C6 15.36 8.69 18.05 12 18.05C15.31 18.05 18 15.36 18 12.05C18 9.82999 16.79 7.89999 15 6.85999V2.04999ZM20 11H23V13H20V11ZM17.24 18.71L19.03 20.51L20.44 19.1L18.64 17.31L17.24 18.71Z"
          fill="#CCD2D7"
        />
      </svg>
    ),
    image360: '/images/whatWeDo/kraken-new-client/2-360.jpg',
    image768: '/images/whatWeDo/kraken-new-client/2-768.jpg',
    videoId: 'aLUqWRnDL5k',
  },
];

export const playSvg = (
  <svg width="46" height="50" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.3341 1.10246C3.73149 -1.48326 0 0.634992 0 5.82993V44.1663C0 49.3665 3.73149 51.482 8.3341 48.8987L42.5469 29.6821C47.151 27.0955 47.151 22.9047 42.5469 20.3187L8.3341 1.10246Z"
      fill="white"
    />
  </svg>
);

export const messagesWhatWeDo = defineMessages({
  'Fashion and beauty': {
    defaultMessage: 'Fashion and beauty',
    id: 'what_we_do_title1',
  },
  'Are you sharing your fashion tips or beauty secrets? We will not only make glamorous videos for you, but we will also nurture your brand by:':
    {
      defaultMessage:
        'Are you sharing your fashion tips or beauty secrets? We will not only make glamorous videos for you, but we will also nurture your brand by:',
      id: 'what_we_do_text1',
    },
  Fitness: {
    defaultMessage: 'Fitness',
    id: 'what_we_do_title2',
  },
  'Ready to share your own workout routine? We give special treatment to fitness videos by:': {
    defaultMessage: 'Ready to share your own workout routine? We give special treatment to fitness videos by:',
    id: 'what_we_do_text2',
  },
  Cooking: {
    defaultMessage: 'Cooking',
    id: 'what_we_do_title3',
  },
  'Is this your family’s favorite recipe? We can help you make it viral until it becomes everyone’s favorite by:': {
    defaultMessage:
      'Is this your family’s favorite recipe? We can help you make it viral until it becomes everyone’s favorite by:',
    id: 'what_we_do_text3',
  },
  Vlog: {
    defaultMessage: 'Vlog',
    id: 'what_we_do_title4',
  },
  'Do you want your audience to experience your emotion from a trip or event, or share an important moment of your life with others? We will help you with that by:':
    {
      defaultMessage:
        'Do you want your audience to experience your emotion from a trip or event, or share an important moment of your life with others? We will help you with that by:',
      id: 'what_we_do_text4',
    },
  'Product review': {
    defaultMessage: 'Product review',
    id: 'what_we_do_title5',
  },
  'Did you just try out interesting products? We will help you share your unique insights on those products by:': {
    defaultMessage:
      'Did you just try out interesting products? We will help you share your unique insights on those products by:',
    id: 'what_we_do_text5',
  },
  'Twitch stream highlights': {
    defaultMessage: 'Twitch stream highlights',
    id: 'what_we_do_title6',
  },
  'Do you have a 5-hour long stream VOD that you want to make highlights out of? We have developed an efficient process to handle these requirements such as:':
    {
      defaultMessage:
        'Do you have a 5-hour long stream VOD that you want to make highlights out of? We have developed an efficient process to handle these requirements such as:',
      id: 'what_we_do_text6',
    },
});

export const whatWeDoListComponents = defineMessages({
  'Expressing in vivid colors': {
    defaultMessage: 'Expressing in vivid colors',
    id: 'what_we_do_li_1_1',
  },
  'Making the audience understand your style': {
    defaultMessage: 'Making the audience understand your style',
    id: 'what_we_do_li_1_2',
  },
  'Incorporating sponsorship requirements': {
    defaultMessage: 'Incorporating sponsorship requirements',
    id: 'what_we_do_li_1_3',
  },
  'Selecting energetic music': {
    defaultMessage: 'Selecting energetic music',
    id: 'what_we_do_li_2_1',
  },
  'Adding a countdown timer': {
    defaultMessage: 'Adding a countdown timer',
    id: 'what_we_do_li_2_2',
  },
  'Giving a hint to the next exercise': {
    defaultMessage: 'Giving a hint to the next exercise',
    id: 'what_we_do_li_2_3',
  },
  'Showing the recipe in a graphic': {
    defaultMessage: 'Showing the recipe in a graphic',
    id: 'what_we_do_li_3_1',
  },
  'Using voiceover, if needed': {
    defaultMessage: 'Using voiceover, if needed',
    id: 'what_we_do_li_3_2',
  },
  'Handling footages from multiple camera angles': {
    defaultMessage: 'Handling footages from multiple camera angles',
    id: 'what_we_do_li_3_3',
  },
  'Inserting great background music': {
    defaultMessage: 'Inserting great background music',
    id: 'what_we_do_li_4_1',
  },
  'Adding fancy cuts and transitions': {
    defaultMessage: 'Adding fancy cuts and transitions',
    id: 'what_we_do_li_4_2',
  },
  'Delivering your emotions effectively': {
    defaultMessage: 'Delivering your emotions effectively',
    id: 'what_we_do_li_4_3',
  },
  'Using appropriate B-rolls': {
    defaultMessage: 'Using appropriate B-rolls',
    id: 'what_we_do_li_5_1',
  },
  // 'Handling footages from multiple camera angles': {
  //   defaultMessage: 'Handling footages from multiple camera angles',
  //   id: 'what_we_do_li_5_2',
  // },
  // 'Incorporating sponsorship requirements': {
  //   defaultMessage: 'Incorporating sponsorship requirements',
  //   id: 'what_we_do_li_5_3',
  // },
  'Submitting whole VODs': {
    defaultMessage: 'Submitting whole VODs',
    id: 'what_we_do_li_6_1',
  },
  'Analyzing chats and your markers': {
    defaultMessage: 'Analyzing chats and your markers',
    id: 'what_we_do_li_5_2',
  },
  'Featuring funny and entertaining highlights': {
    defaultMessage: 'Featuring funny and entertaining highlights',
    id: 'what_we_do_li_5_3',
  },
});
