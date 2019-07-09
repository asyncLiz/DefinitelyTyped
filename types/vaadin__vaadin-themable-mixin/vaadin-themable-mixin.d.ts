import { ThemePropertyMixin, ThemePropertyMixinConstructor } from './vaadin-theme-property-mixin';

export interface ThemableMixinConstructor {
    new (...args: any[]): ThemableMixin;
    finalize(): void;
}

export interface ThemableMixin extends ThemePropertyMixin {}

export function ThemableMixin<T extends new (...args: any[]) => any>(
    superClass: T
): T & ThemableMixinConstructor & ThemePropertyMixinConstructor;
