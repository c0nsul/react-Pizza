import React, {useState} from 'react';

function SortPopup ({items}) {
    const [visiable, setVisiable] = useState(false)
    const [activeItem, setActiveItem] = useState(0)
    const selectedSorting = items[activeItem].name;

    //ссылка на дом
    const sortRef = React.useRef(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
        setVisiable(false)
    }

    //исключаем лишний ререндер
    const toggleVissiblePopup = () => {
        setVisiable(!visiable)
    }

    //close popup if click outside popup BLOCK
    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)){
            setVisiable(false)
        }
    }

    React.useEffect(
        () => {
            document.body.addEventListener('click', handleOutsideClick)
        },[]
    )

    return (
        <div
            ref={sortRef} //ахренеть... магия бл
            className="sort"
        >
            <div className="sort__label">
                <svg
                    className={visiable ? 'rotated': ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVissiblePopup}>{selectedSorting}</span>
            </div>


            {visiable &&
                <div className="sort__popup" >
                    <ul>
                        {items && items.map((obj, index) => (
                            <li
                                onClick={() => {onSelectItem(index)}}
                                className={activeItem === index ? 'active' : ''}
                                key={`${obj.type}_${index}`}
                            >
                                {obj.name}
                            </li>
                        ))
                        }
                    </ul>
                </div>

            }

        </div>)
}

export default SortPopup


