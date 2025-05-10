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
    { text: "About", url: "/about" },
    { text: "Movements", url: "/#movements" },
    { text: "Events", url: "/#events" },
    { text: "Volunteer", url: "/contact#volunteer" },
    { text: "Donate", url: "https://my-business-102296.square.site/" }
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
