export interface ControlStateMixinConstructor {
    new (...args: any[]): ControlStateMixin;
}

export interface ControlStateMixin {
    /**
     * Specify that this control should have input focus when the page loads.
     */
    autofocus?: boolean;
    /**
     * If true, the user cannot interact with this element.
     */
    disabled?: boolean;
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Any element extending this mixin is required to implement this getter.
     * It returns the actual focusable element in the component.
     */
    readonly focusElement: HTMLElement;
    /**
     * @protected
     */
    click(): void;
}

export function ControlStateMixin<T extends new (...args: any[]) => any>(
    superClass: T
): T & ControlStateMixinConstructor;
