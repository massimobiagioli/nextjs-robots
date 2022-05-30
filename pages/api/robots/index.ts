import { NextApiRequest, NextApiResponse } from "next";
import { SupabaseAdmin } from "../../../lib/supabase-admin";

const RobotsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { data } = await SupabaseAdmin.from("robot").select(
      `id, 
      robot_family!robot_family_id (id, name), 
      code, 
      name, 
      created_at`
    );

    if (data) {
      return res.status(200).json(data);
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }

  return res.status(400).json({
    message: "Unsupported Request",
  });
};

export default RobotsApi;
