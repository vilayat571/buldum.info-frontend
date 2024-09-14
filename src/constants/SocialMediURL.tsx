export interface IICON {
  url: string;
  src: string;
  alt: string;
  text: string;
}

import instagram_icon from "../assets/images/Instagram_icon.png";
import facebook_icon from "../assets/images/Facebook_icon.png";
import whatsapp_icon from "../assets/images/Whatsapp_icon.webp";

export const socialMediaIcons: IICON[] = [
  {
    url: "https://www.facebook.com/sharer/sharer.php?u=",
    src: facebook_icon,
    alt: "Share on Facebook",
    text: "Facebook",
  },
  {
    url: "https://www.instagram.com/",
    src: instagram_icon,
    alt: "Share on Instagram",
    text: "Instagram",
  },
  {
    url: "https://api.whatsapp.com/send?text=",
    src: whatsapp_icon,
    alt: "Share on WhatsApp",
    text: "WhatsApp",
  },
];
