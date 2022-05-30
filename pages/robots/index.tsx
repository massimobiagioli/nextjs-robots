import useSWR from "swr";
import { Robot } from "../../types/robots";

const fetcher = async (input: RequestInfo) => {
  const res: Response = await fetch(input);
  return await res.json();
};

const RobotPage = () => {
  const { data } = useSWR<Robot[]>(`/api/robots`, fetcher);

  return (
    <div>
      <h1>Robots</h1>
      {data && data.map((robot) => <p>{robot.name}</p>)}
    </div>
  );
};

export default RobotPage;
