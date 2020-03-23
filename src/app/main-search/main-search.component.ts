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
  tempos = [{name: "rain", img: "https://img.icons8.com/cotton/2x/rain--v1.png"},{name: "storm", img: "https://img.icons8.com/cotton/2x/rain--v1.png"},{name: "cloud", img: "https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519929-27_Cloud-512.png"},{name: "clear_day", img: "https://darksky.net/images/weather-icons/clear-day.png"},{name: "snow", img: "https://img.icons8.com/cotton/2x/rain--v1.png"},{name: "hail", img: "https://img.icons8.com/cotton/2x/rain--v1.png"},{name: "fog", img: "https://img.icons8.com/cotton/2x/rain--v1.png"},{name: "clear_night", img: "https://img.icons8.com/cotton/2x/rain--v1.png"},{name: "cloudy_day", img: "https://img.icons8.com/cotton/2x/rain--v1.png"},{name: "none_day", img: "https://img.icons8.com/cotton/2x/rain--v1.png"},{name: "cloudly_day", img: "https://icons.iconarchive.com/icons/icons8/windows-8/512/Weather-Partly-Cloudy-Day-icon.png"}]
  public resultado:any;
  hasSearched: number = 0;
  isLoading = false;
  firstLoad = 0;
  foto: string;
  public resultadoPesquisa = <resultadoModel>{};
  

  constructor(public searchService: SearchService) { }

  ngOnInit() {

  }

  onSearch(form:NgForm){
    this.isLoading = true;
    this.firstLoad++;
    this.searchService.searchTemp(form.value.cidade,form.value.estadoSelecionado)
    .subscribe((resultado) =>{
      this.isLoading = false;
      this.firstLoad++;
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
      this.hasSearched = 1;
      this.resultadoPesquisa.previsao.forEach((item, index)=>{
        for(let i = 0; i < this.tempos.length; i++){
          if(item.condition == this.tempos[i].name){
            this.resultadoPesquisa.previsao[index].img = this.tempos[i].img;
            console.log(i);
            }
        }
      })
      console.log(this.resultadoPesquisa.previsao);
    })
    
    form.resetForm();

  }


}
