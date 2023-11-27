import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.response) {
    if (error.response.status === 401) {
      return (
        <>
          <h1>Oops!</h1>
          <p>You must be logged in to do that.</p>
          <Link to="/">Click here to go back to the homepage</Link>

          <div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/3ohzdQ1IynzclJldUQ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/the-magic-word-3ohzdQ1IynzclJldUQ"></a></p>
        </>
      );
    }
  }

  return (
    <>
      <h1>Uh oh.</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/q69ME0ooMhyl5jdbGW" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/tennistv-what-frustration-djokovic-q69ME0ooMhyl5jdbGW"></a></p>

    </>
  );
}

export default ErrorPage;
