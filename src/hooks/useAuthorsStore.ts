import { useEffect, useState } from "react";
import { store as AuthorsStore } from "./../stores/authors.store";
import * as AuthorsActions from "./../actions/authors.actions";
import Author from "../types/author.type";

const useAuthorsStore = (
  shouldLoadOnStart: boolean = true
): [Author[], React.Dispatch<React.SetStateAction<Author[]>>] => {
  const [authors, setAuthors] = useState<Array<Author>>(
    AuthorsStore.getAuthors()
  );

  useEffect(() => {
    AuthorsStore.addChangeListener(onChange);

    if (AuthorsStore.getAuthors().length === 0 && shouldLoadOnStart) {
      AuthorsActions.loadAuthors();
    }

    return () => {
      AuthorsStore.removeChangeListener(onChange);
    };
  }, [shouldLoadOnStart]);

  const onChange = () => setAuthors(AuthorsStore.getAuthors());

  return [authors, setAuthors];
};

export default useAuthorsStore;
