import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconCalendar,
  IconCompass,
  IconSettings,
  IconTicket,
  IconUser,
} from "@tabler/icons-react";

export const mainMenus = [
  { label: "Events", url: "/home", icon: IconTicket },
  { label: "Calendar", url: "/calendar", icon: IconCalendar },
  { label: "Discover", url: "/discover", icon: IconCompass },
];

export const userMenus = [
  { label: "View Profile", url: "/home", icon: IconUser },
  { label: "Settings", url: "/settings", icon: IconSettings },
];

export const footerMenus = [
  { title: "Pricing", url: "/pricing" },
  { title: "Help", url: "/help" },
  { title: "Terms & Condition", url: "/terms" },
  { title: "Privacy", url: "/privacy" },
];

export const socialBtn = [
  {
    icon: IconBrandInstagram,
    title: "instagram",

    url: "https://www.instagram.com",
  },
  {
    icon: IconBrandFacebook,
    title: "facebook",

    url: "https://facebook.com",
  },
  {
    icon: IconBrandX,
    title: "x",
    url: "https://x.com/home",
  },
];
