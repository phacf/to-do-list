import { PlusCircle } from '@phosphor-icons/react'
import logo from './assets/logo.svg'
import { Task } from './components/Task'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export type TaskType = {
  id: string
  complete: boolean
  content: string
}

export function App() {
  const [taskList, setTask] = useState<TaskType[]>([])
  const [taskContent, setContent] = useState('')
  const completedTasks = taskList.filter((task) => task.complete).length

  const handleCrateTask = () => {
    event?.preventDefault()
    setTask((state) => ([...state, {
      id: uuidv4(),
      complete: false,
      content: taskContent
    }]))
    setContent('')
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  const handleDelete = (id: string) => {
    setTask((state) => (state.filter(task => task.id != id)))
  }

  return (
    <div className='h-full w-full bg-gray600'>
      <header className='h-48 bg-gray700  flex justify-center items-center'>
        <img src={logo} />
      </header>
      <main className=''>
        <form onSubmit={handleCrateTask} className='flex w-[48%] mx-auto gap-1 -mt-7'>
          <input value={taskContent} onChange={handleChangeInput} className='text-large rounded-[8px] text-gray100 placeholder:text-gray300 bg-gray500 p-4 w-full focus:outline-none focus:border-purple200 focus:ring-1 focus:ring-purple200' placeholder='Adicione uma nova tarefa' />
          <button type='submit' className='flex text-medium p-4 bg-blue200 text-gray100 hover:bg-blue100 gap-2 font-bold rounded-[8px] items-center justify-center'>Criar <PlusCircle weight='bold' /></button>
        </form>

        <div className='mt-16 w-[48%] flex flex-col gap-3 mx-auto'>
          <header className='flex mb-3 justify-between'>
            <div className='flex items-center gap-2 font-bold'>
              <strong className='text-medium text-blue100 '>
                Tarefas criadas
              </strong>
              <span className='bg-gray400 px-2 py-0.5 rounded-full text-gray200 text-small'>
                {taskList.length}
              </span>
            </div>
            <div className='flex items-center gap-2 font-bold'>
              <strong className='text-medium text-purple100 '>Concluidas</strong>
              <span className='bg-gray400 px-2 py-0.5 rounded-full text-gray200 text-small'>
                {`${completedTasks} de ${taskList.length}`}
              </span>
            </div>
          </header>
          {taskList.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
      </main>

    </div>
  )
}

