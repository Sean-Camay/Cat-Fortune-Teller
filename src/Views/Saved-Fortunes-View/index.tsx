import { MainNav } from '../../components/Main-Nav/MainNav'
import { ListFortunes } from '../../components/List-Saved-Fortunes/ListFortunes'

export const SavedFortunesView = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-orange-300'>
      <MainNav />
      <ListFortunes />
    </div>
  )
}
