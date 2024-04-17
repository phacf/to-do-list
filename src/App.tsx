import { Circle, PlusCircle, Trash } from '@phosphor-icons/react'
import logo from './assets/logo.svg'
export function App() {

  return (
    <div className='h-full w-full bg-gray600'>
      <header className='h-48 bg-gray700  flex justify-center items-center'>
        <img src={logo} />
      </header>
      <main className=''>
        <form className='flex w-[48%] mx-auto gap-1 -mt-7'>
          <input className='text-large rounded-[8px] text-gray100 placeholder:text-gray300 bg-gray500 p-4 w-full focus:outline-none focus:border-purple200 focus:ring-1 focus:ring-purple200' placeholder='Adicione uma nova tarefa' />
          <button className='flex text-medium p-4 bg-blue200 text-gray100 hover:bg-blue100 gap-2 font-bold rounded-[8px] items-center justify-center'>Criar <PlusCircle weight='bold' /></button>
        </form>

        <div className='mt-16 w-[48%] mx-auto'>
          <header className='flex justify-between'>
            <div className='flex items-center gap-2 font-bold'>
              <strong className='text-medium text-blue100 '>
                Tarefas criadas
              </strong>
              <span className='bg-gray400 px-2 py-0.5 rounded-full text-gray200 text-small'>
                5
              </span>
            </div>
            <div className='flex items-center gap-2 font-bold'>
              <strong className='text-medium text-purple100 '>Concluidas</strong>
              <span className='bg-gray400 px-2 py-0.5 rounded-full text-gray200 text-small'>2 de 5</span>
            </div>
          </header>

          <div className='flex mt-6 flex-col gap-3'>
            <div className='flex bg-gray500 border border-gray400 rounded-[8px] p-4 items-start gap-3'>
              <button className='text-blue100 leading-none text-large font-bold'>
                <Circle weight='bold'  />
              </button>
              <p className='text-gray100 text-medium'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias blanditiis accusantium consectetur maxime, aut praesentium. Fugiat recusandae dicta tenetur, beatae quo optio hic excepturi dolores aperiam adipisci cumque quos ullam.
              </p>
              <button className='text-gray300 leading-none text-large'>
                <Trash />
              </button>
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}

