import { PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { ControlStateMixin } from '@vaadin/vaadin-control-state-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';

/**
 * `<vaadin-button>` is a Web Component providing an accessible and customizable button.
 *
 * ```html
 * <vaadin-button>
 * </vaadin-button>
 * ```
 *
 * ```js
 * document.querySelector('vaadin-button').addEventListener('click', () => alert('Hello World!'));
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label (text) inside the button
 * `prefix` | A slot for e.g. an icon before the label
 * `suffix` | A slot for e.g. an icon after the label
 *
 *
 * The following attributes are exposed for styling:
 *
 * Attribute | Description
 * --------- | -----------
 * `active` | Set when the button is pressed down, either with mouse, touch or the keyboard.
 * `disabled` | Set when the button is disabled.
 * `focus-ring` | Set when the button is focused using the keyboard.
 * `focused` | Set when the button is focused.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 */
export class ButtonElement extends ElementMixin(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement)))) {
    static readonly is: string;
    static readonly version: string;
    readonly focusElement: HTMLButtonElement;
}

declare global {
    interface HTMLElementTagNameMap {
        'vaadin-button': ButtonElement;
    }
}
