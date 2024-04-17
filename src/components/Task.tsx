import { Trash, Check } from "@phosphor-icons/react";
import { twJoin, twMerge } from 'tailwind-merge'
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
          <button title="Completar task" onClick={onCheck}
            className={
              twMerge('w-6 h-6 flex justify-center items-center rounded-full border-[2px] border-blue100 text-gray100 leading-none  font-bold hover:bg-gray400 hover:border-blue200 ',
                task.complete && 'bg-purple200 border-blue200  hover:bg-purple100 hover:border-purple100'
              )
            }
          >
            {task.complete && <Check className="text-medium text-gray100 font-black" />}
          </button>
          <p className={twMerge(
            'text-medium  break-all',
            !task.complete ? 'text-gray100' : 'text-gray300 line-through'
          )}>
            {task.content}
          </p>
        </div>

        <button title="Deletar task" onClick={onDelete} className='text-gray300 rounded-[4px] h-6 w-6 flex justify-center items-center leading-none text-large hover:text-red100 hover:bg-gray400'>
          <Trash />
        </button>
      </div>


    </div>
  )
}

