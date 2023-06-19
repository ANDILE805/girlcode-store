const TopBar = () => {
    return(
        <div className = "top-bar">
            <div className="contact">
                <a href="tel:+27685157815"><span className="material-symbols-outlined">call</span>+27685157815</a>
            </div>
            <div className="cta">
                <p>Get 50% Off on Selected Items | <a href="#">Shop Now</a></p>
            </div>
            <div className="localisation">
                <ul>
                <li>Eng<span className="material-symbols-outlined">expand_more</span></li>
                <li>location<span className="material-symbols-outlined">expand_more</span></li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar ;
