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

export type Category = {
  id: number
  name: string
  urlImg: string
}

// type preus = Pick<User, 'id' | 'firstName'>

export type Ingredient = {
  id: string
  name: string
  typeId: number
  urlImg: string
  type: {
    id: number
    name: string
  }
}

export type Instruction = {
  step: number
  description: string
}

export type Recipe_ingredients = {
  id: string
  amount: string
  recipeId: string
  ingredientId: string
  ingredient: Ingredient
}

export type Recipe = {
  id: string
  title: string
  description: string
  urlImg: string
  time: number
  portions: number
  origin: string
  likes: number
  user: Pick<User, 'id' | 'firstName' | 'lastName'>
  instructions: Instruction[]
  recipes_ingredients: Recipe_ingredients[]
}