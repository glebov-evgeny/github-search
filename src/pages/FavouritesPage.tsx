import {useAppSelector} from "../hooks/redux";

export function FavouritesPage(){
    const {favourites} = useAppSelector(state => state.github)

    if( favourites.length === 0) return <p className="favorites__box-error">Ничего нет</p>

    return(
        <div className="favorites__box">
            { favourites.map(f => (
                <a href={f} key={f}>{f}</a>
            )) }
        </div>
    )
}