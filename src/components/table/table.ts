import { Component } from '../base-component';
import topPlayerTemplate from './table.html?raw';
interface Player {
  id: string;
  rank: number;
  name: string;
  initials: string;
  avatarVariant: 1 | 2 | 3 | 4 | 5;
  gamesPlayed: number;
  totalScore: number;
  streakDays: number;
  favoriteGame: string;
}

const PLAYERS: Player[] = [
  {
    id: '1',
    rank: 1,
    name: 'Alex_Pro99',
    initials: 'AP',
    avatarVariant: 1,
    gamesPlayed: 142,
    totalScore: 94250,
    streakDays: 12,
    favoriteGame: 'Heartopia',
  },
  {
    id: '2',
    rank: 2,
    name: 'CozyGamer_x',
    initials: 'CG',
    avatarVariant: 2,
    gamesPlayed: 118,
    totalScore: 81400,
    streakDays: 8,
    favoriteGame: 'Cat Mail Co.',
  },
  {
    id: '3',
    rank: 3,
    name: 'MatchMaster',
    initials: 'MM',
    avatarVariant: 3,
    gamesPlayed: 98,
    totalScore: 72110,
    streakDays: 5,
    favoriteGame: 'Tiny Glade',
  },
  {
    id: '4',
    rank: 4,
    name: 'BubblePop',
    initials: 'BP',
    avatarVariant: 4,
    gamesPlayed: 87,
    totalScore: 65900,
    streakDays: 3,
    favoriteGame: 'Whisper of the House',
  },
  {
    id: '5',
    rank: 5,
    name: 'SudokuGod',
    initials: 'SG',
    avatarVariant: 5,
    gamesPlayed: 74,
    totalScore: 59320,
    streakDays: 2,
    favoriteGame: 'Cat Chess',
  },
];

export class TopPlayers extends Component {
  constructor() {
    super('section', 'top-players');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = topPlayerTemplate;
    this.renderRows();
  }

  private renderRows(): void {
    const tbody = this.element.querySelector('[data-players-body]');
    if (!tbody) return;

    tbody.innerHTML = PLAYERS.map((player) => this.renderRow(player)).join('');
  }

  private renderRow(player: Player): string {
    const isExtraRow = player.rank > 3 ? 'top-players__row--extra' : '';
    const isGold = player.rank === 1 ? 'top-players__td--gold' : '';

    return /* html */ `
           <tr class="top-players__row ${isExtraRow}">
        <td class="top-players__td top-players__td--rank ${isGold}">#${player.rank}</td>

        <td class="top-players__td">
          <div class="top-players__player">
            <span class="top-players__avatar top-players__avatar--${player.avatarVariant}">${player.initials}</span>
            <span class="top-players__name">${player.name}</span>
          </div>
        </td>

        <td class="top-players__td top-players__td--games">${player.gamesPlayed}</td>

        <td class="top-players__td">
          <span class="top-players__score-full">${this.formatScoreFull(player.totalScore)}</span>
          <span class="top-players__score-short">${this.formatScoreShort(player.totalScore)}</span>
        </td>

        <td class="top-players__td">
          <span class="top-players__streak">
            🔥 <span class="top-players__streak-full">${player.streakDays} days</span><span class="top-players__streak-short">${player.streakDays}d</span>
          </span>
        </td>

        <td class="top-players__td top-players__td--favorite">
          <span class="top-players__badge">${player.favoriteGame}</span>
        </td>
      </tr>
    `;
  }

  private formatScoreFull(score: number): string {
    return score.toLocaleString('en-US');
  }
  private formatScoreShort(score: number): string {
    return `${(Math.floor(score / 100) / 10).toFixed(1)}K`;
  }
}
