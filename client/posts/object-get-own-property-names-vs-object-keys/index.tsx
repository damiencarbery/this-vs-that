import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Differences

1. \`Object.getOwnPropertyNames(obj)\` returns all the properties of the object \`obj\`. \`Object.keys(obj)\` returns all _enumerable_ properties.
    
    They provide the same result unless you set \`enumerable: false\` to any property.
    
    In the following example, the \`screen\` object has two properties, \`branch\` and \`size\`.
    
    ~~~ javascript
    const screen = {
        branch: 'Dell',
        size: '27inch',
    };
    
    Object.getOwnPropertyNames(screen);     // ['branch', 'size']
    Object.keys(screen);                    // ['branch', 'size']
    ~~~
     
    Let's define one more property named \`resolution\` but it is set as \`enumerable: false\`:
    
    ~~~ javascript
    Object.defineProperties(screen, {
        resolution: {
            enumerable: false,
            value: '2560 x 1440',
        },
    });
    ~~~
    
    The \`resolution\` property then doesn't appear in the list of \`Object.keys\`:
    
    ~~~ javascript
    Object.getOwnPropertyNames(screen); // ['branch', 'size', 'resolution']
    Object.keys(screen);                // ['branch', 'size']
    ~~~
    
2. For arrays, \`Object.getOwnPropertyNames\` includes an extra property named \`length\` which is the size of the array.
    
    ~~~ javascript
    const animals = ['dog', 'cat', 'tiger'];
    
    Object.keys(animals);                   // ['0', '1', '2']
    Object.getOwnPropertyNames(animals);    // ['0', '1', '2', 'length']
    ~~~
`}
/>
    );
};
