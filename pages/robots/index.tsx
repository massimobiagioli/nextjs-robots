import useSWR from "swr";
import RobotList from "../../components/robots/RobotList";
import fetcher from "../../lib/fetcher";
import { Robot } from "../../types/robots";

const RobotPage = () => {
  const { data } = useSWR<Robot[]>(`/api/robots`, fetcher);

  return <>{data && <RobotList robots={data} />}</>;
};

export default RobotPage;
