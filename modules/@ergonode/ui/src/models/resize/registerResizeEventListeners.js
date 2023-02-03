/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export default function (onResize, onStopResizing) {
    document.documentElement.addEventListener(
        'mousemove',
        onResize,
        false,
    );
    document.documentElement.addEventListener(
        'mouseup',
        onStopResizing,
        false,
    );
}
