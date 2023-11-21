export interface TimelineDTO {
  title: string;
  subtitle?: string;
  start: string;
  end: string | null;
  content: string;
}

export interface TimelineProps {
  timelineInfo: TimelineDTO[];
}
