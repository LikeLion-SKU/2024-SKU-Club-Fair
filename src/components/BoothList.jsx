import { useState } from 'react';
import Sheet from 'react-modal-sheet';
import styled from 'styled-components';

import insta from '../../public/insta.png';
import { ClubButton, SheetHeader } from '../styles/ClubList';
import { Link } from 'react-router-dom';

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    background-color: rgba(255, 255, 255) !important;
    fontfamily: 'SUIT Variable';
  }
  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    fontfamily: 'SUIT Variable';
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
  mapHandler,
  value,
  defaultvalue,
}) {
  const [isOpen, setOpen] = useState(false);
  const [clickButton, setClickButton] = useState(false);

  function buttonClickHandler(e) {
    setClickButton(true);
    setOpen(true);
    listShowHandler();
    mapHandler(value);
  }

  function modalControlHandler() {
    setOpen(false);
    setClickButton(false);
    listShowHandler();
    mapHandler(defaultvalue);
  }

  return (
    <>
      <ClubButton
        onClick={buttonClickHandler}
        $color={clickButton}
        type="button"
        value="2"
      >
        <div style={{ display: 'flex' }}>
          {/* <img src={img} style={{ width: '50px' }} /> */}
          <p style={{ marginLeft: '10px', fontFamily: 'SUIT Variable' }}>
            {title}
          </p>
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
                  <h1
                    style={{ marginBottom: '5px', fontFamily: 'SUIT Variable' }}
                  >
                    {title}
                  </h1>
                  <p style={{ fontSize: '14px', fontFamily: 'SUIT Variable' }}>
                    {description}
                  </p>
                </div>
              </SheetHeader>
              <div style={{ margin: '10px 15px 20px 15px' }}>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                  <p
                    style={{
                      position: 'relative',
                      flex: '1',
                      fontFamily: 'SUIT Variable',
                      fontWeight: 'bold',
                    }}
                  >
                    주요 활동
                  </p>
                  <div style={{ textAlign: 'center', flex: '2' }}>
                    <p style={{ fontFamily: 'SUIT Variable' }}>{activity}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                  <p
                    style={{
                      position: 'relative',
                      flex: '1',
                      fontFamily: 'SUIT Variable',
                      fontWeight: 'bold',
                    }}
                  >
                    지원 문의
                  </p>
                  <div style={{ textAlign: 'right', flex: '2' }}>
                    {representatives.map((prod) => {
                      return (
                        <>
                          <p
                            style={{ fontFamily: 'SUIT Variable' }}
                          >{`${prod.part} ${prod.name} ${prod.phone}`}</p>
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
                  <p
                    style={{
                      flex: '1',
                      fontFamily: 'SUIT Variable',
                      fontWeight: 'bold',
                    }}
                  >
                    부스컨텐츠
                  </p>
                  <div style={{ textAlign: 'right', flex: '2' }}>
                    <p style={{ fontFamily: 'SUIT Variable' }}>
                      메뉴 :
                      {clubinfo.menu.map((prod) => {
                        return ` ${prod.name} `;
                      })}
                    </p>
                    <p style={{ fontFamily: 'SUIT Variable' }}>
                      활동 :
                      {clubinfo.game.map((prod) => {
                        return ` ${prod.name}, `;
                      })}
                    </p>
                  </div>
                </div>
                <div style={{ width: '30%', height: '35px', margin: 'auto' }}>
                  <button
                    style={{
                      width: '100%',
                      borderRadius: '15px',
                      height: '100%',
                      background: '#D9D9D9',
                    }}
                  >
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        fontFamily: 'SUIT Variable',
                        fontWeight: 'bold',
                      }}
                    >
                      SNS 구경가기
                    </Link>
                  </button>
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
