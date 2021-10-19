type Props = {
  name: string;
  age: number;
}


export const Header = ({ name, age }: Props) => {
  return (
    <header>
      <h1>Olá {name}, tudo bem? {age} anos.</h1>
    </header>
  );
}