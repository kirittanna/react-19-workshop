"use client";

import { createElement, useId } from 'react';

const Counter = () => {
    const id = useId();

    return createElement('div', null, 
        createElement('span', null, `Count: ${id}`),
    )
}

export default Counter