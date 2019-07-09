export interface ThemePropertyMixinConstructor {
    new (...args: any[]): ThemePropertyMixin;
}

export interface ThemePropertyMixin {
    readonly theme: string;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}

export function ThemePropertyMixin<T extends new (...args: any[]) => any>(
    superClass: T
): T & ThemePropertyMixinConstructor;
