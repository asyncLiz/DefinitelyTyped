export interface ElementMixinConstructor {
    new (...args: any[]): ElementMixin;
}

export interface ElementMixin {
    ready(): void;
}

export function ElementMixin<T extends new (...args: any[]) => any>(superClass: T): T & ElementMixinConstructor;
