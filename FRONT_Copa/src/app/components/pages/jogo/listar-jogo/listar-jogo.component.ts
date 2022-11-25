import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Jogo } from "src/app/models/jogo.model";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-listar-jogo",
  templateUrl: "./listar-jogo.component.html",
  styleUrls: ["./listar-jogo.component.css"],
})
export class ListarJogoComponent implements OnInit {

  jogos!: Jogo[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Configurando a requisição para a API
    this.http.
      get<Jogo[]>(
        "https://localhost:5001/api/jogo/listar"
      )
      // Executar a requisição
      .subscribe({
        next: (jogos) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          this.jogos = jogos;
        }
      });
  }
}
