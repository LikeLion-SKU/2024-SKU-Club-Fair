import { useParams } from 'react-router-dom';

export default function DongariDetail() {
  const params = useParams();

  return (
    <>
      <p>{params.id}</p>
    </>
  );
}
