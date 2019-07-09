import { PolymerElement } from '@polymer/polymer/polymer-element';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { AccordionPanelElement } from './vaadin-accordion-panel';

/**
 * `<vaadin-accordion>` is a Web Component implementing accordion widget —
 * a vertically stacked set of expandable panels. The component should be
 * used as a wrapper for two or more `<vaadin-accordion-panel>` components.
 *
 * Panel headings function as controls that enable users to open (expand)
 * or hide (collapse) their associated sections of content. The user can
 * toggle panels by mouse click, Enter and Space keys.
 *
 * Only one panel can be opened at a time, opening a new one forces
 * previous panel to close and hide its content.
 *
 * ```
 * <vaadin-accordion>
 *   <vaadin-accordion-panel>
 *     <div slot="summary">Panel 1</div>
 *     This panel is opened, so the text is visible by default.
 *   </vaadin-accordion-panel>
 *   <vaadin-accordion-panel>
 *     <div slot="summary">Panel 2</div>
 *     After opening this panel, the first one becomes closed.
 *   </vaadin-accordion-panel>
 * </vaadin-accordion>
 * ```
 *
 * ### Styling
 *
 * See the [`<vaadin-accordion-panel>`](#/elements/vaadin-accordion-panel)
 * documentation for the available state attributes and stylable shadow parts.
 *
 * **Note:** You can apply the theme to `<vaadin-accordion>` component itself,
 * especially by using the following CSS selector:
 *
 * ```
 * :host ::slotted(vaadin-accordion-panel) {
 *   margin-bottom: 5px;
 * }
 * ```
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 */
export class AccordionElement extends ThemableMixin(ElementMixin(PolymerElement)) {
    static readonly is: string;
    static readonly version: string;
    /**
     * The index of currently opened panel. First panel is opened by
     * default. Only one panel can be opened at the same time.
     * Setting null or undefined closes all the accordion panels.
     */
    opened?: number | null;
    readonly items: ReadonlyArray<AccordionPanelElement>;
    static readonly observers: string[];
    readonly focused: Element | null;
    focus(): void;
    addEventListener<K extends keyof AccordionElementEventMap>(type: K, listener: (this: AccordionElement, ev: AccordionElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
}

export interface AccordionElementEventMap extends HTMLElementEventMap {
    'opened-changed': CustomEvent<{ value?: number | null; path: 'opened'; }>;
    'items-changed': CustomEvent<
        { value: ReadonlyArray<AccordionPanelElement>; path: 'items' } |
        { value: number; path: 'items.length'; } |
        { value: any[]; path: 'items.splices'; }
    >;
}

declare global {
    interface HTMLElementTagNameMap {
        'vaadin-accordion': AccordionElement;
    }
}
