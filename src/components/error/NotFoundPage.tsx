import { useRouteError } from "react-router-dom";
import "./NotFoundPage.css"

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="not-found-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{"Error"}</i>
      </p>
    </div>
  );
}