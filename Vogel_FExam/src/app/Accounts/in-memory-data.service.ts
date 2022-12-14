import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const account = [
      {
        id: 1,
      firstname: "Hairon",
      lastname: "Baron",
      email: "Haironbaron@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: 'Gumamela',
        barangay: 'Cutcut2nd',
        city: 'Capas',
        province: 'Tarlac',
      },
      gender: "Male",
      marital_status: "Single",
      date_of_birth: "March 12, 1999",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 2,
      firstname: "Jay",
      lastname: "Mark",
      email: "Jaymark@@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: 'Conception',
        barangay: 'Manga',
        city: 'Tarlac',
        province: 'Capas',
      },
      gender: "Male",
      marital_status: "Single",
      date_of_birth: "December 4, 1998",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 3,
      firstname: "Rolf",
      lastname: "Vogel",
      email: "roflVogel@@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: '169',
        barangay: 'Donalutgarda',
        city: 'Capas',
        province: 'Manila',
      },
      gender: "Male",
      marital_status: "Married",
      date_of_birth: "November 9, 1885",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 4,
      firstname: "Alexander",
      lastname: "Oliver",
      email: "Oliver@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: '123',
        barangay: 'Leletete',
        city: 'susuba',
        province: 'Tarlac',
      },
      gender: "Male",
      marital_status: "Single",
      date_of_birth: "February 20, 2013",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 5,
      firstname: "Boris",
      lastname: "Vogel",
      email: "BorisVogel@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: '170',
        barangay: 'cubcub2nd',
        city: 'Mabalacat',
        province: 'Pampanga',
      },
      gender: "Male",
      marital_status: "Single",
      date_of_birth: "June 19, 2016",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 6,
      firstname: "Loida",
      lastname: "Vogel",
      email: "LoidaVogel@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: '168',
        barangay: 'Lutgarda',
        city: 'Capas',
        province: 'Tarlac',
      },
      gender: "Female",
      marital_status: "Married",
      date_of_birth: "July 28, 1867",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 7,
      firstname: "Optimus",
      lastname: "Prime",
      email: "Optimusprime@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: 'Cybertron',
        barangay: 'Earth',
        city: 'Cube',
        province: 'Hongkong',
      },
      gender: "Male",
      marital_status: "Single",
      date_of_birth: "January 20, 1000",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 8,
      firstname: "Max",
      lastname: "Harris",
      email: "Max@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: '156',
        barangay: 'Cutcut1st',
        city: 'Bamban',
        province: 'Angeles',
      },
      gender: "Male",
      marital_status: "Single",
      date_of_birth: "December 7, 2012",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 9,
      firstname: "Johann",
      lastname: "Hernandez",
      email: "Hernandez@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: 'Lelekapilia',
        barangay: 'Susuba',
        city: 'Brookside',
        province: 'Bataan',
      },
      gender: "Male",
      marital_status: "Single",
      date_of_birth: "July 16, 1999",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    {
        id: 10,
      firstname: "Patrick",
      lastname: "Vogel",
      email: "Patrick@yahoo.com",
      mobile_number: 63955740633,
      address: {
        street: '189',
        barangay: 'Estrada',
        city: 'Sto. Domingo',
        province: 'Pangasinan',
      },
      gender: "Male",
      marital_status: "Single",
      date_of_birth: "Jan 20,1999",
      SSS_number: 1111-22-333,
      TIN: 100-123-456,
    },
    ];
    return{account}
  }

  generateId(account: Account[]): number{
    return account.length > 0 ? Math.max(...account.map(account => account.id)) + 1 : 10001;
  }
  constructor() { }
}
