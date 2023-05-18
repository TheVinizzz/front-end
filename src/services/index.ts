import apiFactory from "./api";

const api = apiFactory({
  api_url:
    import.meta.env.VITE_BASE_URL || "http://localhost:5001",
    has_user_header: true,
});

export default api;
