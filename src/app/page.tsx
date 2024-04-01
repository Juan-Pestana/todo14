import { AddForm } from '@/components/AddForm'
import { DeleteForm } from '@/components/DeleteForm'
import { Todo } from '@/components/Todo'
import prisma from '@/lib/prisma'

export default async function Home() {
  // let todos = await sql`SELECT * FROM todos`
  let todos = await prisma.todo.findMany()

  return (
    <main className=" w-screen h-screen flex justify-center items-center">
      <div className="p-3 w-full max-w-lg">
        <h1 className="sr-only">Todos</h1>
        <AddForm />
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} id={todo.id} text={todo.text} />
          ))}
        </ul>
      </div>
    </main>
  )
}
