import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../apisearch.service';
import { resultadoModel } from "../models/search.model";

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {

  readonly estados: Array<string> = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

  public resultado:any;
  hasSearched: number = 0;
  isLoading = false;
  public resultadoPesquisa = <resultadoModel>{};
  

  constructor(public searchService: SearchService) { }

  ngOnInit() {

  }

  onSearch(form:NgForm){
    this.isLoading = true;
    this.searchService.searchTemp(form.value.cidade,form.value.estadoSelecionado)
    .subscribe((resultado) =>{
      this.isLoading = false;
      
      this.resultadoPesquisa.cidade = resultado.results.city;
      var buffer:string = this.resultadoPesquisa.cidade.substring(0, this.resultadoPesquisa.cidade.length - 1);
      this.resultadoPesquisa.cidade = buffer;
      this.resultadoPesquisa.descricaoTempo = resultado.results.description;
      this.resultadoPesquisa.horario = resultado.results.time;
      this.resultadoPesquisa.temperatura = resultado.results.temp;
      this.resultadoPesquisa.umidade = resultado.results.humidity;
      this.resultadoPesquisa.velVento = resultado.results.wind_speedy;
      this.resultadoPesquisa.previsao = resultado.results.forecast;
      this.resultadoPesquisa.data = resultado.results.date;
      console.log(this.resultadoPesquisa.previsao);
      this.hasSearched = 1;
    })
    form.resetForm();

  }


}
