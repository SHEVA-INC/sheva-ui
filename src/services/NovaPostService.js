import axios from "axios";

const novaPostUrl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = import.meta.env.VITE_NOVA_POST_SECRET_KEY;

const payload = {
  apiKey: apiKey,
  modelName: "AddressGeneral",
};

class NovaPostService {
  async getAreas() {
    const data = {
      ...payload,
      calledMethod: "getAreas",
    };

    return (await axios.post(novaPostUrl, data)).data;
  }

  async getCities(areaRef) {
    const data = {
      ...payload,
      calledMethod: "getCities",
      methodProperties: {
        AreaRef: areaRef,
      },
    };

    return (await axios.post(novaPostUrl, data)).data;
  }

  async getWarehouses(cityRef) {
    const data = {
      ...payload,
      calledMethod: "getWarehouses",
      methodProperties: {
        CityRef: cityRef,
      },
    };

    return (await axios.post(novaPostUrl, data)).data;
  }
}

const novaPostService = new NovaPostService();
export default novaPostService;
