import style from './Navbar.module.css'

function Navbar() {
    return(
        <nav>
            <div className={style.container}>
                <h1><span>🍽️</span>RETSEPLAR <br /> DUNYOSI</h1>
                <ul className={style.menu}>
                    <li className={style.navItem}><a href="">Bosh sahifa</a></li>
                    <li className={style.navItem}><a href="">Kategoriyalar</a></li>
                    <li className={style.navItem}><a href="">Yangilar</a></li>
                    <li className={style.navItem}><a href="">Blog</a></li>
                    <li className={style.navItem}><a href="">Aloqa</a></li>
                </ul>
                <div className={style.btnContainer}>
                <div className={style.searchBtn}>🔍︎</div>
                <div className={style.profileBtn}>
                    <span>Xush Kelibsiz.</span>
                    <button className={style.kirishBtn}>Kirish</button>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;