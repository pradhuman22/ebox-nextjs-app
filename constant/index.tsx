import {
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
