export type Item = {
  name: string;
  category: string;
  description: string;
  info: { title: string; content: string }[];
  stats: { title: string; content: string }[];
  levels: { level: string; bonus: string }[];
};
