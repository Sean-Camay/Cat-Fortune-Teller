import { MainNav } from '../../components/MainNav'
import { FortuneGenerator } from '../../components/Fortune-Generator/FortuneGenerator'
import { SaveFortune } from '../../components/Save-Fortune/SaveFortune'

export const MainView = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-orange-300'>
      <MainNav />
      <h1 className='text-4xl font-bold mb-4'>Welcome to the Main View</h1>
      <FortuneGenerator name='Sean' />
      <SaveFortune />
    </div>
  )
}
