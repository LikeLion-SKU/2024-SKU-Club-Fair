import Button from '../components/Button';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'colmun' }}>
      <div style={{ overflowY: 'auto', height: '100vh' }}>
        <div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '215px',
              marginLeft: '30px',
            }}
          >
            <img
              src="/img/title.png"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>

          <div style={{ marginTop: '180px' }}>
            <img
              src="/img/date.png"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>

          <div style={{ marginTop: '100px' }}>
            <img
              src="/img/scroll.png"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>

          <div
            style={{
              margin: 'auto',
              marginTop: '170px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                style={{
                  width: '45%',
                  height: 108,
                  marginLeft: '15px',
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                }}
              >
                <Link to="/booth" style={{ textDecoration: 'none' }}>
                  <span
                    style={{
                      marginRight: '40%',
                      display: 'block',
                      color: 'black',
                      fontSize: '22px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    부스소개
                  </span>
                  <span
                    style={{
                      width: '85%',
                      marginRight: '33%',
                      display: 'block',
                      color: 'black',
                      fontSize: '15px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    각 부스별 위치 확인
                  </span>
                  <span
                    style={{
                      marginLeft: '75%',
                      fontSize: '30px',
                    }}
                  >
                    ⛺️
                  </span>
                </Link>
              </button>

              <button
                style={{
                  width: '45%',
                  height: 108,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  marginRight: '15px',
                }}
              >
                <Link to="/intro" style={{ textDecoration: 'none' }}>
                  <span
                    style={{
                      marginRight: '40%',
                      display: 'block',
                      color: 'black',
                      fontSize: '22px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    운영시간
                  </span>
                  <span
                    style={{
                      marginRight: '33%',
                      display: 'block',
                      color: 'black',
                      fontSize: '15px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    행사 일정 안내
                  </span>
                  <span
                    style={{
                      marginLeft: '75%',
                      fontSize: '30px',
                    }}
                  >
                    ⏰
                  </span>
                </Link>
              </button>
            </div>

            <Link
              to="https://regal-gelato-25faff.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  width: 381,
                  height: 108,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  marginLeft: '0px',
                  marginTop: '20px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    marginTop: '-40px',
                    marginLeft: '-170px',
                    color: 'black',
                    fontSize: '22px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  유형 테스트
                </span>
                <span
                  style={{
                    position: 'absolute',
                    marginTop: '-13px',
                    marginLeft: '-170px',
                    color: 'black',
                    fontSize: '15px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  나에게 꼭 맞는 동아리를 찾아봐!
                </span>
                <span
                  style={{
                    position: 'absolute',
                    marginTop: '5px',
                    marginLeft: '150px',
                    color: 'black',
                    fontSize: '30px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  😇
                </span>
              </button>
            </Link>

            <Link to="/about" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  width: 181,
                  height: 67,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  marginLeft: '200px',
                  marginTop: '20px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    marginTop: '-10px',
                    marginLeft: '-75px',
                    color: 'black',
                    fontSize: '22px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  제작자
                </span>
                <span
                  style={{
                    position: 'absolute',
                    marginTop: '-20px',
                    marginLeft: '50px',
                    color: 'black',
                    fontSize: '30px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  ‍🧑‍💻
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div
          style={{
            width: 133,
            height: 36,
            marginLeft: '20px',
            marginTop: '25px',
            position: 'relative',
          }}
        >
          <div
            style={{
              left: 10,
              top: 9,
              position: 'absolute',
              color: '#45392F',
              color: 'black',
              fontSize: '18px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
            }}
          >
            동아리 바로가기
          </div>
          <div
            style={{
              width: 133,
              height: 36,
              left: 0,
              top: 0,
              position: 'absolute',
              borderRadius: 17,
              border: '1px #45392F solid',
            }}
          />
        </div>

        <div style={{ marginLeft: '7%', marginTop: '20px' }}>
          <Link
            to="https://www.instagram.com/likelion_skuniv/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '5%' }}
          >
            <img
              src="/멋사로고.png"
              alt="버튼 이미지"
              style={{ width: 70, height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/juksita_2024/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '5%' }}
          >
            <img
              src="/적시타로고.png"
              alt="버튼 이미지"
              style={{ width: 70, height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_pinthree_24/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '5%' }}
          >
            <img
              src="/핀쓰리로고.png"
              alt="버튼 이미지"
              style={{ width: 70, height: 75, borderRadius: 10 }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/sk_ubf/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '5%' }}
          >
            <img
              src="/ubf로고.png"
              alt="버튼 이미지"
              style={{ width: 70, height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>
        <div style={{ marginLeft: '7%', marginTop: '20px' }}>
          <Link
            to="https://www.instagram.com/sku_ccc/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/ccc.png"
              alt="버튼 이미지"
              style={{ width: 70, height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
