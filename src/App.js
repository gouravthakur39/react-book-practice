import React, {Fragment, useState} from "react";
import Form from './Form'
import List from "./List";

const DUMMY = [
  {
    id: "1",
    title: "god of small thing",
    summary: "classic",
    author: "Arunditi Roy",
  },
];



const App = () => {
  const [record, setRecord] = useState(DUMMY)

  const handleAdd = (record) => {
    setRecord((prev) => {
      return [...prev, record]
    })
  }

  return (
    <Fragment>
      <Form onAdd={handleAdd} />
      <List items={record} />
    </Fragment>
  )
};

export default App;
