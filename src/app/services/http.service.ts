import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: "https://pokeapi.co/api/v2/" })
  }

  // POST, PUT, DELETE

  public async get<T>(url: string, parametros?: any): Promise<T> {
    const result: AxiosResponse<T> = await this.axiosInstance.get<T>(url, 
      {params: parametros});

    return result.data;
  }

  public async post<T>(url:string, body:any): Promise<T> {
    const result: AxiosResponse<T> = await this.axiosInstance.post<T>(url,body);
    return result.data;
    
  }

  public async put<T>(url:string, body:any): Promise<T> {
    const result: AxiosResponse<T> = await this.axiosInstance.put<T>(url,body);
    return result.data;
  }

  public async delete<T>(url: string, parametros?: any): Promise<T>{
    const result: AxiosResponse<T> = await this.axiosInstance.delete<T>(url, { params: parametros});
    return result.data;
  }
}


