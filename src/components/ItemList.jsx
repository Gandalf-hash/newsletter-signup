import React from 'react'

function ItemList() {
    const items = [
        { text: 'Product discovery and building what matters' },
        { text: 'Measuring to ensure updates are a success' },
        { text: 'And much more!' },
    ];
    return (
        <div className='space-y-4 text-lg md:text-xl flex-col items-center'>
            {items.map((item, index) => (
                <div className="flex space-x-4 items-center" key={index}>
                    <img src="/images/icon-list.svg" alt="Icon List" />
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    )
}

export default ItemList
