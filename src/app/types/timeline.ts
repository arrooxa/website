export interface TimelineDTO {
  title: string;
  subtitle?: string;
  date: string;
  content: string;
}

export interface TimelineProps {
  timelineInfo: TimelineDTO[];
}
