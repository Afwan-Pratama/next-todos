import React, { useState } from 'react'

import { Button, Card, Checkbox, Col, Loading, Row, Spacer, Text } from '@nextui-org/react'

import { Edit , Delete } from 'react-iconly'
import { gql, useMutation } from '@apollo/client'

const deleteTodo = gql`
mutation MyMutation($id: Int!) {
  delete_todolist(where: {id: {_eq : $id}}) {
    affected_rows
  }
}
`
const checkTodo = gql`
mutation MyMutation($is_done: Boolean, $id: Int) {
  update_todolist(where: {id: {_eq: $id}}, _set: {is_done: $is_done}) {
    affected_rows
  }
}
`

export default function TodoCard(props) {

  const {todo,handleRefetch} = props

  const [deleteItem,{loading:loadingDelete}] = useMutation(deleteTodo)

  const [checkListTodo,{loading:loadingCheck}] = useMutation(checkTodo)

  if(loadingDelete||loadingCheck){
    return <Loading/>
  }
  
  const handleDeleteTodo = () => {
    deleteItem({variables:{
      id : todo.id
    }})
    handleRefetch()
  }

  const handleCheckTodo = () => {
    checkListTodo({variables:{
      id : todo.id,
      is_done : !todo.is_done
    }})
    handleRefetch()
  }

  return (
    <Card
    clickable
    bordered
    >
        <Row
        align='center'
        >

            <Row
            align='center'
            >

                <Checkbox
                onChange={handleCheckTodo}
                isSelected={todo.is_done}
                />

                <Spacer/>

                <Text>{todo.title}</Text>

                </Row>

            <Spacer/>

            <Button 
            shadow
            ghost
            rounded
            color='gradient'
            auto icon={<Edit/>}/>

            <Spacer/>

            <Button
            rounded
            shadow
            ghost
            color='gradient'
            onClick={handleDeleteTodo}
            auto icon={<Delete/>}/>

        </Row>
    
    </Card>
  )
}
