import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import { twMerge } from 'tailwind-merge'
import { TaskType } from "../App";



interface TaskProps {
  task: TaskType
  onDelete?: () => void
  onCheck?: () => void
}

export function Task({ task, onCheck, onDelete }: TaskProps) {
  return (
    <div className='flex  flex-col gap-3'>
      <div className='flex bg-gray500 border border-gray400 justify-between rounded-[8px] p-4 items-start gap-3'>

        <div className='flex gap-3 items-start'>
          <button onClick={onCheck} className='text-blue100 leading-none text-large font-bold'>
            {!task.complete ? <Circle weight='bold' /> : <CheckCircle weight='bold' />}
          </button>
          <p className={twMerge(
            'text-medium leading-none break-all',
            !task.complete ? 'text-gray100' : 'text-gray300 line-through'
          )}>
            {task.content}
          </p>
        </div>

        <button onClick={onDelete} className='text-gray300 leading-none text-large hover:text-red100'>
          <Trash />
        </button>
      </div>


    </div>
  )
}

