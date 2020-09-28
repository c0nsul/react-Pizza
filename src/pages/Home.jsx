import React from "react";
import {Categories,SortPopup, PizzaBlock} from '../components'
import {useDispatch, useSelector} from "react-redux"
import {setCategory} from "../redux/actions/filters"

const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const sortItems = [
    {name: 'Популярности', type: 'popular'},
    {name: 'Цене', type: 'price'},
    {name: 'Алфавиту', type: 'alphabet'}
]


function Home () {
    const dispatch = useDispatch()

    const onSelectCategory = index => {
        dispatch(setCategory(index))
    }

    const items = useSelector(({pizzas}) => pizzas.items)

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />

                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    items && items.map (obj => <PizzaBlock key={obj.id} {...obj} />)
                }

            </div>
        </div>
    )
}

export default Home