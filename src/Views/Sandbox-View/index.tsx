import { Sandbox } from '../../components/Sandbox/Sandbox'
import { MainNav } from '../../components/Main-Nav/MainNav'

export const SandboxView = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-orange-300'>
      <MainNav />
      <Sandbox />
    </div>
  )
}
