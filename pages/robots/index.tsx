import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { Robot } from "../../types/robots";

const RobotPage = () => {
  const { data } = useSWR<Robot[]>(`/api/robots`, fetcher);

  return (
    <div>
      <h1>Robots</h1>
      {data && data.map((robot) => <p key={robot.id}>{robot.name}</p>)}
    </div>
  );
};

export default RobotPage;
