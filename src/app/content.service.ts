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
        name: 'Item 1',
        description: '',
        price: 4.99,
        currency: 'CAD',
        image: ''
      } as MenuInterface,
      {
        name: 'Item 2',
        description: '',
        price: 8.99,
        currency: 'CAD',
        image: ''
      } as MenuInterface,
      {
        name: 'Item 3',
        description: '',
        price: 3.49,
        currency: 'CAD',
        image: ''
      } as MenuInterface,
      {
        name: 'Item 4',
        description: '',
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
