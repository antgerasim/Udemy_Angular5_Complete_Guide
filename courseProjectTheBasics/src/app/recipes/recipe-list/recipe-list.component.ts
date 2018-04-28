import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
<<<<<<< HEAD
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('Second Test Recipe', 'This is second test', 'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d'),
    new Recipe('Third Test Recipe', 'This is a third test', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false')
  ];



=======
    new Recipe('A Test Recipe', 'This is simply a test', 'https://ic.pics.livejournal.com/stalic/2762948/529356/529356_original.jpg')
  ];

>>>>>>> afb5f53e44fc51ad7d3bb50521fe1f12b78206f5
  constructor() { }

  ngOnInit() {
  }

}
