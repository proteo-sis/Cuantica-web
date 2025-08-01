import axios, { AxiosRequestConfig } from 'axios';

// Asegurarnos de que la URL base esté definida
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || '2278c54ca78d254ba0c3c209f7029f8f608d1552f264a9f15696a2a063d7a97b307694e0334b1ed15c9c458c4368822c29b9cb665025194a009eac642bc87a6fb3a820ebc0cd137c2b777ad766a207e6c0132a4ddfcb78af5de54cf853cf9d159016a0ba86c3bbe30214aabce6cbfc0ab2cd13d7335a8b296ab2bca17f653e4a';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Log para debug
console.log('API URL configurada:', API_URL);

interface QueryParams {
  populate?: string | string[];
  filters?: Record<string, any>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

class ApiService {
  private buildUrl(endpoint: string, params?: QueryParams): string {
    let url = endpoint;
    const queryParams: string[] = [];

    if (params) {
      if (params.populate) {
        const populateValue = Array.isArray(params.populate) 
          ? params.populate.join(',') 
          : params.populate;
        queryParams.push(`populate=${populateValue}`);
      }

      if (params.filters) {
        Object.entries(params.filters).forEach(([key, value]) => {
          queryParams.push(`filters[${key}]=${value}`);
        });
      }

      if (params.sort) {
        const sortValue = Array.isArray(params.sort) 
          ? params.sort.join(',') 
          : params.sort;
        queryParams.push(`sort=${sortValue}`);
      }

      if (params.pagination) {
        const { page, pageSize } = params.pagination;
        if (page) queryParams.push(`pagination[page]=${page}`);
        if (pageSize) queryParams.push(`pagination[pageSize]=${pageSize}`);
      }
    }

    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }

    return url;
  }

  async get<T>(endpoint: string, params?: QueryParams, config?: AxiosRequestConfig): Promise<T> {
    try {
      const url = this.buildUrl(endpoint, params);
      const response = await apiClient.get<T>(url, config);
      console.log(`GET ${url} response:`, response.data);
      return response.data;
    } catch (error) {
      console.error(`Error en GET ${endpoint}:`, error);
      throw error;
    }
  }

  async post<T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.post<T>(endpoint, data, config);
      console.log(`POST ${endpoint} response:`, response.data);
      return response.data;
    } catch (error) {
      console.error(`Error en POST ${endpoint}:`, error);
      throw error;
    }
  }

  async put<T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.put<T>(endpoint, data, config);
      console.log(`PUT ${endpoint} response:`, response.data);
      return response.data;
    } catch (error) {
      console.error(`Error en PUT ${endpoint}:`, error);
      throw error;
    }
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.delete<T>(endpoint, config);
      console.log(`DELETE ${endpoint} response:`, response.data);
      return response.data;
    } catch (error) {
      console.error(`Error en DELETE ${endpoint}:`, error);
      throw error;
    }
  }
}

const apiService = new ApiService();

// Ejemplos de uso para diferentes endpoints
export const disciplinasApi = {
  getAll: (params?: QueryParams) => 
    apiService.get('/api/disciplinas', params),
  
  getById: (id: number, params?: QueryParams) => 
    apiService.get(`/api/disciplinas/${id}`, params),
  
  create: (data: any) => 
    apiService.post('/api/disciplinas', data),
  
  update: (id: number, data: any) => 
    apiService.put(`/api/disciplinas/${id}`, data),
  
  delete: (id: number) => 
    apiService.delete(`/api/disciplinas/${id}`)
};

// Puedes crear más objetos de API para otros endpoints
export const eventosApi = {
  getAll: (params?: QueryParams) => 
    apiService.get('/api/eventos', params),
  
  getById: (id: number, params?: QueryParams) => 
    apiService.get(`/api/eventos/${id}`, params),
  
  create: (data: any) => 
    apiService.post('/api/eventos', data),
  
  update: (id: number, data: any) => 
    apiService.put(`/api/eventos/${id}`, data),
  
  delete: (id: number) => 
    apiService.delete(`/api/eventos/${id}`)
};

export default apiService; 