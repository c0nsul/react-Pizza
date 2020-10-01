import React, {useState} from "react"
import propTypes from "prop-types"
import PizzaBlock from "./PizzaBlock"

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {

        return (
            <div className="categories">
                <ul>
                    <li
                        className={activeCategory === null ? 'active' : ''}
                        onClick={() => onClickCategory(null)}
                    >
                        Все
                    </li>
                    {
                        items && items.map ((name, index) => (
                            <li
                                onClick={() => onClickCategory(index)}
                                className={activeCategory === index ? 'active' : ''}
                                key={`${name}_${index}`}
                            >
                                {name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
)

Categories.propTypes = {
    //activeCategory: propTypes.oneOf([propTypes.number, null]),
    items: propTypes.arrayOf(propTypes.string).isRequired,
    onClickCategory: propTypes.func
}

Categories.defaultProps = {activeCategory: null, items: []}


export default Categories;