import bcrypt from 'bcryptjs';

let saltRounds = 10;

export let hashPassword = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
}
