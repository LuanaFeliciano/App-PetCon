const BASE_URL: string = 'https://petcondddapi.azurewebsites.net';
//const BASE_URL: string = 'https://localhost:7127';
export const ApiRoutes = {
  login: `${BASE_URL}/api/Cliente/api/Cliente/Login`, //post
  listagemAnimal: `${BASE_URL}/api/Animal`, //get
  cadastroAnimal: `${BASE_URL}/api/Cliente/IncluirAnimal`, //post
  editarAnimal: `${BASE_URL}/api/Animal`, //put
  getAnimal: `${BASE_URL}/api/Animal`, //get
  getHistorico: `${BASE_URL}/api/Consulta/cliente`, //get
  solicitarConsulta: `${BASE_URL}/api/Solicitacao`, //post
  getUsuario: `${BASE_URL}/api/Cliente/PesquisarPorCPF`, //get
  putUsuario: `${BASE_URL}/api/Cliente`, //pu
  ContentType: 'application/json',
};