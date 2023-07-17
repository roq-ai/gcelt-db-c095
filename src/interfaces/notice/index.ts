import { CollegeInterface } from 'interfaces/college';
import { GetQueryInterface } from 'interfaces';

export interface NoticeInterface {
  id?: string;
  title: string;
  description?: string;
  date: any;
  college_id?: string;
  created_at?: any;
  updated_at?: any;

  college?: CollegeInterface;
  _count?: {};
}

export interface NoticeGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  college_id?: string;
}
