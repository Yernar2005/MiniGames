(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{element;constructor(e=`div`,t=``){this.element=document.createElement(e),t&&(this.element.className=t)}render(){return this.element}},t=`<div class="header header__root">
  <div class="header__container">
    <a href="/" class="header__logo">
      <img data-logo alt="MiniGames logo" />
    </a>

    <div class="header__desktop">
      <nav class="header__nav nav" aria-label="Основное меню" data-nav>
        <ul class="nav__list">
          <li class="nav__item">
            <a href="/" class="nav__link nav__link--active" aria-current="page">Home</a>
          </li>
          <li class="nav__item">
            <a href="/library" class="nav__link">Library</a>
          </li>
          <li class="nav__item">
            <a href="/tournaments" class="nav__link">Tournaments</a>
          </li>
          <li class="nav__item">
            <a href="/community" class="nav__link">Community</a>
          </li>
        </ul>
      </nav>

      <div class="header__auth auth">
        <button type="button" class="btn btn--outline" data-auth-trigger="login">Log In</button>
        <button type="button" class="btn btn--primary header__signup" data-auth-trigger="register">
          Sign Up
        </button>
      </div>
    </div>

    <div class="header__tablet">
      <div class="header__actions">
        <button type="button" class="btn btn--primary header__signup" data-auth-trigger="register">
          Sign Up
        </button>

        <button
          class="header__burger"
          type="button"
          aria-label="Открыть меню"
          aria-expanded="false"
          aria-controls="mobile-nav"
          data-burger
        >
          <svg
            class="burger__icon burger__icon--open"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <svg
            class="burger__icon burger__icon--close"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>

    <div class="header__mobile">
      <button
        class="header__burger"
        type="button"
        aria-label="Открыть меню"
        aria-expanded="false"
        aria-controls="mobile-nav"
        data-burger
      >
        <svg
          class="burger__icon burger__icon--open"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <svg
          class="burger__icon burger__icon--close"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  </div>

  <div class="mobile-nav" id="mobile-nav" data-mobile-nav>
    <div class="mobile-nav__header">
      <a href="/" class="mobile-nav__logo">
        <img data-logo alt="MiniGames logo" />
      </a>
      <button
        class="mobile-nav__close"
        type="button"
        aria-label="Закрыть меню"
        data-mobile-nav-close
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <nav class="mobile-nav__body" aria-label="Мобильное меню">
      <ul class="mobile-nav__list">
        <li>
          <a href="/" class="mobile-nav__link mobile-nav__link--active" aria-current="page">Home</a>
        </li>
        <li><a href="/library" class="mobile-nav__link">Library</a></li>
        <li><a href="/tournaments" class="mobile-nav__link">Tournaments</a></li>
        <li><a href="/community" class="mobile-nav__link">Community</a></li>
      </ul>
    </nav>

    <div class="mobile-nav__auth">
      <button type="button" class="btn btn--outline" data-auth-trigger="login">Log In</button>
      <button type="button" class="btn btn--primary header__signup" data-auth-trigger="register">
        Sign Up
      </button>
    </div>
  </div>
</div>
`,n=`auth-dialog:open`;function r(e=`login`){document.dispatchEvent(new CustomEvent(n,{detail:e}))}var i=class extends e{mobileNav=null;burgers=null;closeBtn=null;constructor(){super(`header`,`header`),this.renderContent()}renderContent(){this.element.innerHTML=t,this.setLogoSrc(),this.bindEvents()}setLogoSrc(){this.element.querySelectorAll(`[data-logo]`).forEach(e=>{e.src=`/MiniGames/Brand_Logo.svg`})}bindEvents(){this.mobileNav=this.element.querySelector(`[data-mobile-nav]`),this.burgers=this.element.querySelectorAll(`[data-burger]`),this.closeBtn=this.element.querySelector(`[data-mobile-nav-close]`),this.burgers?.forEach(e=>{e.addEventListener(`click`,()=>this.toggleMenu())}),this.closeBtn?.addEventListener(`click`,()=>this.closeMenu()),this.mobileNav?.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>this.closeMenu())}),this.element.querySelectorAll(`[data-auth-trigger]`).forEach(e=>{e.addEventListener(`click`,()=>this.handleAuthTrigger(e))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.closeMenu()})}handleAuthTrigger(e){let t=e.dataset.authTrigger??`login`;this.mobileNav?.contains(e)&&this.closeMenu(),r(t)}toggleMenu(){this.mobileNav?.classList.contains(`mobile-nav--open`)?this.closeMenu():this.openMenu()}openMenu(){this.mobileNav?.classList.add(`mobile-nav--open`),this.burgers?.forEach(e=>{e.setAttribute(`aria-expanded`,`true`),e.classList.add(`is-active`)}),document.body.classList.add(`no-scroll`)}closeMenu(){this.mobileNav?.classList.remove(`mobile-nav--open`),this.burgers?.forEach(e=>{e.setAttribute(`aria-expanded`,`false`),e.classList.remove(`is-active`)}),document.body.classList.remove(`no-scroll`)}},a=`<div class="footer footer__root">
  <div class="footer__container">
    <div class="footer__top">
      <div class="footer__brand">
        <a href="/" class="footer__logo">
          <img data-logo alt="MiniGames logo" />
        </a>
        <p class="footer__description">
          Take a short break and have fun. Hundreds of curated casual mini-games right in your web
          browser. No download required.Í
        </p>
      </div>

      <div class="footer__columns" data-columns></div>
    </div>

    <div class="footer__bottom">
      <p class="footer__copyright" data-copyright></p>

      <div class="footer__meta">
        <a
          href="https://rs.school/"
          class="footer__meta-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="footer__badge">RS</span>
          RS School
        </a>

        <a
          href="https://github.com/Yernar2005"
          class="footer__meta-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="footer__meta-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M8 9L4 12L8 15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 9L20 12L16 15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          @student-nickname
        </a>
      </div>

      <p class="footer__love">Designed with love</p>
    </div>
  </div>
</div>
`,o=[{title:`Explore`,links:[{label:`Home`,href:`/`},{label:`Library`,href:`/`},{label:`Categories`,href:`/`},{label:`Tournaments`,href:`/`}]},{title:`Company`,links:[{label:`About Us`,href:`/`},{label:`Contact`,href:`/`},{label:`Privacy Policy`,href:`/`},{label:`Terms of Service`,href:`/`}]}],s=[{label:`Share`,href:`#`,icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="18" cy="5" r="3" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="12" r="3" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="19" r="3" stroke="currentColor" stroke-width="2"/><path d="M8.6 10.6L15.4 6.4M8.6 13.4L15.4 17.6" stroke="currentColor" stroke-width="2"/></svg>`},{label:`Community chat`,href:`#`,icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5C21 16.19 16.97 20 12 20C10.6 20 9.28 19.7 8.11 19.17L3 20L4.4 15.8C3.5 14.6 3 13.1 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`},{label:`RSS feed`,href:`#`,icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 11C9.5 11 14 15.5 14 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 4C13.4 4 21 11.6 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="5" cy="19" r="2" fill="currentColor"/></svg>`}],c=class extends e{constructor(){super(`footer`,`footer`),this.renderContent()}renderContent(){this.element.innerHTML=a,this.renderColumns(),this.renderCopyright()}renderColumns(){let e=this.element.querySelector(`[data-columns]`);e&&(e.innerHTML=o.map(e=>this.renderLinkColumn(e)).join(``)+this.renderCommunityColumn())}renderLinkColumn(e){let t=e.links.map(e=>`<li><a href="${e.href}" class="footer__link">${e.label}</a></li>`).join(``);return`
      <div class="footer__column">
        <h3 class="footer__column-title">${e.title}</h3>
        <ul class="footer__link-list">${t}</ul>
      </div>
    `}renderCommunityColumn(){return`
      <div class="footer__column footer__column--community">
        <h3 class="footer__column-title">Community</h3>
        <div class="footer__social-list">${s.map(e=>`
        <a href="${e.href}" class="footer__social" aria-label="${e.label}">
          ${e.icon}
        </a>
      `).join(``)}</div>
      </div>
    `}renderCopyright(){let e=this.element.querySelector(`[data-copyright]`);e&&(e.textContent=`© ${new Date().getFullYear()} MiniGames. All rights reserved.`)}},l=`<div class="auth-dialog__backdrop" data-auth-backdrop></div>

<div class="auth-dialog__panel" role="dialog" aria-modal="true" aria-labelledby="auth-dialog-title">
  <button class="auth-dialog__close" type="button" aria-label="Закрыть" data-auth-close>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  </button>

  <div class="auth-dialog__tabs" role="tablist" aria-label="Authentication tabs">
    <button
      id="auth-tab-login"
      class="auth-dialog__tab auth-dialog__tab--active"
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="auth-panel-login"
      data-auth-tab="login"
    >
      Login
    </button>
    <button
      id="auth-tab-register"
      class="auth-dialog__tab"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="auth-panel-register"
      data-auth-tab="register"
    >
      Register
    </button>
  </div>

  <div
    id="auth-panel-login"
    class="auth-dialog__content"
    role="tabpanel"
    aria-labelledby="auth-tab-login"
    data-auth-content="login"
  >
    <h2 class="auth-dialog__title" id="auth-dialog-title">Welcome Back!</h2>
    <p class="auth-dialog__subtitle">Sign in to resume your games and progress.</p>

    <form class="auth-form" data-auth-form="login" novalidate>
      <div class="auth-form__field">
        <label class="auth-form__label" for="login-email">Email Address</label>
        <div class="auth-form__input-wrap">
          <svg
            class="auth-form__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6.5C3 5.67 3.67 5 4.5 5H19.5C20.33 5 21 5.67 21 6.5V17.5C21 18.33 20.33 19 19.5 19H4.5C3.67 19 3 18.33 3 17.5V6.5Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M4 6.5L12 12.5L20 6.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            class="auth-form__input"
            type="email"
            id="login-email"
            name="email"
            placeholder="e.g. alex@minigames.com"
            autocomplete="email"
          />
        </div>
      </div>

      <div class="auth-form__field">
        <label class="auth-form__label" for="login-password">Password</label>
        <div class="auth-form__input-wrap">
          <svg
            class="auth-form__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="5"
              y="10"
              width="14"
              height="10"
              rx="2"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V10"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
          <input
            class="auth-form__input"
            type="password"
            id="login-password"
            name="password"
            placeholder="••••••••"
            autocomplete="current-password"
          />
          <button
            class="auth-form__toggle-visibility"
            type="button"
            aria-label="Показать пароль"
            data-toggle-password
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <a href="/forgot-password" class="auth-form__forgot">Forgot Password?</a>

      <button class="auth-form__submit btn btn--primary" type="submit">Login</button>
    </form>

    <div class="auth-dialog__divider"><span>OR</span></div>

    <button class="auth-dialog__google" type="button">
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3a7.19 7.19 0 0 1-10.72-3.79H1.36v3.09A12 12 0 0 0 12 24Z"
        />
        <path fill="#FBBC05" d="M5.35 14.3a7.2 7.2 0 0 1 0-4.6V6.61H1.36a12 12 0 0 0 0 10.78Z" />
        <path
          fill="#EA4335"
          d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44A11.94 11.94 0 0 0 12 0 12 12 0 0 0 1.36 6.61L5.35 9.7A7.16 7.16 0 0 1 12 4.77Z"
        />
      </svg>
      Continue with Google
    </button>

    <p class="auth-dialog__switch">
      Don't have an account?
      <button class="auth-dialog__switch-link" type="button" data-auth-tab="register">
        Register
      </button>
    </p>
  </div>

  <div
    id="auth-panel-register"
    class="auth-dialog__content auth-dialog__content--hidden"
    role="tabpanel"
    aria-labelledby="auth-tab-register"
    data-auth-content="register"
  >
    <h2 class="auth-dialog__title">Create Account</h2>
    <p class="auth-dialog__subtitle">Join MiniGames to track your score & streak.</p>

    <form class="auth-form" data-auth-form="register" novalidate>
      <div class="auth-form__field">
        <label class="auth-form__label" for="register-username">Username</label>
        <div class="auth-form__input-wrap">
          <svg
            class="auth-form__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.5" />
            <path
              d="M4 20C4 16.13 7.58 13 12 13C16.42 13 20 16.13 20 20"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <input
            class="auth-form__input"
            type="text"
            id="register-username"
            name="username"
            placeholder="e.g. CozyGamer_99"
            autocomplete="username"
          />
        </div>
      </div>

      <div class="auth-form__field">
        <label class="auth-form__label" for="register-email">Email Address</label>
        <div class="auth-form__input-wrap">
          <svg
            class="auth-form__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6.5C3 5.67 3.67 5 4.5 5H19.5C20.33 5 21 5.67 21 6.5V17.5C21 18.33 20.33 19 19.5 19H4.5C3.67 19 3 18.33 3 17.5V6.5Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M4 6.5L12 12.5L20 6.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            class="auth-form__input"
            type="email"
            id="register-email"
            name="email"
            placeholder="your.email@domain.com"
            autocomplete="email"
          />
        </div>
      </div>

      <div class="auth-form__field">
        <label class="auth-form__label" for="register-password">Password</label>
        <div class="auth-form__input-wrap">
          <svg
            class="auth-form__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="5"
              y="10"
              width="14"
              height="10"
              rx="2"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V10"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
          <input
            class="auth-form__input"
            type="password"
            id="register-password"
            name="password"
            placeholder="Min. 8 characters"
            autocomplete="new-password"
          />
        </div>
      </div>

      <div class="auth-form__field">
        <label class="auth-form__label" for="register-confirm-password">Confirm Password</label>
        <div class="auth-form__input-wrap">
          <svg
            class="auth-form__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="5"
              y="10"
              width="14"
              height="10"
              rx="2"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V10"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
          <input
            class="auth-form__input"
            type="password"
            id="register-confirm-password"
            name="confirmPassword"
            placeholder="Repeat your password"
            autocomplete="new-password"
          />
        </div>
      </div>

      <button class="auth-form__submit btn btn--primary" type="submit">Create Account</button>
    </form>

    <div class="auth-dialog__divider"><span>OR</span></div>

    <button class="auth-dialog__google" type="button">
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3a7.19 7.19 0 0 1-10.72-3.79H1.36v3.09A12 12 0 0 0 12 24Z"
        />
        <path fill="#FBBC05" d="M5.35 14.3a7.2 7.2 0 0 1 0-4.6V6.61H1.36a12 12 0 0 0 0 10.78Z" />
        <path
          fill="#EA4335"
          d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44A11.94 11.94 0 0 0 12 0 12 12 0 0 0 1.36 6.61L5.35 9.7A7.16 7.16 0 0 1 12 4.77Z"
        />
      </svg>
      Sign up with Google
    </button>

    <p class="auth-dialog__switch">
      Already have an account?
      <button class="auth-dialog__switch-link" type="button" data-auth-tab="login">Login</button>
    </p>
  </div>
</div>
`,u=class extends e{backdrop=null;tabs=[];contents=[];lastFocusedElement=null;constructor(){super(`div`,`auth-dialog`),this.renderContent()}renderContent(){this.element.innerHTML=l,this.element.setAttribute(`aria-hidden`,`true`),this.queryElements(),this.bindEvents()}queryElements(){this.backdrop=this.element.querySelector(`[data-auth-backdrop]`),this.tabs=Array.from(this.element.querySelectorAll(`[data-auth-tab]`)),this.contents=Array.from(this.element.querySelectorAll(`[data-auth-content]`))}bindEvents(){document.addEventListener(n,this.handleOpenEvent),document.addEventListener(`keydown`,this.handleKeydown),this.backdrop?.addEventListener(`click`,()=>this.close()),this.element.querySelector(`[data-auth-close]`)?.addEventListener(`click`,()=>this.close()),this.tabs.forEach(e=>{e.addEventListener(`click`,()=>this.switchTab(e.dataset.authTab))}),this.element.querySelectorAll(`form`).forEach(e=>{e.addEventListener(`submit`,e=>e.preventDefault())}),this.element.querySelectorAll(`[data-toggle-password]`).forEach(e=>{e.addEventListener(`click`,()=>this.togglePasswordVisibility(e))})}handleOpenEvent=e=>{let t=e.detail;this.open(t)};handleKeydown=e=>{e.key===`Escape`&&this.isOpen()&&this.close()};isOpen(){return this.element.classList.contains(`auth-dialog--open`)}open(e=`login`){this.switchTab(e),this.lastFocusedElement=document.activeElement,this.element.classList.add(`auth-dialog--open`),this.element.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`no-scroll`),requestAnimationFrame(()=>{this.contents.find(e=>!e.classList.contains(`auth-dialog__content--hidden`))?.querySelector(`input`)?.focus()})}close(){this.element.classList.remove(`auth-dialog--open`),window.setTimeout(()=>{this.element.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`no-scroll`),this.lastFocusedElement?.focus()},220)}switchTab(e){this.tabs.forEach(t=>{let n=t.dataset.authTab===e;t.classList.toggle(`auth-dialog__tab--active`,n),t.setAttribute(`aria-selected`,String(n))}),this.contents.forEach(t=>{let n=t.dataset.authContent===e;t.classList.toggle(`auth-dialog__content--hidden`,!n),t.setAttribute(`aria-hidden`,String(!n)),t.hidden=!n}),requestAnimationFrame(()=>{this.contents.find(e=>!e.classList.contains(`auth-dialog__content--hidden`))?.querySelector(`input`)?.focus()})}togglePasswordVisibility(e){let t=e.parentElement?.querySelector(`input`);t&&(t.type=t.type===`password`?`text`:`password`)}},d=`router:change`,f=class{routes=new Map;rootElement;constructor(e){this.rootElement=e,window.addEventListener(`popstate`,()=>this.handleRoute()),this.initLinkInterceptor()}addRoute(e,t){this.routes.set(e,t)}navigate(e){window.location.pathname!==e&&(window.history.pushState({},``,e),this.handleRoute())}start(){this.handleRoute()}handleRoute(){let e=window.location.pathname,t=this.routes.get(e)||this.routes.get(`/`)||this.notFoundComponent;this.rootElement.innerHTML=``,this.rootElement.appendChild(t()),window.scrollTo(0,0),document.dispatchEvent(new CustomEvent(d,{detail:e}))}initLinkInterceptor(){document.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(!t)return;let n=t.getAttribute(`href`);if(!n)return;let r=t.origin!==window.location.origin,i=t.target===`_blank`,a=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;r||i||a||n.startsWith(`#`)||(e.preventDefault(),this.navigate(n))})}notFoundComponent(){let e=document.createElement(`div`);return e.textContent=`404 - Page Not Found`,e}},p=`<div class="hero__container">
  <div class="hero__content">
    <h1 class="hero__title">Take a Short Break & Have Fun</h1>

    <p class="hero__description">
      Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match
      3, farm, and board classics.
    </p>

    <button type="button" class="hero__btn btn btn--primary">Browse Library</button>
  </div>
</div>
`,m=class extends e{constructor(){super(`section`,`hero`),this.renderContent()}renderContent(){this.element.innerHTML=p}},h=`<div class="new-games__container">
  <div class="new-games__header">
    <h2 class="new-games__title">
      <span class="new-games__accent"></span>
      New Games
    </h2>

    <div class="new-games__controls">
      <button
        class="new-games__nav new-games__nav--prev"
        type="button"
        aria-label="Предыдущие игры"
        data-prev
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        class="new-games__nav new-games__nav--next"
        type="button"
        aria-label="Следующие игры"
        data-next
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>

  <div class="new-games__viewport" data-viewport>
    <ul class="new-games__track" data-track></ul>
  </div>
</div>
`,g=`/MiniGames/assets/leaf-it-alone-card-CGXXB8uI.jpg`,_=`/MiniGames/assets/little-corners-card-BzTzTJLT.jpg`,v=`/MiniGames/assets/vacation-cafe-simulator-card-Bzcyczbo.jpg`,y=`/MiniGames/assets/winter-burrow-card-KbzzF82b.jpg`,b=`/MiniGames/assets/tukoni-forest-keepers-card-CkPF-Hda.jpg`,x=`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L21.5 9l-4.99 4.32L18.02 20 12 16.54 5.98 20l1.51-6.68L2.5 9l6.6-.74L12 2z"/></svg>`,S=`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-6.7-4.35-9.33-8.2C1.02 10.5 1.6 7.4 4.2 5.9c2.1-1.2 4.6-.6 5.8 1.1.3.4.7.9 1 1.3.3-.4.7-.9 1-1.3 1.2-1.7 3.7-2.3 5.8-1.1 2.6 1.5 3.18 4.6 1.53 6.9C18.7 16.65 12 21 12 21z"/></svg>`,C=[{id:`1`,title:`Left it alone`,rating:`4.7`,likes:`12.1K`,image:g},{id:`2`,title:`Little corners`,rating:`4.9`,likes:`54.2K`,image:_},{id:`3`,title:`Vacation Cafe Simulator`,rating:`4.8`,likes:`28.7K`,image:v},{id:`4`,title:`Winter Burrow`,rating:`4.9`,likes:`32.4K`,image:y},{id:`5`,title:`Tukoni forest`,rating:`4.6`,likes:`9.8K`,image:b}],w=class extends e{viewport=null;track=null;cardEls=[];rafId=null;activeIndex=0;constructor(){super(`section`,`new-games`),this.renderContent()}renderContent(){this.element.innerHTML=h,this.renderCards(),this.bindEvents()}renderCards(){this.track=this.element.querySelector(`[data-track]`),this.viewport=this.element.querySelector(`[data-viewport]`),this.track&&(this.track.innerHTML=C.map(e=>`
        <li class="game-card" style="background-image: url('${e.image}')" data-card>
          <div class="game-card__overlay"></div>
          <div class="game-card__info">
            <span class="game-card__title">${e.title}</span>
            <div class="game-card__meta">
              <span class="game-card__rating">${x} ${e.rating}</span>
              <span class="game-card__likes">${S} ${e.likes}</span>
            </div>
          </div>
        </li>
      `).join(``),this.cardEls=Array.from(this.track.querySelectorAll(`[data-card]`)),this.activeIndex=Math.floor(this.cardEls.length/2),this.setActiveCard(this.activeIndex,!1))}setActiveCard(e,t=!0){if(!this.cardEls.length)return;let n=Math.max(0,Math.min(e,this.cardEls.length-1));this.activeIndex=n,this.cardEls.forEach((e,t)=>{e.classList.toggle(`game-card--active`,t===n)}),t&&this.scrollToIndex(n)}bindEvents(){let e=this.element.querySelector(`[data-prev]`),t=this.element.querySelector(`[data-next]`);e?.addEventListener(`click`,this.handlePrev),t?.addEventListener(`click`,this.handleNext),this.viewport?.addEventListener(`scroll`,this.handleScroll,{passive:!0}),window.addEventListener(`resize`,this.handleScroll),requestAnimationFrame(()=>this.scrollToIndex(this.getActiveIndex(),`auto`))}handleScroll=()=>{this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{this.updateActiveCard(),this.rafId=null}))};updateActiveCard(){if(!this.viewport||!this.cardEls.length)return;let e=this.viewport.getBoundingClientRect(),t=e.left+e.width/2,n=this.activeIndex,r=1/0;this.cardEls.forEach((e,i)=>{let a=e.getBoundingClientRect(),o=a.left+a.width/2,s=Math.abs(o-t);s<r&&(r=s,n=i)}),n!==this.activeIndex&&this.setActiveCard(n,!1)}getActiveIndex(){return this.activeIndex}scrollToIndex(e,t=`smooth`){let n=Math.max(0,Math.min(e,this.cardEls.length-1));this.setActiveCard(n,!1),this.cardEls[n]?.scrollIntoView({behavior:t,inline:`center`,block:`nearest`})}handlePrev=()=>{this.scrollToIndex(this.getActiveIndex()-1)};handleNext=()=>{this.scrollToIndex(this.getActiveIndex()+1)}},T=`<div class="top-players__container">
  <h2 class="top-players__title">
    <span class="top-players__accent"> </span>
    Top Players <span class="top-players__title-suffix"> This Week</span>
  </h2>

  <div class="top-players__table-wrapper">
    <table class="top-players__table">
      <thead>
        <tr>
          <th class="top-players__th" scope="col">Rank</th>
          <th class="top-players__th" scope="col">Player</th>
          <th class="top-players__th top-players__th--games" scope="col">
            <span class="top-players__th-full">Played</span>
            Games
          </th>
          <th class="top-players__th" scope="col">
            <span class="top-players__th-full">Total</span>
            Score
          </th>
          <th class="top-players__th" scope="col">Streak</th>
          <th class="top-players__th top-players__th--favorite" scope="col">Favorite Game</th>
        </tr>
      </thead>
      <tbody data-players-body></tbody>
    </table>
  </div>
</div>
`,E=[{id:`1`,rank:1,name:`Alex_Pro99`,initials:`AP`,avatarVariant:1,gamesPlayed:142,totalScore:94250,streakDays:12,favoriteGame:`Heartopia`},{id:`2`,rank:2,name:`CozyGamer_x`,initials:`CG`,avatarVariant:2,gamesPlayed:118,totalScore:81400,streakDays:8,favoriteGame:`Cat Mail Co.`},{id:`3`,rank:3,name:`MatchMaster`,initials:`MM`,avatarVariant:3,gamesPlayed:98,totalScore:72110,streakDays:5,favoriteGame:`Tiny Glade`},{id:`4`,rank:4,name:`BubblePop`,initials:`BP`,avatarVariant:4,gamesPlayed:87,totalScore:65900,streakDays:3,favoriteGame:`Whisper of the House`},{id:`5`,rank:5,name:`SudokuGod`,initials:`SG`,avatarVariant:5,gamesPlayed:74,totalScore:59320,streakDays:2,favoriteGame:`Cat Chess`}],D=class extends e{constructor(){super(`section`,`top-players`),this.renderContent()}renderContent(){this.element.innerHTML=T,this.renderRows()}renderRows(){let e=this.element.querySelector(`[data-players-body]`);e&&(e.innerHTML=E.map(e=>this.renderRow(e)).join(``))}renderRow(e){return`
           <tr class="top-players__row ${e.rank>3?`top-players__row--extra`:``}">
        <td class="top-players__td top-players__td--rank ${e.rank===1?`top-players__td--gold`:``}">#${e.rank}</td>

        <td class="top-players__td">
          <div class="top-players__player">
            <span class="top-players__avatar top-players__avatar--${e.avatarVariant}">${e.initials}</span>
            <span class="top-players__name">${e.name}</span>
          </div>
        </td>

        <td class="top-players__td top-players__td--games">${e.gamesPlayed}</td>

        <td class="top-players__td">
          <span class="top-players__score-full">${this.formatScoreFull(e.totalScore)}</span>
          <span class="top-players__score-short">${this.formatScoreShort(e.totalScore)}</span>
        </td>

        <td class="top-players__td">
          <span class="top-players__streak">
            🔥 <span class="top-players__streak-full">${e.streakDays} days</span><span class="top-players__streak-short">${e.streakDays}d</span>
          </span>
        </td>

        <td class="top-players__td top-players__td--favorite">
          <span class="top-players__badge">${e.favoriteGame}</span>
        </td>
      </tr>
    `}formatScoreFull(e){return e.toLocaleString(`en-US`)}formatScoreShort(e){return`${(Math.floor(e/100)/10).toFixed(1)}K`}},O=`<div class="dev-cta__container">
    <div class="dev-cta__media">
    <img data-image alt="" class="dev-cta__image" />
  </div>

  <div class="dev-cta__card">
    <h2 class="dev-cta__title">Are You a Game Developer?</h2>

    <p class="dev-cta__description">
      Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add
      to our platform. Submit your game and reach thousands of players!
    </p>

    <a href="/submit" class="dev-cta__submit btn btn--primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 15V3M12 3L7 8M12 3L17 8"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Submit Form
    </a>

    <p class="dev-cta__contact">
      or contact us at
      <a href="mailto:developers@minigames.com" class="dev-cta__contact-link"
        >developers@minigames.com</a
      >
    </p>
  </div>
</div>
`,k=class extends e{constructor(){super(`section`,`dev-cta`),this.renderContent()}renderContent(){this.element.innerHTML=O,this.setImageSrc()}setImageSrc(){let e=this.element.querySelector(`[data-image]`);e&&(e.src=`/MiniGames/illustration-side.png`)}},A=class extends e{hero;carrusel;topPlayer;developerCta;constructor(){super(`div`,`home-page`),this.hero=new m,this.carrusel=new w,this.topPlayer=new D,this.developerCta=new k,this.init()}init(){this.element.innerHTML=``,this.element.appendChild(this.hero.render()),this.element.appendChild(this.carrusel.render()),this.element.appendChild(this.topPlayer.render()),this.element.appendChild(this.developerCta.render())}};new class{header;footer;authDialog;router;mainElement;constructor(){let e=document.getElementById(`app`);if(!e)throw Error(`Root element #app not found`);this.header=new i,e.appendChild(this.header.render()),this.mainElement=document.createElement(`main`),this.mainElement.className=`main-content`,e.appendChild(this.mainElement),this.footer=new c,e.appendChild(this.footer.render()),this.authDialog=new u,document.body.appendChild(this.authDialog.render()),this.router=new f(this.mainElement),this.setupRoutes()}setupRoutes(){this.router.addRoute(`/`,()=>new A().render()),this.router.start()}};
//# sourceMappingURL=index-LzRK4lB6.js.map