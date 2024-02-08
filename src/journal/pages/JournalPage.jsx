import { MailOutline } from '@mui/icons-material'
import { Typography, BottomNavigationAction } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../view'


export const JournalPage = () => {
  return (

      <JournalLayout >
        {/* <NothingSelectedView /> */}
        <NoteView />

      </ JournalLayout>


  )
}
