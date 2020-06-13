import fetch from 'isomorphic-fetch';

const URL_BASE = 'http://localhost:5000/';

class Api {
  async getArticles () {
    try {
      const result = await fetch(`${URL_BASE}article`);
      const data = await result.json();
      return { ...data };
    } catch (error) {
      return { error: error.message };
    }
  }
}

export default new Api();
