import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/bdgomey';
const MultipleReturns = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>...</h1>;
  }
  if (isError) {
    return <h1>There was an error...</h1>;
  }

  const { avatar_url, login, company, bio } = user;

  return (
    <div>
      {
        <div>
          <img
            src={avatar_url}
            alt="Brian Gomes Image"
            style={{ width: '150px', borderRadius: '25%' }}
          ></img>
          <h1>{login}</h1>
          <h4>Works at {company}</h4>
          <h4>{bio}</h4>
        </div>
      }
    </div>
  );
};

export default MultipleReturns;
