// @flow
import * as React from 'react'
import {
  Platform,
  View,
  Keyboard,
  Dimensions,
  ScrollView as RNScrollView,
  LayoutAnimation,
  StatusBar
} from 'react-native'

type KeyboardListener = {
  remove: Function
}

type KeyboardEvent = {
  endCoordinates: {
    screenY: number
  }
}

type Props = {
  children: React.Node,
  minHeight: number,
  scrollEnabled?: boolean
}

type State = {
  visibleHeight: number
}

export default class KeyboardAvoidingBox extends React.Component<Props, State> {
  render () {
    const { visibleHeight } = this.state
    const { minHeight, scrollEnabled, children } = this.props
    const height = visibleHeight >= minHeight ? visibleHeight : minHeight

    return (
      <ScrollView maxHeight={visibleHeight} enabled={!!scrollEnabled}>
        <View style={{ height }}>{children}</View>
      </ScrollView>
    )
  }

  static defaultProps = {
    scrollEnabled: true
  }

  keyboardDidShowListener: KeyboardListener
  keyboardDidHideListener: KeyboardListener

  state = {
    visibleHeight: getWindowHeight()
  }

  componentDidMount () {
    const keyboardDidShowEventName = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
    const keyboardDidHideEventName = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'
    this.keyboardDidShowListener = Keyboard.addListener(keyboardDidShowEventName, this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener(keyboardDidHideEventName, this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  setupAnimation = () => LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

  keyboardDidShow = ({ endCoordinates: { screenY } }: KeyboardEvent) => {
    this.setupAnimation()
    this.setState({ visibleHeight: screenY })
  }

  keyboardDidHide = () => {
    this.setupAnimation()
    this.setState({ visibleHeight: getWindowHeight() })
  }
}

function getWindowHeight () {
  if (Platform.OS === 'android') {
    return Dimensions.get('window').height - StatusBar.currentHeight
  }
  return Dimensions.get('window').height
}

type ScrollViewProps = {
  children: React.Node,
  enabled: boolean,
  maxHeight: number
}

function ScrollView ({ children, enabled, maxHeight }: ScrollViewProps) {
  if (enabled) {
    return (
      <RNScrollView keyboardShouldPersistTaps={'handled'} style={{ maxHeight }}>
        {children}
      </RNScrollView>
    )
  }

  return children
}
