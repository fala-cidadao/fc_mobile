import { LoginDto } from './LoginDto.interface';
import { LoginResponse } from './LoginResponse.interface';
import { UserDto } from './UserDto.interface';

export interface AuthContextData {
    signed: boolean;
    // eslint-disable-next-line @typescript-eslint/ban-types
    user: LoginResponse | null;
    signIn(foundUser: LoginDto): Promise<LoginResponse | null | undefined>;
    signUp(foundUser: UserDto): Promise<void>;
    signOut(): void;
}
