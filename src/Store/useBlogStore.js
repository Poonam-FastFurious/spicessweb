// src/store/blogStore.js
import { create } from "zustand";
import axios from "axios";
import { Baseurl } from "../Config";

const useBlogStore = create((set, get) => ({
  blogList: null,
  blogDetails: {},

  fetchBlogList: async () => {
    if (get().blogList) return; // already fetched
    try {
      const res = await axios.get(`${Baseurl}blog`);
      if (res.data.success) {
        set({ blogList: res.data.blogs });
      }
    } catch (error) {
      console.error("Error fetching blog list:", error);
    }
  },

  fetchBlogDetail: async (link) => {
    const existing = get().blogDetails[link];
    if (existing) return; // already fetched
    try {
      const res = await axios.get(`${Baseurl}blog/single?link=${link}`);
      const blog = res.data.blog;
      set((state) => ({
        blogDetails: {
          ...state.blogDetails,
          [link]: blog,
        },
      }));
    } catch (error) {
      console.error("Error fetching blog detail:", error);
    }
  },
}));

export default useBlogStore;
