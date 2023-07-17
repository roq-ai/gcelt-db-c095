import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExamInterface {
  id?: string;
  name: string;
  marks: number;
  student_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ExamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  student_id?: string;
}
