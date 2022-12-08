type User = {
  id: number;
  name: string;
  age: number;
};

export const ListItem = (props: User) => {
  const { id, name, age } = props;
  return (
    <p>
      {id}:{name}({age})
    </p>
  );
};
