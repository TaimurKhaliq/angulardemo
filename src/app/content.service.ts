import { Card } from './models/card.interface';
import { MenuInterface } from './models/menu.interface';

export class ContentService {
  private content = {
    cards: [
       {
        title: 'Our Unique Culinary Creations',
        cardSubtitle: 'Fichipizza',
        cardContent: 'A unique combination of Mediterranean and Italian ' +
          'pizza, topped with Mascarphone, proscuitto, figs, grando panado, honey and arugula.'
      } as Card,
      {
        title: 'This Month\'s Promotions',
        cardSubtitle: 'Weekend Grand Buffet',
        cardContent: 'Featuring mouthwatering combinations with a choice ' +
          'of five different salads, six enticing appetizers, six main ' +
          'entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
      } as Card,
      {
        title: 'Meet our Culinary Specialists',
        cardSubtitle: 'Tommy McHugh',
        cardContentHeading: 'Executive Chef',
        cardContent: 'Award winning three-star Michelin chef with wide ' +
          'International experience having worked closely ' +
          'with whos-who in the culinary world, he specializes in creating mouthwatering Mediterranean-Italian experiences.'
      } as Card],
    menu: [
      {
        name: 'New York Style Pizza',
        description: 'Thin crust pizza with tomatoes and light cheese',
        price: 4.99,
        currency: 'CAD',
        image: ''
      } as MenuInterface,
      {
        name: 'Steak Sandwich',
        description: 'Whole wheat bun with an abundance of cheese',
        price: 8.99,
        currency: 'CAD',
        image: ''
      } as MenuInterface,
      {
        name: 'New York Fries',
        description: 'French fries with crispy curls fried fresh',
        price: 3.49,
        currency: 'CAD',
        image: ''
      } as MenuInterface,
      {
        name: 'Rotisserie Chicken',
        description: 'Tandoori BBQ chicken slow roasted to perfection',
        price: 11.99,
        currency: 'CAD',
        image: ''
      } as MenuInterface
    ]
  };
  getCards() {
    return this.content.cards;
  }
  getMenu() {
    return this.content.menu;
  }
}
