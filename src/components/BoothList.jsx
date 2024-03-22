import { useState } from 'react';
import Sheet from 'react-modal-sheet';
import styled from 'styled-components';

import insta from '../../public/insta.png';
import { ClubButton, SheetHeader } from '../styles/ClubList';

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    background-color: rgba(255, 255, 255, 0.7) !important;
  }
  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
  }
`;

export default function BoothList({
  title,
  description,
  img,
  height,
  activity,
  representatives,
  sns,
  clubinfo,
  listShowHandler,
}) {
  const [isOpen, setOpen] = useState(false);
  const [clickButton, setClickButton] = useState(false);
  function buttonClickHandler() {
    setClickButton(true);
    setOpen(true);
    listShowHandler();
  }

  function modalControlHandler() {
    setOpen(false);
    setClickButton(false);
    listShowHandler();
  }

  return (
    <>
      <ClubButton onClick={buttonClickHandler} $color={clickButton}>
        <div style={{ display: 'flex' }}>
          {/* <img src={img} style={{ width: '50px' }} /> */}
          <p style={{ marginLeft: '10px' }}>{title}</p>
        </div>
      </ClubButton>
      <CustomSheet
        isOpen={isOpen}
        onClose={modalControlHandler}
        snapPoints={[height]}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <SheetHeader>
                <div>
                  <h1 style={{ marginBottom: '5px' }}>{title}</h1>
                  <p style={{ fontSize: '14px' }}>{description}</p>
                </div>
              </SheetHeader>
              <div style={{ margin: '10px 15px 20px 15px' }}>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                  <p style={{ position: 'relative', flex: '1' }}>주요 활동</p>
                  <div style={{ textAlign: 'center', flex: '2' }}>
                    <p>{activity}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                  <p
                    style={{
                      position: 'relative',
                      flex: '1',
                    }}
                  >
                    지원 문의
                  </p>
                  <div style={{ textAlign: 'right', flex: '2' }}>
                    {representatives.map((prod) => {
                      return (
                        <>
                          <p>{`${prod.part} ${prod.name} ${prod.phone}`}</p>
                        </>
                      );
                    })}
                    <p>
                      <img src={insta} />
                      {sns}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <p style={{ flex: '1' }}>부스컨텐츠</p>
                  <div style={{ textAlign: 'right', flex: '2' }}>
                    <p>
                      메뉴 :
                      {clubinfo.menu.map((prod) => {
                        return ` ${prod.name} `;
                      })}
                    </p>
                    <p>
                      활동 :
                      {clubinfo.game.map((prod) => {
                        return ` ${prod.name}, `;
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </CustomSheet>
    </>
  );
}
