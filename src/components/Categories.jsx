import React from 'react';

const Categories = (props) => {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? ' active ' : ''}
                    onClick={() => onSelectItem(null)}>Все</li>
                {props.items.map((item, index) =>
                    <li
                        className={activeItem === index ? ' active ' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${item}_${index}`}>{item}
                    </li>)}
            </ul>
        </div>
    )
}

export default Categories;