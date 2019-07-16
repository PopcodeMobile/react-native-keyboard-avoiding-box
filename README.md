# react-native-keyboard-avoiding-box

A no hassle solution for handling elements spacing when the keyboard shows up

## Demo

**TODO**

## Install

If you're using `yarn` simply run:
```
$ yarn add react-native-keyboard-avoiding-box
```

However if you prefer `npm` you can run:
```
$ npm install --save react-native-keyboard-avoiding-box
```

## Quick Start

```JSX
class LoginScreen extends React.Component<Props> {
  render () {
    return (
      <KeyboardAvoidingBox minHeight={200}>
        <Spring force={18} />
        <Image source={Images.logo} />
        <Spring force={10} />
        <PasswordAuthFields />
        <Spring force={28} />
      </KeyboardAvoidingBox>
    )
  }
}
```

## API reference

The package exports a `KeyboardAvoidingBox` component which is the one you'd use to wrap your elements, and a `Spring` component which is the one responsible to resize it's height according to the box pressure.

### `KeyboardAvoidingBox`

Container component responsible for adjusting it's height when the keyboard appears.

Basic usage look like this:

```JSX
<KeyboardAvoidingBox minHeight={80}>
  <Spring force={1} />
  <Logo />
  <Text>Slogan</Text>
  <Spring force={1} />
</KeyboardAvoidingBox>
```

#### Props

##### `minHeight` (`required`)

The wrapped content minimum height. If the visible screen space is smaller than this prop, a ScrollView will be activated.

### `Spring`

Component that will get pressed by the KeyboardAvoidingBox when the keyboard appears, reducing it's size according to the provided force. It's behavior is similar to a metal spring.

#### Props

##### `force` (`required`)

The force of the spring. It defines how much the spring will get shrunken when the keyboard shows up.
