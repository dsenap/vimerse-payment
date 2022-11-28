import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import s from './Logo.module.scss';

export const Icon = () => (
  <svg width="133" height="29" viewBox="0 0 133 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.47047 19.3739L13.6814 27.7216C13.7218 27.8055 13.7853 27.8763 13.8646 27.9259C13.9439 27.9754 14.0358 28.0017 14.1295 28.0017C14.2233 28.0017 14.3152 27.9754 14.3945 27.9259C14.4738 27.8763 14.5373 27.8055 14.5777 27.7216L21.5869 13.8165C21.6339 13.724 21.6503 13.6192 21.6337 13.517C21.6171 13.4148 21.5684 13.3204 21.4946 13.2472C21.4207 13.1741 21.3254 13.1258 21.2223 13.1094C21.1191 13.093 21.0134 13.1092 20.9201 13.1557L9.69276 18.7114C9.57498 18.7704 9.48551 18.8732 9.44387 18.9973C9.40224 19.1214 9.4118 19.2568 9.47047 19.3739Z"
      fill="#00A1B9"
    />
    <path
      d="M27.5278 0.0550978L16.0818 5.72444C15.9977 5.76495 15.9268 5.82807 15.8773 5.90658C15.8277 5.9851 15.8014 6.07585 15.8014 6.16847C15.8014 6.26109 15.8277 6.35184 15.8773 6.43035C15.9268 6.50887 15.9977 6.57199 16.0818 6.6125L22.9494 10.0155C23.008 10.0445 23.0718 10.0617 23.1371 10.0662C23.2025 10.0707 23.2681 10.0625 23.3302 10.0418C23.3923 10.0212 23.4497 9.98867 23.4991 9.94606C23.5484 9.90345 23.5889 9.85161 23.618 9.79351L28.1964 0.721139C28.2446 0.628338 28.2618 0.522817 28.2456 0.419717C28.2295 0.316616 28.1808 0.221236 28.1065 0.147263C28.0323 0.0732894 27.9363 0.024525 27.8323 0.00796695C27.7283 -0.0085911 27.6217 0.00790844 27.5278 0.0550978Z"
      fill="#F37233"
    />
    <path
      d="M7.60492 3.46397L0.724765 0.0556139C0.631387 0.00963976 0.525806 -0.00615678 0.42289 0.0104489C0.319974 0.0270545 0.224907 0.0752256 0.151077 0.148179C0.0772468 0.221132 0.0283722 0.315193 0.0113358 0.417115C-0.00570061 0.519037 0.00995932 0.623687 0.0561104 0.716327L6.93806 14.3498C6.98857 14.4486 7.07115 14.5277 7.17252 14.5744C7.2739 14.6211 7.38817 14.6327 7.49699 14.6072C7.6058 14.5818 7.70283 14.5209 7.77247 14.4343C7.84212 14.3476 7.88034 14.2403 7.88099 14.1295V3.90445C7.88072 3.81289 7.85475 3.7232 7.806 3.64542C7.75725 3.56763 7.68763 3.50481 7.60492 3.46397Z"
      fill="#14133E"
    />
    <path
      d="M22.0781 10.6354L9.5547 4.43144C9.47883 4.39472 9.3948 4.37771 9.31047 4.382C9.22615 4.38628 9.14431 4.41172 9.07263 4.45593C9.00095 4.50014 8.94179 4.56167 8.90068 4.63474C8.85958 4.70781 8.83789 4.79003 8.83765 4.87369V17.2816C8.83819 17.3651 8.8601 17.4471 8.90133 17.5199C8.94256 17.5928 9.00176 17.654 9.07339 17.698C9.14502 17.742 9.22674 17.7673 9.31092 17.7715C9.3951 17.7757 9.47897 17.7587 9.5547 17.7221L22.0781 11.5181C22.1607 11.4771 22.2302 11.414 22.2788 11.3361C22.3273 11.2581 22.353 11.1683 22.353 11.0768C22.353 10.9852 22.3273 10.8954 22.2788 10.8174C22.2302 10.7395 22.1607 10.6764 22.0781 10.6354Z"
      fill="#991C52"
    />
    <path
      d="M46.4687 9.48277L41.6823 20.8996H39.0902L34.3916 9.48277C34.06 8.648 33.8377 8.53788 33.1063 8.53788L33.3949 7.24487H37.561L37.8712 8.53966C37.0519 8.53966 36.896 8.7599 37.1541 9.48455L40.1245 16.7666C40.3058 17.3935 40.4465 18.0313 40.5458 18.6759C40.67 18.0305 40.8328 17.3929 41.0334 16.7666L44.158 9.48455C44.4681 8.73681 44.2243 8.53966 43.4033 8.53966L43.7206 7.24487H47.4439L47.754 8.53966C46.9796 8.53788 46.8021 8.66576 46.4687 9.48277Z"
      fill="#231F20"
    />
    <path
      d="M54.3331 20.7664H50.2781L49.9895 19.4716C50.8105 19.4716 51.0095 19.1857 51.0095 18.4397V9.5698C51.0095 8.80252 50.8105 8.53788 49.9895 8.53788L50.2781 7.24487H54.3331L54.6432 8.53966C53.824 8.53966 53.625 8.8043 53.625 9.57158V18.4344C53.625 19.1803 53.824 19.4663 54.6432 19.4663L54.3331 20.7664Z"
      fill="#231F20"
    />
    <path
      d="M74.2762 20.7664H70.3324L70.0223 19.4716C70.8631 19.4716 71.0638 19.1857 71.0638 18.4397V12.0457C71.0638 11.4312 71.1517 10.552 71.1517 10.552C70.9144 11.0575 70.648 11.5491 70.3539 12.0244L66.6987 17.6227H65.7002L62.1777 12.1825C61.8886 11.7013 61.6293 11.203 61.4015 10.6905C61.4015 10.6905 61.4911 11.6123 61.4911 12.2269V18.4432C61.4911 19.1892 61.6901 19.4752 62.5094 19.4752L62.1992 20.7699H58.4992L58.1891 19.4752C59.0083 19.4752 59.2306 19.1892 59.2306 18.4432V9.5698C59.2306 8.80252 59.0083 8.53788 58.1891 8.53788L58.4992 7.24487H61.579L66.3438 14.6655L71.1517 7.24487H74.2762L74.5864 8.53966C73.7671 8.53966 73.5448 8.8043 73.5448 9.57158V18.4344C73.5448 19.1803 73.7671 19.4663 74.5864 19.4663L74.2762 20.7664Z"
      fill="#231F20"
    />
    <path
      d="M88.4345 20.7664H78.263L77.9529 19.4716C78.7721 19.4716 78.9944 19.1857 78.9944 18.4397V9.5698C78.9944 8.80252 78.7721 8.53788 77.9529 8.53788L78.263 7.24487H87.8572V10.0085L86.7709 10.2731C86.7046 9.21813 86.4392 8.95527 84.8438 8.95527H81.6081V12.9071H84.8438C85.6863 12.9071 85.9732 12.7295 85.9732 11.9853L87.038 12.2926V15.2569L85.9732 15.5411C85.9732 14.7951 85.6863 14.6193 84.8438 14.6193H81.6081V19.0329H85.9301C87.2155 19.0329 87.436 18.6777 87.6349 17.6724L88.7446 17.9353L88.4345 20.7664Z"
      fill="#231F20"
    />
    <path
      d="M105.052 20.7664H102.015C99.9323 19.2745 100.94 15.1255 98.0716 15.1255H95.3683V18.4344C95.3683 19.1803 95.5906 19.4663 96.4098 19.4663L96.0997 20.7611H92.0214L91.7113 19.4663C92.5538 19.4663 92.7528 19.1803 92.7528 18.4344V9.5698C92.7528 8.82383 92.5323 8.53788 91.7113 8.53788L92.0214 7.24487H98.4749C101.687 7.24487 103.614 8.64978 103.614 11.0866C103.614 12.7561 102.684 13.9621 100.977 14.5553C102.591 15.0615 102.906 16.7524 103.328 17.93C103.704 19.0063 104.014 19.4663 105.101 19.4663H105.366L105.052 20.7664ZM98.2042 8.86646H95.3683V13.4328H98.1594C99.9987 13.4328 100.997 12.6425 100.997 11.1719C100.997 9.65861 100.043 8.86824 98.2042 8.86824V8.86646Z"
      fill="#231F20"
    />
    <path
      d="M112.585 20.9652C110.785 20.9776 109.012 20.5233 107.444 19.6473L108.042 17.1004H108.907C109.416 18.7699 111.058 19.2957 112.628 19.2957C114.025 19.2957 115.442 18.6598 115.442 17.2105C115.442 16.0028 114.557 15.4095 112.053 14.9708C109.747 14.5765 107.571 13.5002 107.571 11.019C107.571 8.53777 109.787 7.02275 112.734 7.02275C114.348 7.00013 115.944 7.35361 117.395 8.05467L116.819 10.4702H115.977C115.378 9.04929 113.981 8.6692 112.764 8.6692C111.257 8.6692 110.038 9.35123 110.038 10.6016C110.038 11.6779 110.934 12.1823 112.831 12.534C115.91 13.0828 118.015 14.049 118.015 16.7718C118.015 19.4946 115.532 20.9652 112.585 20.9652Z"
      fill="#231F20"
    />
    <path
      d="M131.684 20.7664H121.512L121.211 19.4716C122.03 19.4716 122.251 19.1857 122.251 18.4397V9.5698C122.251 8.80252 122.03 8.53788 121.211 8.53788L121.512 7.24487H131.108V10.0085L130.022 10.2731C129.956 9.21813 129.69 8.95527 128.095 8.95527H124.868V12.9071H128.095C128.937 12.9071 129.224 12.7295 129.224 11.9853L130.289 12.2926V15.2569L129.224 15.5411C129.224 14.7951 128.937 14.6193 128.095 14.6193H124.868V19.0329H129.19C130.474 19.0329 130.696 18.6777 130.895 17.6724L132.005 17.9353L131.684 20.7664Z"
      fill="#231F20"
    />
  </svg>
);

const Logo = () => {
  const router = useRouter();

  if (router.route === '/') {
    return (
      <div className={s.wrapper}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div onClick={() => window.scrollTo(0, 0)}>
          <Icon />
        </div>
      </div>
    );
  }

  return (
    <Link href="/" passHref>
      <a className={s.wrapper}>
        <Icon />
      </a>
    </Link>
  );
};

export default Logo;