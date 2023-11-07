export type Tabs = "Skills" | "Education" | "Certifications";

export interface TabsData {
  title: Tabs;
  id: Lowercase<Tabs>;
  content: React.ReactNode;
}

export interface TabButtonDTO {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}
