export type RobotFamily = {
  id: number;
  name: string;
};

export type Robot = {
  id: number;
  robot_family: RobotFamily;
  code: string;
  name: string;
  created_at: Date;
};
