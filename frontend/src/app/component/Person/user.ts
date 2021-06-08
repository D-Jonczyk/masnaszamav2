import {Authority} from './authority';

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string,
  lastName: string,
  imgUrl: string;
  authorities: Authority[];
}

// TODO: pobieranie kuriera z istniejącej sesji
