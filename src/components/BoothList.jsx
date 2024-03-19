import { useState } from 'react';
import Sheet from 'react-modal-sheet';

import { ClubButton } from '../styles/ClubList';

export default function BoothList() {
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
        test
      </ClubButton>
      <Sheet isOpen={isOpen} onClose={modalControlHandler}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>test</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
