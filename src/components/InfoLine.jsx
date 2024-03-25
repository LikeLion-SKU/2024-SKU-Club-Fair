export default function InfoLine({ name, src, img ,info}) 
{
    return(
        <div style={{ width: '90%'}}>
        <div style={{ display: 'flex', flexDirection:'column', width: '100%', height: '90px',justifyContent : 'center' ,backgroundImage :"url('/box_about.png')",backgroundSize :'100% 100%'}}>
            <div style={{ display: 'flex',flexDirection:'row', width: '100%', height: '30px',alignItems: 'center', paddingLeft : '15px'}}>
                <img src={img} style={{ width: '29px',height: '29px',marginLeft: '15px',clipPath:'circle(50%)' }} />
                <p style={{ marginLeft: '11px',fontSize :'20px' }}>{name}</p>
                <p style={{ marginLeft: '12px',fontSize :'10px' }}>{info}</p>
            </div>
            <p style={{ paddingLeft : '33px', fontFamily: 'BMJUA'  , margin : '0',fontSize:'3vw'}}>{src}</p>
        </div> 
        </div>
    );
}