
import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width:'100%'}}>
      <div style={{ height: '100vh' }}>
        <div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '30%',
            }}
          >
            <img
              src="/img/title_modified.svg"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>

          <div style={{ marginTop: '20%', }}>
            <img
              src="/img/DATE.svg"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
          {/* 여기 수정 -현진- */}
          <div style={{ marginTop: '100px',}}>
            <img
              src="/img/scroll.svg"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
          
          <div
            style={{
              margin: 'auto',
              marginTop: '20%',
              textAlign: 'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              width:'100%', 
              alignItems:'center'
              }}>
              <button
                style={{
                  width: '45%',
                  height: 108,
                  marginRight : '2.5%',
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
                }}
              >
                <Link to="/booth" style={{ textDecoration: 'none' }}>
                  <span
                    style={{
                      marginRight: '40%',
                      display: 'block',
                      color: 'black',
                      fontSize: '22px',
                      fontFamily: "Black Han Sans",
                      fontWeight: 400,
                      fontStyle: 'normal',
                    }}
                  >
                    부스소개
                  </span>
                  <span
                    style={{
                      width: '90%',
                     
                      display: 'block',
                      color: 'black',
                      fontSize: '15px',
                      fontFamily: 'SUIT Varaiable',
                      fontWeight: 'bold',
                      wordBreak: 'keep-all'
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
                    🕹️️
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
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
                 
                }}
              >
                <Link to="/intro" style={{ textDecoration: 'none' }}>
                  <span
                    style={{
                      marginRight: '40%',
                      display: 'block',
                      color: 'black',
                      fontSize: '22px',
                      fontFamily: "Black Han Sans",
                      fontWeight: 400,
                      fontStyle: 'normal',
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
                      fontFamily: 'SUIT Varaiable',
                      fontWeight: 'bold',
                      wordBreak: 'keep-all',
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
          </div>

            <Link
              to="https://regal-gelato-25faff.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div>
                <div style={{ display: 'flex',justifyContent:'center', width: '100%',}}> 
                <button
                style={{
                  width: '90%',
                  height: 108,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  marginTop: '20px',
                  display: 'flex', flexDirection: 'column',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
                }}
              >  
                <span
                  style={{
                    marginTop: '3%',
                    marginLeft: '2%',
                    color: 'black',
                    fontSize: '22px',
                    fontFamily: "Black Han Sans",
                    fontWeight: 400,
                    fontStyle: 'normal',
                  }}
                >
                  유형 테스트
                </span>
                <span
                  style={{
                    marginLeft: '2%',
                    color: 'black',
                    fontSize: '15px',
                    fontFamily: 'SUIT Varaiable',
                    fontWeight: 'bold',
                    wordBreak: 'keep-all',
                  }}
                >
                  나에게 꼭 맞는 동아리를 찾아봐!
                </span>
                <span
                  style={{
                    marginLeft: '87%',
                    color: 'black',
                    fontSize: '30px',
                    fontFamily: 'SUIT Varaiable',
                    fontWeight: 'bold',
                  }}
                >
                  🧐
                </span>
              </button>
            </div>
          </div>
          </Link>
          <div>
          <div style={{ display: 'flex',  justifyContent: 'flex-end' , marginRight: '5%'}}> 
                <button
                style={{
                  width: '45%',
                  height: 67,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  
                  marginTop: '5%',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
                }}
              >
                <Link to="/about" style={{ textDecoration: 'none' }}>
                <span
                  style={{
                    color: 'black',
                    fontSize: '21px',
                    fontFamily: "Black Han Sans",
                    fontWeight: 400,
                    fontStyle: 'normal',
                  }}
                >
                  ABOUT
                </span>
                <span
                  style={{
                    paddingLeft: '6%',
                    color: 'black',
                    fontSize: '23px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  ‍💻
                </span>
                </Link>
              </button>
              </div>
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
              left: 9,
              top: 9,
              position: 'absolute',
              color: '#45392F',
              color: 'black',
              fontSize: '16px',
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
              backgroundColor: 'rgba(255, 243, 238, 0.7)',
              left: 0,
              top: 0,
            
              borderRadius: 17,
              border: '1px #45392F solid',
            }}
          />
        </div>
        {/* 여기가 동아리 로고  DIV 제일큰거 밖에꺼*/}
  <div style={{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  }}>
        <div style={{
          paddingTop: '20px'}}>
          <Link
            to="https://www.instagram.com/likelion_skuniv/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft:'4%', marginRight: '2%'}}
          >
            <img
              src="/logologo.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 80, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/juksita_2024/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/적시타로고.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_pinthree_24/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/핀쓰리로고.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sk_ubf/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/ubf로고.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>
        {/* 2번째 줄 */}
        <div style={{ marginTop: '20px' }}>
          <Link
            to="https://www.instagram.com/sku_ccc/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft:'4%', marginRight: '2%' }}
          >
            <img
              src="/ccc.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_workers/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/club-0-1.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/gramy._.official/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/club-0-2.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/udream.sku/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/club-0-3.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>
        {/* 세번째 줄 */}
        <div style={{ marginTop: '20px' }}>
          <Link
            to="https://www.instagram.com/sdr.official_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft:'4%', marginRight: '2%' }}
          >
            <img
              src="/club-0-4.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/oz_sku/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/club-3-1.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_ivf/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/club-4-2.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_bulls/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
             src="/club-5-.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>
        {/* 네번째 줄 */}
        <div style={{ marginTop: '20px', marginBottom:'40px'}}>
          <Link
            to="https://www.instagram.com/brandingclub_official/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft:'4%', marginRight: '2%'}}
          >
            <img
              src="/club-5-2.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_yeonji/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/club-5-6.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link 
            to="https://www.instagram.com/sku_40th_seoro/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/애니문.jpg"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/skatcher_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '2%' }}
          >
            <img
              src="/스케쳐.jpeg"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}