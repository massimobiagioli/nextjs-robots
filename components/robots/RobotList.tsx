import { RobotListComponentProps } from "../../types/robots";
import RobotDetail from "./RobotDetail";

const RobotList = ({ robots }: RobotListComponentProps) => {
  return (
    <div>
      <h1>Robot List</h1>
      {robots &&
        robots.map((robot) => (
          <RobotDetail key={robot.id} robot={robot}></RobotDetail>
        ))}
    </div>
  );
};

export default RobotList;
