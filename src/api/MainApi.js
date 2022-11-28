import HttpClient from 'src/api/HttpClient';

class MainApi extends HttpClient {
  static classInstance;

  constructor() {
    super(process.env.NEXT_PUBLIC_API_BASE_URL);
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }

    return this.classInstance;
  }

  sendMailAndLogged = async (type, name, email) => {
    try {
      return await this.instance.post(`/send-feedback`, {
        type,
        name,
        email,
      });
    } catch ({ response }) {
      return response;
    }
  };
}

export default MainApi;
