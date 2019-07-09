export const FocusablesHelper: {
    /**
     * Returns a sorted array of tabbable nodes, including the root node.
     * It searches the tabbable nodes in the light and shadow dom of the children,
     * sorting the result by tabindex.
     * @param {!Node} node
     * @return {!Array<!HTMLElement>}
     */
    getTabbableNodes(node: Node): HTMLElement[];
    /**
     * Returns if a element is focusable.
     * @param {!HTMLElement} element
     * @return {boolean}
     */
    isFocusable(element: HTMLElement): boolean;
    /**
     * Returns if a element is tabbable. To be tabbable, a element must be
     * focusable, visible, and with a tabindex !== -1.
     * @param {!HTMLElement} element
     * @return {boolean}
     */
    isTabbable(element: HTMLElement): boolean;
};
