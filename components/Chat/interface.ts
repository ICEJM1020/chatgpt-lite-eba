export interface ChatMessage {
  content: string
  role: ChatRole
}

export interface Persona {
  id?: string
  role: ChatRole
  avatar?: string
  name?: string
  prompt?: string
  key?: string
  isDefault?: boolean
}

export interface Chat {
  id: string
  name: string
  persona?: Persona
  messages?: ChatMessage[]
}

export type ChatRole = 'assistant' | 'user' | 'system'
