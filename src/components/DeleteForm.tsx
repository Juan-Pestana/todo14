'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { deleteTodo } from '@/actions/actions'
import { SubmitButton } from './SubmitButton'

const initialState = {
  message: '',
}

export function DeleteForm({ id, todo }: { id: number; todo: string }) {
  const [state, formAction] = useFormState(deleteTodo, initialState)

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="todo" value={todo} />
      <SubmitButton type="delete" />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}
