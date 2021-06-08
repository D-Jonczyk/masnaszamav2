import {Authority} from './authority';

export interface User {
  id: number;
  personId: number,
  username: string;
  firstname: string,
  lastname: string,
  imgUrl: string;
  authorities: Authority[];
}

// TODO: pobieranie kuriera z istniejącej sesji
