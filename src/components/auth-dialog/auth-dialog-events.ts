export const AUTH_DIALOG_OPEN_EVENT = 'auth-dialog:open';
export type AuthDialogTab = 'login' | 'register';

export function openAuthDialog(tab: AuthDialogTab = 'login'): void {
  document.dispatchEvent(new CustomEvent<AuthDialogTab>(AUTH_DIALOG_OPEN_EVENT, { detail: tab }));
}
