import GenericBtn from 'components/ui/GenericBtn';
import GenericInfoMessage from 'components/ui/GenericInfoMessage';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);
  const goToHomePage = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      goToHomePage();
    }, 5000);

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);
    };
  }, [goToHomePage, navigate]);

  return (
    <div style={{width: "800px", display: 'flex', flexDirection: "column", alignItems: "center", textAlign: "center"}}>
      <GenericInfoMessage message='Помилка 404:'/>
      <GenericInfoMessage message='Сторінка за вашим запитом не знайдена'/>
      
      <img
        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
        alt="Error 404"
        width={320}
        height={320}
      >
      </img>
      <GenericInfoMessage message={`Повернення на головну сторінку через ${timeLeft} секунд`} />
      <br /><br /><br />
      <GenericBtn
        onClick={goToHomePage}
      >
        Перейти негайно
      </GenericBtn>
    </div>
  );
}

export default Error
