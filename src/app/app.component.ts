import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container" style="margin-top: 30px; border-width:5px; border-color:red ">
  <h1>Todo App</h1>

  <hr> <hr>

  <div>


  <div class="form-group" *ngIf="!isUpdateForActive">
    <label for="work">Yapılak İş </label>
    <input
    [class]="changeInputClass()"
    type="text"
    class="form-control"
    id="work"
    name="work"
    [(ngModel)]="work"    >
  <div class="invalid-feedback"> En az 5 karakter girmelisin</div>

    <div class="form-group mt-3">
          <button [disabled]="work.length<5" class="btn btn-outline-primary w-20" (click)="add()">Kaydet</button>
          </div>
        </div>
        </div>
        <div>
  <div class="form-group" *ngIf="isUpdateForActive">
    <label for="work">Yapılak İş </label>
    <input
    type="text"
    class="form-control"
    id="updateWork"
    name="updateWork"
    [(ngModel)]="updateWork"
    >


    <div class="form-group mt-3">
          <button class="btn btn-outline-primary w-20" (click)="update()">Güncelle</button>
          </div>
        </div>
        </div>
        <hr>
    <ul>
      <li class="mt-4 " *ngFor="let work of works let i = index ">
        {{work}}
        <span *ngIf="!isUpdateForActive">
        <button class="btn btn-outline-warning btn-sm mx-2" (click)="changeUpdateForActive(work,i)">Güncelle</button>
        <button  class="btn btn-outline-danger btn-sm" (click)="remove(i)">Sil</button>
        </span>
        <button *ngIf="isUpdateForActive" class="btn btn-outline-danger w-20" (click)="cancel()">Vazgeç</button>
      </li>
    </ul>
  </div>

  `

})
export class AppComponent {
  title = 'todo-app'
  isUpdateForActive: boolean = false
  work: string = "";
  works: string[] = ["mNK-1", "MNK-2", "MNK-3", "MNK-4"]

  updateWork: string = ""
  index: number = 0

  changeUpdateForActive(work: string, index: number) {
    this.updateWork = work
    this.index = index
    this.isUpdateForActive = true
  }
  cancel() {
    this.isUpdateForActive = false
  }
  add() {
    this.works.push(this.work)
    this.work = ""
  }
  update() {
    this.works[this.index] = this.updateWork
    this.cancel()
  }



  remove(index: number) {
    let result: boolean = confirm("Kaydı Silmek İstiyor musunuz")
    if (result == true) {
      this.works.splice(index, 1)
    }

  }
  changeInputClass(){
    if(this.work.length<5){
      return "form-control is-invalid"

        }
        return "form-control is-valid"
      }

  }


