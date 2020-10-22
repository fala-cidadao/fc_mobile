import { LoginDto } from './LoginDto.interface';
import { UserDto } from './UserDto.interface';

export interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(foundUser: LoginDto): Promise<void>;
    signUp(foundUser: UserDto): Promise<void>;
    signOut(): void;
};