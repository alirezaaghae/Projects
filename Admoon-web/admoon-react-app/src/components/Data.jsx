
export const allSteps = {
  Audit: {
    '1' : {
      title: 'Account Analysis & Optimization',
      text: 'We analyze your Google Ads account structure, settings, and targeting to optimize campaign reach and alignment with business goals.'
    },
    '2' : {
      title: 'Performance Evaluation',
      text: 'Metrics like CTR, conversion rates, CPA, and ROAS are assessed to identify strengths and weaknesses, guiding improvements.'
    },
    '3' : {
      title: 'Keyword & Ad Copy Refinement',
      text: 'We conduct keyword analysis to refine targeting and reduce ad spend, while improving ad copy and extensions for better click-through and conversion rates.'
    },
    '4' : {
      title: 'Bidding Strategy Optimization',
      text: 'Maximize ROI with reviewed bidding strategies, bid adjustments, and automated options, based on campaign objectives and data analysis.'
    },
    '5' : {
      title: 'Competitor Analysis & Detailed Report',
      text: 'Thorough competitor analysis identifies areas for differentiation and provides a detailed report with data-driven insights, recommendations, and action steps for enhanced campaign performance.'
    }
  }, 
  TuneUp: {
    '1' : {
      title: 'Comprehensive Evaluation',
      text: "Our Tune Up process begins with a thorough evaluation that spans at least three days. We conduct in-depth market research, analyze your competitors' strategies, review your landing pages, perform meticulous target audience analysis, and dive into pro keyword research."
    },
    '2' : {
      title: 'Strategic Recommendations',
      text: "Armed with valuable insights, we develop strategic recommendations tailored to your campaign's needs. We optimize bidding strategies, refine ad copies, and implement data-driven recommendations to enhance your campaign's performance."
    },
    '3' : {
      title: 'Fine-Tuning and Optimization',
      text: "Our expert team works diligently to fine-tune your campaign, ensuring that every aspect is optimized to its fullest potential. We adjust targeting, bidding, and ad placements to maximize your reach and drive better results."
    },
    '4' : {
      title: 'Rapid Implementation',
      text: "Unlike traditional services, Tune Up includes one-time rapid implementation of the recommended changes. We swiftly put the optimization strategies into action, minimizing downtime and ensuring a seamless transition."
    },
    '5' : {
      title: 'Result Evaluation',
      text: "After implementing the optimizations, we closely monitor your campaign's performance, tracking key metrics and evaluating the impact of the changes made. This enables us to fine-tune and adjust further, ensuring continued success."
    }
  }, 
  AdsManage: {
    '1' : {
      title: 'Pre-Run Research',
      text: 'We analyze your Google Ads account structure, settings, and targeting to optimize campaign reach and alignment with business goals.'
    },
    '2' : {
      title: 'Campaign Setup',
      text: 'Metrics like CTR, conversion rates, CPA, and ROAS are assessed to identify strengths and weaknesses, guiding improvements.'
    },
    '3' : {
      title: 'Ongoing Management and Optimization',
      text: 'We conduct keyword analysis to refine targeting and reduce ad spend, while improving ad copy and extensions for better click-through and conversion rates.'
    },
    '4' : {
      title: 'Your Strategic Partner for Boosted Success',
      text: 'Maximize ROI with reviewed bidding strategies, bid adjustments, and automated options, based on campaign objectives and data analysis.'
    }
  }};

export const collaborating = {
  Audit: {
    '1' : {
      imgUrl: 'assets/images/step1Icon.svg',
      text: "You can securely share access to your Google Ads account or export relevant data for us to analyze."
    },
    '2' : {
      imgUrl: 'assets/images/step2Icon.svg',
      text: "We offer flexible communication via email, phone, or video chat to accommodate your preferences."
    },
    '3' : {
      imgUrl: 'assets/images/step3Icon.svg',
      text: "We dive deep into your Google Ads account and We offer tailored advice and recommendations to enhance your campaign's performance and achieve better results!"
    },
    '4' : {
      imgUrl: 'assets/images/step4Icon.svg',
      text: "Our engaging video presentation or comprehensive PDF report will provide valuable insights and recommendations tailored to your campaign."
    }
  }, 
  TuneUp: {
    '1' : {
      imgUrl: 'assets/images/step1Icon.svg',
      text: "You can securely share access to your Google Ads account or export relevant data for us to analyze."
    },
    '2' : {
      imgUrl: 'assets/images/step2Icon.svg',
      text: "We offer flexible communication via email, phone, or video chat to accommodate your preferences."
    },
    '3' : {
      imgUrl: 'assets/images/step3Icon.svg',
      text: "We dive deep into your Google Ads account and We offer tailored advice and recommendations to enhance your campaign's performance and achieve better results!"
    },
    '4' : {
      imgUrl: 'assets/images/step4Icon.svg',
      text: "Our engaging video presentation or comprehensive PDF report will provide valuable insights and recommendations tailored to your campaign."
    }
  }, 
  AdsManage: {
    '1' : {
      imgUrl: 'assets/images/step1Icon.svg',
      text: "You can securely share access to your Google Ads account or export relevant data for us to analyze."
    },
    '2' : {
      imgUrl: 'assets/images/step2Icon.svg',
      text: "We offer flexible communication via email, phone, or video chat to accommodate your preferences."
    },
    '3' : {
      imgUrl: 'assets/images/step3Icon.svg',
      text: "We dive deep into your Google Ads account and We offer tailored advice and recommendations to enhance your campaign's performance and achieve better results!"
    },
    '4' : {
      imgUrl: 'assets/images/step4Icon.svg',
      text: "Our engaging video presentation or comprehensive PDF report will provide valuable insights and recommendations tailored to your campaign."
    }
  }};

export const people = [{
    id: 0,
    name: "Ali Hajizadeh",
    field: "CEO on Admoon",
    comment: "Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 5
  }, {
    id: 1,
    name: "Alireza Aghaei",
    field: "Developer",
    comment: "I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 3
  }, {
    id: 2,
    name: "Ali Hajizadeh",
    field: "CEO on Admoon",
    comment: "Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 4
  }, {
    id: 3,
    name: "Alireza Aghaei",
    field: "Developer",
    comment: "I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 3
  }, {
    id: 4,
    name: "Ali Hajizadeh",
    field: "CEO on Admoon",
    comment: "Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 5
  }];

  export const getImageUrl = (person) => {
    return (
        window.location.origin +'/assets/images/'+ person.imageId + 'Profile2.png'
    );
  }