import {Aeroport} from './aeroport';

export class Zbor {
  id: number;
  aeroportStart: Aeroport;
  aeroportEnd: Aeroport;
  etd: Date;
  eta: Date;
  indicativ: string;
  avion: string;
  companie: string;
}
