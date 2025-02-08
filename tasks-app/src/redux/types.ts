export interface ITask {
  id: string;
  title: string;
  status: string;
}
export interface ITasks {
  tasks: ITask[];
  selectedTask?: ITask;
}
