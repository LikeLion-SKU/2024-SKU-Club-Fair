export default function TimeLine({ name, time, img }) 
{
    return(
        
        <div style={{ display: 'flex', width: '100%', height: '30px', alignItems: 'center', justifyContent: 'flex-start' ,margin:'11px 10px'}}>
            <div style={{ display: 'flex', width: 'auto', alignItems: 'center' ,margin:'0px'}}>
                <img src={img} style={{ width: '35px', height : '38px',marginLeft: '10px',clipPath:'circle(45%)' }} />
                <p style={{ marginLeft: '25px' }}>{time}</p>
            </div>
            <p style={{ width: '50%', textAlign: 'center', marginRight : '3px' }}>{name}</p>
        </div> 
    );
}
