import React, {useState} from "react"

/*
class Categories extends React.Component {


    state = {
      activeItem: null
    }

    onSelectItem = index => {
        this.setState({
            activeItem:index
        })
    }

    render() {
        const{items} = this.props

        return (
            <div className="categories">
                <ul>
                    <li
                        className={this.state.activeItem === null ? 'active' : ''}
                        onClick={() => this.onSelectItem(null)}
                    >
                        Все
                    </li>

                    {items.map ((name, index) => (
                            <li
                                className={this.state.activeItem === index ? 'active' : ''}
                                onClick={() => this.onSelectItem(index)}
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
}
*/



function Categories({items}) {
    //деструктуризация
    const [activeItem, setActiveItem] = useState(null)

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => setActiveItem(null)}
                >
                    Все
                </li>
                {
                    items && items.map ((name, index) => (
                        <li
                            onClick={() => setActiveItem(index)}
                            className={activeItem === index ? 'active' : ''}
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




export default Categories;