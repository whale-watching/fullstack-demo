/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */
export default function (onResize, onStopResizing) {
    document.documentElement.removeEventListener(
        'mousemove',
        onResize,
        false,
    );
    document.documentElement.removeEventListener(
        'mouseup',
        onStopResizing,
        false,
    );
}
