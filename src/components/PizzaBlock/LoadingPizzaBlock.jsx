import React from "react"
import ContentLoader from "react-content-loader"

const LoadingPizzaBlock = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="82" y="68" rx="0" ry="0" width="0" height="1" />
        <circle cx="130" cy="120" r="120" />
        <rect x="0" y="268" rx="3" ry="3" width="280" height="26" />
        <rect x="0" y="306" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="412" rx="4" ry="4" width="89" height="38" />
        <rect x="131" y="411" rx="19" ry="19" width="148" height="38" />
    </ContentLoader>
)

export default LoadingPizzaBlock