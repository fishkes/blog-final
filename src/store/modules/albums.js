import axios from "axios";
import { randomDate } from "@/utils";

export default {
  namespaced: true,
  actions: {
    get(_, id) {
      let url = `albums?userId=2`;
      if (id) {
        url += `?id=${id}`;
      }
      return axios.get(url).then(resp => {
        resp.data.forEach(
          item =>
            (item.createDate = randomDate(new Date(2012, 0, 1), new Date()))
        );
        return resp.data;
      });
    },
    save(_, payload) {
      const method = payload.id ? "put" : "post";
      let url = "albums";
      if (payload.id) {
        url += `/${payload.id}`;
      }

      return axios[method](url, payload);
    },
    delete(_, id) {
      return axios.delete(`albums/${id}`);
    }
  }
};
