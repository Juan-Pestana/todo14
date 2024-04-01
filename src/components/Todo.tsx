import React from 'react'
import { DeleteForm } from './DeleteForm'

export function Todo({ id, text }: { id: number; text: string }) {
  return (
    <li
      className="flex justify-between items-center p-2 my-2 rounded-md border border-slate-400"
      key={id}
    >
      {text}
      <DeleteForm id={id} todo={text} />
    </li>
  )
}
