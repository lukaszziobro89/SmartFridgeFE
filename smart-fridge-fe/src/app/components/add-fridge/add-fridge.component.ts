import { Component, OnInit } from '@angular/core';
import { Fridge } from "../../models/fridge.model";
import { FridgeService } from "../../services/fridge.service";
import {FridgeDoorType} from "../../enums/fridge.doorType";

@Component({
  selector: 'app-add-fridge',
  templateUrl: './add-fridge.component.html',
  styleUrls: ['./add-fridge.component.css']
})
export class AddFridgeComponent implements OnInit {


  doorTypes = FridgeDoorType;
  enumKeys: string[] = [];

  constructor(private fridgeService: FridgeService) {
    this.enumKeys=Object.values(this.doorTypes);
  }

  fridge: Fridge = {
    producerName: '',
    doorType: '',
    fridgeName: '',
    freezerCapacity: 10,
    chillerCapacity: 50
  }
  submitted = false;

  saveTutorial(): void {
    const data = {
      producerName: this.fridge.producerName,
      doorType: this.fridge.doorType,
      fridgeName: this.fridge.fridgeName,
      freezerCapacity: this.fridge.freezerCapacity,
      chillerCapacity: this.fridge.chillerCapacity
    };

    this.fridgeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newFridge(): void {
    this.submitted = false;
    this.fridge = {
      producerName: '',
      doorType: '',
      fridgeName: '',
      freezerCapacity: 10,
      chillerCapacity: 50
    };
  }

  ngOnInit(): void {
    // this.enumKeys = Object.keys(this.doorTypes)
  }

}
