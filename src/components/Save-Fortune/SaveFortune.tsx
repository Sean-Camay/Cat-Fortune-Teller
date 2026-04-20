import { useDispatch, useSelector } from 'react-redux'
import { saveFortune, setCurrentFortune } from '../../store/fortuneSlice'
import { RootState } from '../../store'
import { useState } from 'react'

import { Snackbar, Alert, Button } from '@mui/material'

export const SaveFortune = () => {
  const dispatch = useDispatch()
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const currentFortune = useSelector(
    (state: RootState) => state.fortune.currentFortune,
  )

  const handleSaveFortune = () => {
    if (!currentFortune) return
    dispatch(saveFortune(currentFortune))
    dispatch(setCurrentFortune(''))
    setOpenSnackbar(true)
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <div className='flex flex-col'>
      <Button
        variant='text'
        size='small'
        onClick={handleSaveFortune}
        sx={{ color: 'white' }}
      >
        Save Fortune
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity='success'>
          Fortune saved successfully!
        </Alert>
      </Snackbar>
    </div>
  )
}
