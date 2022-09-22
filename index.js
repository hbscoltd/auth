// function initalWelcome(name) {
//   return 'Welcome to HBS Auth module ' + name
// }

import {
  CustomLogin,
  CustomRegister,
  CustomForgotPassword,
  CustomResetPassword,
  CustomChangePassword,
  CustomProfile,
} from './auth'

import {
  handleDateFormat,
  handleDateTimeFormat,
  numberFormat,
  disableScroll,
  handleKeyDown,
  openUrl,
  toFloat,
  getNumber,
} from './helper'
import { TextInput, Welcome, SayHello } from './common'

module.exports = {
  CustomLogin,
  CustomRegister,
  CustomForgotPassword,
  CustomResetPassword,
  CustomChangePassword,
  CustomProfile,
  //common
  TextInput,
  Welcome,
  SayHello,
  //helper
  handleDateFormat,
  handleDateTimeFormat,
  numberFormat,
  disableScroll,
  handleKeyDown,
  openUrl,
  toFloat,
  getNumber,
}
