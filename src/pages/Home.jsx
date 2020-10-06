import React from "react";
import {Categories, PizzaBlock, SortPopup} from '../components'
import {useDispatch, useSelector} from "react-redux"
import {setCategory, setSortBy} from "../redux/actions/filters"
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";
import PizzaLoadingBlock from "../components/PizzaBlock/LoadingBlock";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'Популярности', type: 'popular', order: 'desc'},
    {name: 'Цене', type: 'price', order: 'desc'},
    {name: 'Алфавиту', type: 'name', order: 'asc'}
]


function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)


    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy, dispatch])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />

                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    isLoaded ? items.map(obj =>
                            <PizzaBlock
                                onClickAddPizza={handleAddPizzaToCart}
                                key={obj.id} {...obj}
                                addedCount = {cartItems[obj.id] && cartItems[obj.id].length}
                            />)
                        : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
                }

            </div>
        </div>
    )
}

export default Home