import dynamic from 'next/dynamic';
import {
  BenefitsPlaceholder,
  HowItWorksPlaceholder,
  PricingPlaceholder,
  ReviewsPlaceholder,
  StartCreatingPlaceholder,
  WhatWeDoPlaceholder,
} from '../placeholders/homePagePlaceholders';

export const Exclusive = dynamic(() => import('../../Home/Exclusive/Exclusive'), {
  loading: BenefitsPlaceholder,
});
export const HowItWork = dynamic(() => import('../../Home/HowItWork/HowItWork'), {
  loading: HowItWorksPlaceholder,
});
export const Pricing = dynamic(() => import('../../Home/Pricing/Pricing'), {
  loading: PricingPlaceholder,
});
export const Portfolio = dynamic(() => import('../../Home/Portfolio/Portfolio'), {
  loading: WhatWeDoPlaceholder,
});
// export const WhatWeDo = dynamic(() => import('../../Home/WhatWeDo/WhatWeDo'), {
//   loading: WhatWeDoPlaceholder,
// });
export const Reviews = dynamic(() => import('../../Home/Reviews/Reviews'), {
  loading: ReviewsPlaceholder,
});
export const FirstClass = dynamic(() => import('../../Home/FirstClass/FirstClass'));

export const StartCreating = dynamic(() => import('../../Home/StartCreatingNew/StartCreating'), {
  loading: StartCreatingPlaceholder,
});
