import { UserServiceImpl } from 'typescript-shared';

const userService = new UserServiceImpl();
const user = userService.getUser();

console.log(user);
