import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/articledatapass.service';
import { Article } from '../article.interface'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  articles: Article[] = [
    {
      articleId: '1',
      articleName: 'T-shirt Alone',
      articleImageUrl: 'assets/images/1.jpg',
      articlePrice: '250DT',
      articleOwnerId: '1',
      articleOwnerName: 'Amine Boulila',
      articleOwnerRegion: 'sfax',
      articleOwnerProfilePic: 'assets/images/profilepic.png',
    },
    {
      articleId: '2',
      articleName: 'T-shirt Red',
      articleImageUrl: 'assets/images/2.jpg',
      articlePrice: '230DT',
      articleOwnerId: '2',
      articleOwnerName: 'Moheb BenHamad',
      articleOwnerRegion: 'Kebili',
      articleOwnerProfilePic: 'assets/images/profilepic.png',
    },
    {
      articleId: '1',
      articleName: 'T-shirt Alone',
      articleImageUrl: 'assets/images/1.jpg',
      articlePrice: '250DT',
      articleOwnerId: '1',
      articleOwnerName: 'Amine Boulila',
      articleOwnerRegion: 'sfax',
      articleOwnerProfilePic: 'assets/images/profilepic.png',
    },
    {
      articleId: '1',
      articleName: 'T-shirt Alone',
      articleImageUrl: 'assets/images/2.jpg',
      articlePrice: '250DT',
      articleOwnerId: '1',
      articleOwnerName: 'Amine Boulila',
      articleOwnerRegion: 'sfax',
      articleOwnerProfilePic: 'assets/images/profilepic.png',
    },
    {
      articleId: '1',
      articleName: 'T-shirt Alone',
      articleImageUrl: 'assets/images/1.jpg',
      articlePrice: '250DT',
      articleOwnerId: '1',
      articleOwnerName: 'Amine Boulila',
      articleOwnerRegion: 'sfax',
      articleOwnerProfilePic: 'assets/images/profilepic.png',
    },
    {
      articleId: '1',
      articleName: 'T-shirt Alone',
      articleImageUrl: 'assets/images/2.jpg',
      articlePrice: '250DT',
      articleOwnerId: '1',
      articleOwnerName: 'Amine Boulila',
      articleOwnerRegion: 'sfax',
      articleOwnerProfilePic: 'assets/images/profilepic.png',
    },
    {
      articleId: '1',
      articleName: 'T-shirt Alone',
      articleImageUrl: 'assets/images/1.jpg',
      articlePrice: '250DT',
      articleOwnerId: '1',
      articleOwnerName: 'Amine Boulila',
      articleOwnerRegion: 'sfax',
      articleOwnerProfilePic: 'assets/images/profilepic.png',
    },
    // You can add more articles here
  ];

  region: any = [
    'Tunis', 'Ben Arous', 'Manouba', 'Ariana', 'Kebili', 'Sfax', 'Gafsa', 
    'Nabeul', 'Bizerte', 'Jendouba', 'Kef', 'Béja', 'Kairouan', 'Kasserine', 
    'Sidi Bouzid', 'Tozeur', 'Tataouine', 'Medenine', 'Gabes', 'Sousse', 
    'Monastir', 'Mahdia', 'Zaghouan', 'Siliana'
  ];
  categories = [
    { type: 'Upper Wear', items: ['T-shirt', 'Blouse', 'Sweater'] },
    { type: 'Bottom Wear', items: ['Jeans', 'Shorts', 'Skirt'] },
    { type: 'Outerwear', items: ['Jacket', 'Coat', 'Hoodie'] },
    { type: 'Footwear', items: ['Sneakers', 'Boots', 'Sandals'] }
  ];

  applyFilter(){
    alert("filter done!");
  }
  
  constructor(private articleService: ArticleService, private router: Router) {}

  onArticleClick(article: Article) {
    this.articleService.setArticle(article);
    this.router.navigate(['/template', article.articleId]);
  }
}
