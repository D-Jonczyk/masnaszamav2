import {Authority} from './authority';

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string,
  lastName: string,
  phonenumber: number;
  imgUrl: string;
  authorities: Authority[];
  addressId:number;
}

// TODO: pobieranie kuriera z istniejącej sesji
