import {Authority} from './authority';

export interface User {
  id: number;
  username: string;
  firstname: string,
  lastname: string,
  imgUrl: string;
  authorities: Authority[];
}
