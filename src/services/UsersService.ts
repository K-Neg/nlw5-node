import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/user";
import { UsersRepository } from "../repositories/UserRepository"



class UsersService {
    private usersRepository: Repository<User>
    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        const usersExists = await this.usersRepository.findOne({
            email,
        })

        if (usersExists) {
            return usersExists;
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user
    }
}

export { UsersService }