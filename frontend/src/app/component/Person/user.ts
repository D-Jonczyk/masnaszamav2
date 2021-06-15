import {Authority} from './authority';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phonenumber: number;
  email:string;
  imgUrl: string;
  password: string;
  username: string;
  addressId:number;
  authorities: Authority[];
}

// TODO: pobieranie kuriera z istniejącej sesji
