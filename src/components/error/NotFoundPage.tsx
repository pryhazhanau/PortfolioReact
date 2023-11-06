import { useRouteError } from "react-router-dom";
import "./NotFoundPage.css"

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="not-found-page">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{"Error"}</i>
      </p>
    </div>
  );
}