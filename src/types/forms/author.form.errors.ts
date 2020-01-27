export default interface AuthorFormErrors {
  name?: string;
}

export interface AuthorRequiredFields {
  name: string;
}

const requiredFields: AuthorRequiredFields = {
  name: ""
};

export { requiredFields };
