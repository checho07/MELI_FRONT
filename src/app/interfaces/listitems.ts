import { Item } from "./item"

export interface Listitems {
    author:{
        name: string
        lastname: string
      },
      categories:Array<string>,
      items: Item
    }

