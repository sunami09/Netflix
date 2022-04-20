import { XIcon } from '@heroicons/react/solid'
import MuiModal from '@mui/material/Modal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState)

    const handleClose = () => {
    setShowModal(false)
    // setMovie(null)
    // toast.dismiss()
  }
        return <MuiModal open={showModal} onClose={handleClose}>
            
            <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>

        

        </MuiModal>
}

export default Modal