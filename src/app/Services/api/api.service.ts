const BASE_URL: string = 'https://petcondddapi.azurewebsites.net';

export const ApiRoutes = {
  login: `${BASE_URL}/api/Cliente/api/Cliente/Login`, //post
  listagemAnimal: `${BASE_URL}/api/Animal`, //get
  cadastroAnimal: `${BASE_URL}/api/Cliente/IncluirAnimal`, //post
  editarAnimal: `${BASE_URL}/api/Animal`, //put
  getAnimal: `${BASE_URL}/api/Animal`, //get
  getHistorico: `${BASE_URL}/api/Consulta/cliente`, //get
  solicitarConsulta: `${BASE_URL}/api/Solicitacao`, //post
  ContentType: 'application/json',
};