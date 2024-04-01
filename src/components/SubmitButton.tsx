import { useFormStatus } from 'react-dom'

interface IsubmitButton {
  type: 'add' | 'delete' | 'edit'
}

export function SubmitButton({ type }: IsubmitButton) {
  const { pending } = useFormStatus()

  const types = {
    add: 'Add',
    delete: 'Delete',
    edit: 'Edit',
  }

  return (
    <button
      className="px-3 py-2 bg-slate-400 rounded-md"
      type="submit"
      aria-disabled={pending}
    >
      {types[type]}
    </button>
  )
}
