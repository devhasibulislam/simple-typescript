import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

function App() {
  /**
   * The primitives
   * string
   * number
   * boolean
  */

  let str1: string = 'Hello TypeScript';
  let num: number = 62;
  let isSmart: boolean = true;

  /**
   * The array: number, string
  */

  let arr: number[] = [2, 4, 6, 8, 10];
  let str2: string[] = ['foo', 'bar'];

  /**
   * The object
   * using regular order
  */

  let student1: { name: string, id: number, isSenior: boolean } = {
    name: "Tom Cruise",
    id: 1935202062,
    isSenior: false
  };

  /**
   * The object
   * using interface
   * using type defination
   * union type (|)
  */

  /* interface Obj {
    name: string,
    id: number,
    isSenior: boolean,
    gotFucked?: boolean | number
  } */

  type Obj = {
    name: string,
    id: number,
    isSenior: boolean,
    gotFucked?: boolean | number
  }

  let student2: Obj = {
    name: "Elizabeth Olsen",
    id: 1935202001,
    isSenior: true,
    gotFucked: 0
  };

  /**
   * Functions
   * Void type
   * Return type
  */

  const func1 = (name: string, appeared: number): void => {
    name = 'TypeScript'
    appeared = 2012

    console.log(name, appeared);
  }

  const func2 = (id: number, gotFucked: boolean | number): (number | boolean)[] => {
    id = 1935202062;
    gotFucked = false;

    return [id, gotFucked];
  }

  console.log(str1, str2, num, arr, isSmart, student1, student2, func1, func2);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <Users />
      </header>
    </div>
  );
}

export default App;
