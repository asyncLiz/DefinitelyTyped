import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ControlStateMixin } from '@vaadin/vaadin-control-state-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';

/**
 * `<vaadin-details>` is a Web Component which the creates an
 * expandable panel similar to `<details>` HTML element.
 *
 * ```
 * <vaadin-details>
 *   <div slot="summary">Expandable Details</div>
 *   Toggle using mouse, Enter and Space keys.
 * </vaadin-details>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name        | Description
 * -----------------|----------------
 * `summary`        | The element used to open and close collapsible content.
 * `toggle`         | The element used as indicator, can represent an icon.
 * `summary-content`| The wrapper for the slotted summary content.
 * `content`        | The wrapper for the collapsible details content.
 *
 * The following attributes are exposed for styling:
 *
 * Attribute    | Description
 * -------------| -----------
 * `opened`     | Set when the collapsible content is expanded and visible.
 * `disabled`   | Set when the element is disabled.
 * `focus-ring` | Set when the element is focused using the keyboard.
 * `focused`    | Set when the element is focused.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 */
export class DetailsElement extends ControlStateMixin(ElementMixin(ThemableMixin(PolymerElement))) {
    static readonly is: string;
    static readonly version: string;
    opened: boolean;
    addEventListener<K extends keyof DetailsElementEventMap>(type: K, listener: (this: DetailsElement, ev: DetailsElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
}

export interface DetailsElementEventMap {
    'opened-changed': CustomEvent<{ value: boolean, path: 'opened'; }>;
}

declare global {
    interface HTMLElementTagNameMap {
        'vaadin-details': DetailsElement;
    }
}
