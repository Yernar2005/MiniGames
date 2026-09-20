import { Component } from '../base-component';
import footerTemplate from './footer.html?raw';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}


const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/' },
      { label: 'Categories', href: '/' },
      { label: 'Tournaments', href: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/' },
      { label: 'Contact', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms of Service', href: '/' },
    ],
  },
];

const SHARE_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="18" cy="5" r="3" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="12" r="3" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="19" r="3" stroke="currentColor" stroke-width="2"/><path d="M8.6 10.6L15.4 6.4M8.6 13.4L15.4 17.6" stroke="currentColor" stroke-width="2"/></svg>`;
const CHAT_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5C21 16.19 16.97 20 12 20C10.6 20 9.28 19.7 8.11 19.17L3 20L4.4 15.8C3.5 14.6 3 13.1 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;
const RSS_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 11C9.5 11 14 15.5 14 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 4C13.4 4 21 11.6 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="5" cy="19" r="2" fill="currentColor"/></svg>`;

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Share', href: '#', icon: SHARE_ICON },
  { label: 'Community chat', href: '#', icon: CHAT_ICON },
  { label: 'RSS feed', href: '#', icon: RSS_ICON },
];

export class Footer extends Component {
  constructor() {
    super('footer', 'footer');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = footerTemplate;
    this.renderColumns();
    this.renderCopyright();
  }

  private renderColumns(): void {
    const container = this.element.querySelector('[data-columns]');
    if (!container) return;

    const linkColumnsHtml = FOOTER_COLUMNS.map((column) => this.renderLinkColumn(column)).join('');
    const communityColumnHtml = this.renderCommunityColumn();

    container.innerHTML = linkColumnsHtml + communityColumnHtml;
  }

  private renderLinkColumn(column: FooterColumn): string {
    const linksHtml = column.links
      .map((link) => `<li><a href="${link.href}" class="footer__link">${link.label}</a></li>`)
      .join('');

    return `
      <div class="footer__column">
        <h3 class="footer__column-title">${column.title}</h3>
        <ul class="footer__link-list">${linksHtml}</ul>
      </div>
    `;
  }

  private renderCommunityColumn(): string {
    const iconsHtml = SOCIAL_LINKS.map(
      (social) => `
        <a href="${social.href}" class="footer__social" aria-label="${social.label}">
          ${social.icon}
        </a>
      `
    ).join('');

    return `
      <div class="footer__column footer__column--community">
        <h3 class="footer__column-title">Community</h3>
        <div class="footer__social-list">${iconsHtml}</div>
      </div>
    `;
  }

  private renderCopyright(): void {
    const el = this.element.querySelector('[data-copyright]');
    if (!el) return;
    const year = new Date().getFullYear();
    el.textContent = `© ${year} MiniGames. All rights reserved.`;
  }
}