import { Component } from '../base-component';
import newCarruselTemplate from './carrusel.html?raw';
import leafItAlone from '../../assets/leaf-it-alone-card.jpg';
import littleCorners from '../../assets/little-corners-card.jpg';
import vacationCafe from '../../assets/vacation-cafe-simulator-card.jpg';
import winterBurrow from '../../assets/winter-burrow-card.jpg';
import tukoniForest from '../../assets/tukoni-forest-keepers-card.jpg';

interface GameCard {
  id: string;
  title: string;
  rating: string;
  likes: string;
  image: string;
}

const STAR_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L21.5 9l-4.99 4.32L18.02 20 12 16.54 5.98 20l1.51-6.68L2.5 9l6.6-.74L12 2z"/></svg>`;
const HEART_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-6.7-4.35-9.33-8.2C1.02 10.5 1.6 7.4 4.2 5.9c2.1-1.2 4.6-.6 5.8 1.1.3.4.7.9 1 1.3.3-.4.7-.9 1-1.3 1.2-1.7 3.7-2.3 5.8-1.1 2.6 1.5 3.18 4.6 1.53 6.9C18.7 16.65 12 21 12 21z"/></svg>`;

const GAMES: GameCard[] = [
  { id: '1', title: 'Left it alone', rating: '4.7', likes: '12.1K', image: leafItAlone },
  { id: '2', title: 'Little corners', rating: '4.9', likes: '54.2K', image: littleCorners },
  { id: '3', title: 'Vacation Cafe Simulator', rating: '4.8', likes: '28.7K', image: vacationCafe },
  { id: '4', title: 'Winter Burrow', rating: '4.9', likes: '32.4K', image: winterBurrow },
  { id: '5', title: 'Tukoni forest', rating: '4.6', likes: '9.8K', image: tukoniForest },
];

export class Carrusel extends Component {
  private viewport: HTMLElement | null = null;
  private track: HTMLElement | null = null;
  private cardEls: HTMLElement[] = [];
  private rafId: number | null = null;
  private activeIndex = 0;

  constructor() {
    super('section', 'new-games');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = newCarruselTemplate;
    this.renderCards();
    this.bindEvents();
  }

  private renderCards(): void {
    this.track = this.element.querySelector('[data-track]');
    this.viewport = this.element.querySelector('[data-viewport]');
    if (!this.track) return;

    this.track.innerHTML = GAMES.map(
      (game) => `
        <li class="game-card" style="background-image: url('${game.image}')" data-card>
          <div class="game-card__overlay"></div>
          <div class="game-card__info">
            <span class="game-card__title">${game.title}</span>
            <div class="game-card__meta">
              <span class="game-card__rating">${STAR_ICON} ${game.rating}</span>
              <span class="game-card__likes">${HEART_ICON} ${game.likes}</span>
            </div>
          </div>
        </li>
      `
    ).join('');

    this.cardEls = Array.from(this.track.querySelectorAll<HTMLElement>('[data-card]'));

    this.activeIndex = Math.floor(this.cardEls.length / 2);
    this.setActiveCard(this.activeIndex, false);
  }

  private setActiveCard(index: number, shouldScroll = true): void {
    if (!this.cardEls.length) return;

    const clampedIndex = Math.max(0, Math.min(index, this.cardEls.length - 1));
    this.activeIndex = clampedIndex;

    this.cardEls.forEach((card, cardIndex) => {
      card.classList.toggle('game-card--active', cardIndex === clampedIndex);
    });

    if (shouldScroll) {
      this.scrollToIndex(clampedIndex);
    }
  }

  private bindEvents(): void {
    const prevBtn = this.element.querySelector('[data-prev]');
    const nextBtn = this.element.querySelector('[data-next]');

    prevBtn?.addEventListener('click', this.handlePrev);
    nextBtn?.addEventListener('click', this.handleNext);

    this.viewport?.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleScroll);

    requestAnimationFrame(() => this.scrollToIndex(this.getActiveIndex(), 'auto'));
  }

  private handleScroll = (): void => {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.updateActiveCard();
      this.rafId = null;
    });
  };

  private updateActiveCard(): void {
    if (!this.viewport || !this.cardEls.length) return;

    const viewportRect = this.viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;

    let nextIndex = this.activeIndex;
    let closestDistance = Infinity;

    this.cardEls.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        nextIndex = index;
      }
    });

    if (nextIndex !== this.activeIndex) {
      this.setActiveCard(nextIndex, false);
    }
  }

  private getActiveIndex(): number {
    return this.activeIndex;
  }

  private scrollToIndex(index: number, behavior: ScrollBehavior = 'smooth'): void {
    const clamped = Math.max(0, Math.min(index, this.cardEls.length - 1));
    this.setActiveCard(clamped, false);
    this.cardEls[clamped]?.scrollIntoView({ behavior, inline: 'center', block: 'nearest' });
  }

  private handlePrev = (): void => {
    this.scrollToIndex(this.getActiveIndex() - 1);
  };

  private handleNext = (): void => {
    this.scrollToIndex(this.getActiveIndex() + 1);
  };
}
