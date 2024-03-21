export default function TimeLine({ name, time, img }) 
{
    return(
        <div style={{ display: 'flex', width: '100%', height: '35px', alignItems: 'center', justifyContent: 'space-between' ,margin:'5px'}}>
            <div style={{ display: 'flex', width: 'auto', alignItems: 'flext-start' ,margin:'5px'}}>
                <img src={img} style={{ width: '40px',marginLeft: '20px' }} />
                <p style={{ marginLeft: '30px' }}>{time}</p>
            </div>
            <p style={{marginRight: '23px',fontFamily: 'BMJUA',textAlign: 'right' }}>{name}</p>
        </div> 
    );
}
