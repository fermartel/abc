import { ViewDetails } from './view-details';

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetails[];
}
