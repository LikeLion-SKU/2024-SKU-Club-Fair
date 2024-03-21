import { useState } from 'react';
import Sheet from 'react-modal-sheet';

import { ClubButton, SheetHeader } from '../styles/ClubList';

export default function BoothList({ title, description, img, height }) {
  const [isOpen, setOpen] = useState(false);
  const [clickButton, setClickButton] = useState(false);
  function buttonClickHandler() {
    setClickButton(true);
    setOpen(true);
  }

  function modalControlHandler() {
    setOpen(false);
    setClickButton(false);
  }

  return (
    <>
      <ClubButton onClick={buttonClickHandler} $color={clickButton}>
        <div style={{ display: 'flex' }}>
          <img src={img} style={{ width: '50px' }} />
          <p style={{ marginLeft: '10px' }}>{title}</p>
        </div>
      </ClubButton>
      <Sheet
        isOpen={isOpen}
        onClose={modalControlHandler}
        snapPoints={[height]}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <SheetHeader>
              <h1>{title}</h1>
              <p>{description}</p>
            </SheetHeader>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
