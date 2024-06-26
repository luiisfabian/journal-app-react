import { AddToQueueOutlined, MailOutline } from '@mui/icons-material'
import { Typography, BottomNavigationAction, IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../view'


export const JournalPage = () => {
  return (

    <JournalLayout className="animate__animated animate__fadeIn animate__faster">
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton size='large' sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }} >
        <AddToQueueOutlined sx={{fontSize: 30}} />
      </IconButton>
    </ JournalLayout>


  )
}
