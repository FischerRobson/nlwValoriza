import { getCustomRepository } from "typeorm";
import UsersRepostories from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepostories = getCustomRepository(UsersRepostories);

    if (!email) throw new Error("Email incorrect");

    const userAlreadyExists = await usersRepostories.findOne({
      email
    });

    if (userAlreadyExists) throw new Error("User already exists");

    const user = usersRepostories.create({
      name, email, admin
    });

    await usersRepostories.save(user);

    return user;
  }
}

export default CreateUserService;