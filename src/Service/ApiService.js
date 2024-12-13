const baseUrl = "https://rickandmortyapi.com/api";

export default class ApiService {
  async getCharacters() {
    const response = await fetch(`${baseUrl}/character`);
    return response.json();
  }
}