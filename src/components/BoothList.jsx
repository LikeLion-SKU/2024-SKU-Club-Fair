import { useState } from 'react';
import Sheet from 'react-modal-sheet';
import styled from 'styled-components';

import insta from '../../public/insta.png';
import { ClubButton, Map, SheetHeader } from '../styles/ClubList';
import { Link } from 'react-router-dom';
import { clubs } from '../../clubs';

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    width: 50%;
    @media screen and (max-width: 500px) {
      background-color: rgba(255, 255, 255) !important;
      fontfamily: 'SUIT Variable';
    }
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
  type,
  snsLink,
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

  function menu() {
    if (clubinfo.menu[0].name !== '없음') {
      return '메뉴 : ';
    }
  }

  return (
    <>
      <ClubButton onClick={buttonClickHandler} $color={clickButton}>
        <div style={{ display: 'flex' }}>
          {/* <img src={img} style={{ width: '50px' }} /> */}
          <p
            style={{
              marginLeft: '10px',
              fontFamily: 'SUIT Variable',
              color: 'black',
              width: '40%',
            }}
          >
            {title}
          </p>
          <p style={{ marginLeft: '30%', color: 'black' }}>{type}</p>
        </div>
      </ClubButton>
      <CustomSheet
        isOpen={isOpen}
        onClose={modalControlHandler}
        // snapPoints={[height]}
        detent="full-height"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <SheetHeader>
                <div>
                  <h1
                    style={{
                      marginBottom: '5px',
                      fontFamily: 'SUIT Variable',
                      marginBottom: '8%',
                    }}
                  >
                    {title}
                  </h1>
                  <p
                    style={{
                      fontSize: '14px',
                      fontFamily: 'SUIT Variable',
                      marginBottom: '8%',
                    }}
                  >
                    {description}
                  </p>
                </div>
              </SheetHeader>
              <div style={{ margin: '10px 15px 20px 15px' }}>
                <Map src={value} />
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
                  <div style={{ textAlign: 'center', flex: '3' }}>
                    <p
                      style={{
                        fontFamily: 'SUIT Variable',
                        textAlign: 'justify',
                      }}
                    >
                      {activity}
                    </p>
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
                  <div
                    style={{
                      textAlign: 'right',
                      flex: '2',
                      wordBreak: 'keep-all',
                    }}
                  >
                    <p style={{ fontFamily: 'SUIT Variable' }}>
                      {menu()}
                      {clubinfo.menu.map((prod) => {
                        if (prod.name === '없음') {
                          return;
                        } else {
                          let menu;
                          return `${prod.name} `;
                        }
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
                      to={snsLink}
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
