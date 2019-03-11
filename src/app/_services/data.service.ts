import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  createDb() {

   // tslint:disable-next-line:prefer-const
   let  contacts =  [
    {
      id:  1,
      f_name:  'Khutso',
      l_name: 'Matjipa',
      company: 'myCompany',
      email: 'example@email.com',
      cell_phone: '0712345678',
      office_phone: '0112345678',
      dof: '19-04-1994'
    },
    {
      id:  2,
      f_name:  'Tebogo',
      l_name: 'Kgari',
      company: 'myCompany',
      email: 'example2@email.com',
      cell_phone: '0715623478',
      office_phone: '0115623478',
      dof: '06-06-1997'
    }
   ];

   return {contacts};

  }
}
