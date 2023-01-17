type Status = 'inProgress' | 'finished';

export interface Task {
  name: string;
  status: Status;
}