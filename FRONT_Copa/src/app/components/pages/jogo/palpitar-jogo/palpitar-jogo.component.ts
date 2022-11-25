import { Component, OnInit } from "@angular/core";
import { Selecao } from "src/app/models/selecao.model";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  selecoes!: Selecao[];
  selecaoA!: Selecao;
  selecaoB!: Selecao;
  Placar!: number;
  Placar2!: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  palpitar(): void {
    //com erro
    let selecao: Selecao = {
      Placar: this.Placar,
      Placar2: this.Placar2,
      selecaoA: this.selecaoA,
      selecaoB: this.selecaoB
    };

    this.http.patch<Selecao>("https://localhost:5001/api/jogo/palpitar-jogo/palpitar", selecao).subscribe({
      next: (selecao) => {
        this._snackBar.open("Palpite feito!", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/jogo/palpitar/listar"]);
      },
    });
  }
}
