import dispatcher from "../appDispatcher";
import * as AuthorsApi from "../api/authors.api";
import ActionTypes from "./action.types";
import withLoadingIndicator from "./with.loading.indicator";
import Author from "../types/author.type";

const _loadAuthors = () =>
  AuthorsApi.getAuthors().then(data =>
    dispatcher.dispatch({
      type: ActionTypes.LOAD_AUTHORS,
      authors: data
    })
  );

const _saveAuthor = (author: Author) =>
  AuthorsApi.saveAuthor(author).then(savedAuthor => {
    dispatcher.dispatch({
      type: author.id ? ActionTypes.UPDATE_AUTHOR : ActionTypes.CREATE_AUTHOR,
      author: savedAuthor
    });
  });

const _deleteAuthor = (id: number) =>
  AuthorsApi.deleteAuthor(id).then(() => {
    dispatcher.dispatch({
      type: ActionTypes.DELETE_AUTHOR,
      id
    });
  });

const loadAuthors = () => withLoadingIndicator(_loadAuthors);
const saveAuthor = (author: Author) =>
  withLoadingIndicator(_saveAuthor, author);
const deleteAuthor = (authorId: number) =>
  withLoadingIndicator(_deleteAuthor, authorId);

export { loadAuthors, saveAuthor, deleteAuthor };
