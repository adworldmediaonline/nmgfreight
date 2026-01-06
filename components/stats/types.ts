export interface StatItem {
  iconName: "package" | "clock" | "globe" | "handshake";
  value: string;
  label: string;
}

export interface StatsConfig {
  items: StatItem[];
  backgroundImage?: string;
}

