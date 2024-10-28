import { useParams } from 'react-router-dom';

const Caption = () => {
  const { lang } = useParams<{ lang: string }>();

  return (
    <div>
      {' '}
      {lang === 'en'
        ? 'Caption for the about page'
        : 'ებაუთ ფეიჯი ოღონდ ქართულად, რააა'}
    </div>
  );
};

export default Caption;
