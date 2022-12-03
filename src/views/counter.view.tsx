import React, {useState} from 'react'
import {Alert, Text} from 'react-native'
import {useRecoilState} from 'recoil'
import st from 'styled-components/native'
import {ActionButton} from '../components/actionButton'
import {counterState} from '../stores/state'

const Container = st.View`
  display : flex;
  flex : 1;
  justify-content : center;
  align-items :center
`

export const CounterView = () => {
  const [counterValue, setCounterValue] = useRecoilState(counterState)

  const isValidNumber = (value: number) => {
    if (!value || value === 0) {
      Alert.alert(`0 is invalid value`)
      return 0
    }

    return value
  }

  return (
    <Container>
      <Text>{`Result : ${counterValue}`}</Text>
      <ActionButton syntax="add" value={counterValue} onPress={value => value + 1} />
      <ActionButton syntax="min" value={counterValue} onPress={value => value - 1} />
      <ActionButton syntax="mul" value={counterValue} onPress={value => isValidNumber(value * value)} />
      <ActionButton syntax="div" value={counterValue} onPress={value => isValidNumber(value / value)} />
      <ActionButton syntax="init" value={counterValue} onPress={_ => 0} />
    </Container>
  )
}
