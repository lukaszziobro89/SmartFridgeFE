import { Component, OnInit } from '@angular/core';
import {Fridge} from "src/app/models/fridge.model";
import {FridgeService} from "src/app/services/fridge.service";

@Component({
  selector: 'app-fridges-list',
  templateUrl: './fridges-list.component.html',
  styleUrls: ['./fridges-list.component.css']
})
export class FridgesListComponent implements OnInit {

  fridges?: Fridge[];
  currentIndex = -1;

  constructor(private fridgeService: FridgeService) { }

  ngOnInit(): void {
    this.retrieveFridges();
  }

  retrieveFridges(): void {
    this.fridgeService.getAllFridges()
      .subscribe({
        next: (data) => {
          this.fridges = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteFridge(fridge: Fridge): void {
    this.fridgeService.deleteFridge(fridge.fridgeId).subscribe({
        next: (data) => {
          this.fridges = data;
          this.retrieveFridges();
        },
        error: (e) => console.error(e)
      }
    )
  }


}


