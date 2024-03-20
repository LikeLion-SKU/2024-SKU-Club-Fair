export default function TimeLine({ name, time, img }) 
{
    return(
        <div style={{ display: 'flex', width: '100%', height: '65px', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src={img} style={{ width: '40px',marginLeft: '23px' }} />
            <p style={{ marginLeft: '23px' }}>{time}</p>
            <p style={{ marginRight: '23px' }}>{name}</p>
        </div>
    );
}
