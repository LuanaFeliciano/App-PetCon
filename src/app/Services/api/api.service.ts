const BASE_URL: string = 'https://localhost:7127';

export const ApiRoutes = {
  login: `${BASE_URL}/api/Cliente/api/Cliente/Login`, //post
  listagemAnimal: `${BASE_URL}/api/Animal`, //get
  cadastroAnimal: `${BASE_URL}/api/Cliente/IncluirAnimal`, //post

  ContentType: 'application/json',
};