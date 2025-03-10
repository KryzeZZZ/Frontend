import axios from 'axios';

// 定义 API 的基础 URL（可以从环境变量中读取）
const API_URL = import.meta.env.VITE_API_URL || 'http://your-api-url.com';

// 定义登录请求的参数类型
interface LoginRequest {
  email: string;
  password: string;
}

// 定义登录响应的类型
interface LoginResponse {
  code: number;
  message: string;
}

// 登录 API 调用
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, data);
    return response.data; // 返回 API 响应数据
  } catch (error) {
    // 处理错误
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || '登录失败，请稍后重试。');
    } else {
      throw new Error('登录失败，请稍后重试。');
    }
  }
};