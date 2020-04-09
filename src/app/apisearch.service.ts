import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
  })
export class SearchService{

    private url: string = "https://api.hgbrasil.com/weather?format=json-cors&key=" 
    private key: string = "114a7810";
    constructor(private http:HttpClient) {}

    searchTemp(cidade: string, estado: string){
        const completeUrl: string = this.url + this.key + "&city_name=" + cidade + "," + estado;
        return this.http.get<any>(completeUrl);
    }

}