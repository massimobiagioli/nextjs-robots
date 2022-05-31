import { RobotDetailComponentProps } from "../../types/robots";

const RobotDetail = ({ robot }: RobotDetailComponentProps) => {
  return (
    <>
      <div>
        <p>
          Id: <b>{robot.id}</b>
        </p>
        <p>
          Code: <b>{robot.code}</b>
        </p>
        <p>
          Name: <b>{robot.name}</b>
        </p>
        <p>
          Family Name: <b>{robot.robot_family.name}</b>
        </p>
      </div>
      <hr />
    </>
  );
};

export default RobotDetail;
