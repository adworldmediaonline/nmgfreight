import type { StatsConfig } from "./types";

export const defaultStatsConfig: StatsConfig = {
  items: [
    {
      iconName: "package",
      value: "50,000+",
      label: "Successful Shipments",
    },
    {
      iconName: "clock",
      value: "99%",
      label: "On-Time Delivery Rate",
    },
    {
      iconName: "globe",
      value: "50+",
      label: "Locations Served",
    },
    {
      iconName: "handshake",
      value: "500+",
      label: "Satisfied Clients",
    },
  ],
};
