import { useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
export const Abc = () => {
  const { slug, id } = useParams();

  return (
    <div className="Abc">
      <h1>
        Abc {slug} {id}
      </h1>
    </div>
  );
};
