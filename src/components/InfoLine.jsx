export default function InfoLine({ name, src, img ,info}) 
{
    return(
        <div style={{margin :'5'}}>
        <div style={{ display: 'flex', flexDirection:'column', width: '362px', height: '90px',justifyContent : 'center' ,backgroundImage :"url('/box_about.png')",backgroundSize :'background-size: 100% 100%;'}}>
            <div style={{ display: 'flex',flexDirection:'row', width: '100%', height: '30px',alignItems: 'center', paddingLeft : '15px'}}>
                <img src={img} style={{ width: '29px',height: '29px',marginLeft: '5px' }} />
                <p style={{ marginLeft: '11px',fontSize :'20px' }}>{name}</p>
                <p style={{ marginLeft: '12px',fontSize :'10px' }}>{info}</p>
            </div>
            <p style={{ paddingLeft : '23px', fontFamily: 'BMJUA'  , margin : '0'}}>{src}</p>
        </div> 
        </div>
    );
}