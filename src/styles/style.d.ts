// src/styled.d.ts
import 'styled-components'
import { theme } from '@types' // mesmo import que você usa

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
