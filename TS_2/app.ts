let age: number = 50;
let n: string = 'Max';
let toggle:boolean = true;
let empty: null = null;
let notInitialize:undefined = undefined;
let callback = (a: number) => { return 100 + a };

let anything: any = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number] = ['Max', 21];

enum Loder { LOADING, READY };

const page = {
  load: Loder.LOADING,
}


if (page.load === Loder.LOADING) {
  console.log('LOADING');
}

if (page.load === Loder.READY) {
  console.log('READY');
}

let typeAny: string | number;

let literal: 'enable' | 'disable';

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type PageType = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'close' | 'open',
  details?: {
    createAt: string,
    updateAt: string,
  }
}

const page1: PageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: PageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}