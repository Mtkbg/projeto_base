import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Route, Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-cadastrar-jogo",
  templateUrl: "./cadastrar-jogo.component.html",
  styleUrls: ["./cadastrar-jogo.component.css"],
})
export class CadastrarJogoComponent implements OnInit {
  selecoes!: Selecao[];
  selecaoA!: Selecao;
  selecaoB!: Selecao;
  Id!: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

    cadastrar(): void {
    let selecao: Selecao = {
      id: this.Id,
      nome: "",
    }

  // cadastrar(): void {
  //   let jogo: Jogo = {
  //     selecaoA: this.selecaoA,
  //     selecaoB: this.selecaoB,
  //   };

    this.http
      .post<Selecao>("https://localhost:5001/api/jogo/cadastrar", selecao)
      .subscribe({
        next: (funcionario) => {
          this._snackBar.open("Jogo cadastrada!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/jogo/cadastrar"]);
        },
        error: (error) => {
          console.error("Algum erro aconteceu!");
        },
      });

  }
}
