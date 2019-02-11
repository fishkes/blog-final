import axios from "axios";
import { randomDate } from "@/utils";

export default {
  namespaced: true,
  actions: {
    get(_, id) {
      let url = `posts?userId=2`;
      if (id) {
        url = `posts/${id}?userId=2`;
      }
      return axios.get(url).then(resp => {
        if (id) {
          resp.data.createDate = randomDate(new Date(2012, 0, 1), new Date());
          return resp.data;
        }

        resp.data.forEach(
          item =>
            (item.createDate = randomDate(new Date(2012, 0, 1), new Date()))
        );
        return resp.data;
      });
    },
    save(_, payload) {
      const method = payload.id ? "put" : "post";
      let url = "posts";
      if (payload.id) {
        url += `/${payload.id}`;
      }

      return axios[method](url, payload);
    },
    delete(_, id) {
      return axios.delete(`posts/${id}`);
    }
  }
};
