import { useState } from "react";
import * as C from "./App.style";
import ListItem from "./components/ListItem";
import { Item } from "./types/Item";
const App = () => {
  const [list, setList] = useState<Item[]>([]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
