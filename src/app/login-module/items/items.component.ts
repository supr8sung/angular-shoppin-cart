import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/shared/apimodels/Item';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService: ItemService) { }



  items: Item[] = []
  ngOnInit(): void {

    this.getPageDetails()
  }

  private getPageDetails() {
    this.itemService.allItems().subscribe(
      (res: any) => {
        
        this.items = res
      },
      (error: any) => {
      }
    );
  }

}
