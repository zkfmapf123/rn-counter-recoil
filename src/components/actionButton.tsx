import React, {useState} from 'react'
import {Button, Text} from 'react-native'
import {useRecoilState} from 'recoil'
import st from 'styled-components/native'
import {counterState} from '../stores/state'

const ActionBtn = st.Button`
  
`

type ActionSyntax = 'add' | 'mul' | 'min' | 'div' | 'init'

interface Props {
  syntax: ActionSyntax
  value: number
  onPress: (v: number) => number
}

export const ActionButton = ({syntax, onPress}: Props) => {
  const [counterValue, setCounterValue] = useRecoilState(counterState)

  const _onPress = () => setCounterValue(onPress(counterValue))
  return <ActionBtn title={syntax} onPress={_onPress}></ActionBtn>
}
