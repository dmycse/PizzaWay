import { mongoDbConnect } from "../../../db/mongo";
import { User } from "../../../models/user";

export async function POST(req) {
  let body = await req.json();

  mongoDbConnect();

  return Response.json(await User.create(body));
}