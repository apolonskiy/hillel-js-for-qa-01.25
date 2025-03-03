let text: number | string = 'text';

text = 2;
// ------
type TGender = 'male' | 'female';

const printGender = (gender: TGender) => {
    console.log(gender);
}


printGender('female');


 // -----


interface IUser  {
    // [key: string]: string | number;
    name: string;
    age: number;
    lastName?: string;
}

const getUser = (user: IUser) => {
    console.log(user);
}

const uesr1: IUser  = {
    name: 'AAA', 
    age: 123
}

getUser({age: 23, name: 'Alex', lastName: 'Anp'})

interface ISuperHuman extends IUser {
    superpowers: string;
}

const superGuy: ISuperHuman = {
    superpowers: 'sdf',
    name: 'sd',
    age: 3
}

// ---

interface User {
  name: string;
  id: number;
}

class Fake{}
 
class UserAccount implements User {
  name: string;
  id: number;
  lastName: string;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.lastName = 'qwe'
  }

  ptrinName(): string {
    return this.name
  }

  async someCall(): Promise<number> {
    return 123
  } 

  async someCall2(): Promise<void> {
    console.log('qwe')
  } 

}
 
let user: UserAccount;

user = new UserAccount("Murphy", 1);
console.log(user.ptrinName)


//---


const notStringInput = (input: string | number) => input;

notStringInput(1)

// ---

interface IGenericHuman<Type> {
    age: number;
    race: Type;
}

type TRaces = 'European' | 'Asian'
const human1: IGenericHuman<TRaces> = {
    age: 3,
    race: 'European'
}


const func1 = (num = 1) => num;

func1(3)


type Point = { x: number; y: number };
type P = keyof Point;


// ----
interface IObject {
    firstArg: string, 
    secondArg?: boolean
}

const objectFun = (obj: {firstArg: string, secondArg?: boolean}): void => {
    console.log(obj.firstArg, obj.secondArg);
}

objectFun({firstArg: 'qwe'})


const arrFunc = (strings: IObject[]) => {
    return strings.map(str => `${str} and smth else`);
}

const arr = ['qwe', 'asd', 'www'];

arrFunc([{firstArg: 'qwe'}, {firstArg: 'asd'}])

const strOrNumbGert = (): string | number => 123
// const strOrNum: string | number = '123';

// const onlyString = strOrNum;

arr.push(String(strOrNumbGert()))
