import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "J.C. Movement, INC. is a 501c3 non-profit organized for religious, charitable, education &  for scientific purpose in Nashville, Tn.",
  quickLinks: [  
    { text: "Volunteer", url: "https://docs.google.com/forms/d/e/1FAIpQLSegv6vY3S0JXOM6Az-lD48YU7oZ6CeB7ZDZcOt4cA8qt0phkQ/viewform", target: "blank" },
    { text: "Donate", url: "https://www.jcmovementpayments.org/product/donation/2?cs=true" , target: "blank" },
  ],
  email: "jcm@jcmovement.org",
  telephone: "+1 (615) 933-8762",
  socials: {
    facebook: "https://www.facebook.com/jcmovement77",
    instagram: "https://www.instagram.com/j.c_movement/",
    twitter: "https://twitter.com/jc_movement77",
    youtube: "https://www.youtube.com/channel/UCEhAXwgsVLTBvci0jmX0VyA"
  }
};
