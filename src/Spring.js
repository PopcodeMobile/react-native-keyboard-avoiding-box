// @flow
import * as React from 'react'
import { View } from 'react-native'

type Props = {
  force: number
}

export default function Spring ({ force }: Props) {
  return <View pointerEvents={'box-none'} style={{ flex: force }} />
}
