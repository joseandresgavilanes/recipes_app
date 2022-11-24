/// <reference types="vite/client" />

export type Category = {
  id: string
  name: string
  urlImg: string
}

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  birthday: string
  gender: null | string
  role: string
  country: null | string
  status: string
  isVerified: boolean
}