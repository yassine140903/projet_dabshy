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
  sliceStart : number = 0;
  sliceEnd : number = 12;
  sliceLength: number = 12;
  indexStart : number = 0;
  indexSliceLength: number = 5;
  indexEnd : number = this.indexStart+this.indexSliceLength;
  pageIndices: number[] = [];

  exemple_article_1 : Article = {
    articleId: '1',
    articleName: 'T-shirt Alone',
    articleImageUrls: ['assets/images/1.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '250DT',
    articleOwnerId: '1',
    articleOwnerName: 'Amine Boulila',
    articleOwnerRegion: 'sfax',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  exemple_article_2 : Article = {
    articleId: '2',
    articleName: 'T-shirt Red',
    articleImageUrls: ['assets/images/2.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '230DT',
    articleOwnerId: '2',
    articleOwnerName: 'Moheb BenHamad',
    articleOwnerRegion: 'Kebili',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  exemple_article_3 : Article = {
    articleId: '3',
    articleName: 'T-shirt Red',
    articleImageUrls: ['assets/images/3.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '230DT',
    articleOwnerId: '2',
    articleOwnerName: 'Moheb BenHamad',
    articleOwnerRegion: 'Kebili',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  exemple_article_4 : Article = {
    articleId: '4',
    articleName: 'T-shirt Red',
    articleImageUrls: ['assets/images/4.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '230DT',
    articleOwnerId: '2',
    articleOwnerName: 'Moheb BenHamad',
    articleOwnerRegion: 'Kebili',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  exemple_article_5 : Article = {
    articleId: '5',
    articleName: 'T-shirt Red',
    articleImageUrls: ['assets/images/5.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '230DT',
    articleOwnerId: '2',
    articleOwnerName: 'Moheb BenHamad',
    articleOwnerRegion: 'Kebili',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  articles: Article[] = [
    this.exemple_article_4,
    this.exemple_article_2,
    this.exemple_article_5,
    this.exemple_article_2,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_3,
    this.exemple_article_2,
    this.exemple_article_1,
    this.exemple_article_1,
    this.exemple_article_1,
    this.exemple_article_4,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_2,
    this.exemple_article_3,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_5,
    this.exemple_article_2,
    this.exemple_article_1,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_2,
    this.exemple_article_5,
    this.exemple_article_2,
    this.exemple_article_2,
    this.exemple_article_3,
    this.exemple_article_5,
    this.exemple_article_2,
    this.exemple_article_4,
    this.exemple_article_3,
    this.exemple_article_1,
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

  get articleSlice(){
    return this.articles.slice(this.sliceStart, this.sliceEnd);
  }

  getSlice(a: number){
    this.sliceStart =  a*this.sliceLength;
    this.sliceEnd =  this.sliceStart + this.sliceLength;

    if(this.sliceStart > this.articles.length-this.sliceLength){
      this.sliceStart = this.articles.length-this.sliceLength;
      this.sliceEnd = this.articles.length;
    }
  }

  /*getNextSlice = () => {
    this.sliceStart += this.sliceLength;
    this.sliceEnd += this.sliceLength;
    if (this.sliceEnd > this.articles.length) {
        this.sliceEnd = this.articles.length;
        this.sliceStart = this.sliceEnd - this.sliceLength;
    }
};

getPrevSlice = () => {
    this.sliceStart -= this.sliceLength;
    this.sliceEnd -= this.sliceLength;
    if (this.sliceStart < 0) {
        this.sliceStart = 0;
        this.sliceEnd = this.sliceLength;
    }
  };*/

  get indexSlice(){
    return this.pageIndices.slice(this.indexStart, this.indexEnd);
  }

  getNextIndexSlice(){
    this.indexStart +=  this.indexSliceLength;
    this.indexEnd +=  this.indexSliceLength;
  }
  getPrevIndexSlice(){
    this.indexStart -=  this.indexSliceLength;
    this.indexEnd -=  this.indexSliceLength;
  }

  applyFilter(){
    alert("filter clicked!");
  }
  
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(){
    this.pageIndices = Array(Math.ceil(this.articles.length / this.sliceLength))
    .fill(0)
    .map((_, i) => i + 1);
  }

  onArticleClick(article: Article) {
    this.articleService.setArticle(article);
    this.router.navigate(['/product', article.articleId]);
  }
}
