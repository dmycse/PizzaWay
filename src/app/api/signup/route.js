import { mongoDbConnect } from "@/db/mongo";
import { User } from "@/models/user";
import bcrypt from 'bcrypt';
 

export async function POST(req) {
  const emailValidationStr = /\S+@\S+/;

  let body = await req.json();
  let { email, password: pass } = body;

  if (!emailValidationStr.test(email.toLowerCase())) {
    return Response.error();
  }

  // if (!pass.length || pass.length < 5)  {
  //   return Response.error();
  // }

  await mongoDbConnect();
  
  // const salt = bcrypt.genSaltSync(10);
  // body.password = bcrypt.hashSync(pass, salt)
  // console.log(`Salt: ${salt}`);
  // console.log(`Hash: ${body.password}`);

  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(pass, salt))
    .then(hash => {
      body.password = hash;
      User.create(body);
    })
    .catch(err => {
      console.warn(err.message);
      return Response.error();
      }
  );

  return Response.json(body);
}
    
