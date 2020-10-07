import ContentLoader from "react-content-loader"
import React from "react"

function PizzaLoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="130" cy="136" r="113"/>
            <circle cx="176" cy="266" r="2"/>
            <rect x="-4" y="275" rx="3" ry="3" width="280" height="26"/>
            <rect x="-1" y="313" rx="6" ry="6" width="280" height="84"/>
            <rect x="98" y="375" rx="0" ry="0" width="1" height="0"/>
            <rect x="6" y="417" rx="3" ry="3" width="94" height="31"/>
            <rect x="128" y="406" rx="20" ry="20" width="148" height="53"/>
        </ContentLoader>)

}

export default PizzaLoadingBlock

