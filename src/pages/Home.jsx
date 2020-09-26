import React from "react";
import {Categories,SortPopup, PizzaBlock} from '../components'

const types = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
/*
const sortTypes = {[
            {name: 'Популярности', type: 'popular'},
            {name: 'Цене', type: 'price'},
            {name: 'Алфавиту', type: 'alphabet'}
        ]}
*/
function Home ({items}) {

    return (
        <div className="container">
            <div className="content__top">

                <Categories items={types}  />

                <SortPopup items={[
                    {name: 'Популярности', type: 'popular'},
                    {name: 'Цене', type: 'price'},
                    {name: 'Алфавиту', type: 'alphabet'}
                ]}/>
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