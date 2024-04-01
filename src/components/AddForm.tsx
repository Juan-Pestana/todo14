'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createTodo } from '@/actions/actions'
import { SubmitButton } from './SubmitButton'
import { useRef } from 'react'

const initialState = {
  message: '',
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState)

  const formRef = useRef<HTMLFormElement | null>(null)

  if (state.message) {
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={formAction}>
      <label className="block" htmlFor="todo">
        Enter Todo
      </label>
      <div className="flex gap-2">
        <input
          className="rounded-md text-black p-1 text-wrap flex-1"
          type="text"
          id="todo"
          name="todo"
          required
        />
        <SubmitButton type="add" />
      </div>

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}
