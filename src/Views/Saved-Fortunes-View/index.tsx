import { MainNav } from '../../components/MainNav'
import { ListFortunes } from '../../components/List-Saved-Fortunes/ListFortunes'

export const SavedFortunesView = () => {
  return (
    <div>
      <MainNav />
      <h1>Saved Fortunes</h1>
      <ListFortunes />
    </div>
  )
}
