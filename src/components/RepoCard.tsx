import {IRepo} from "../models/models";
import React, {useState} from "react";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";

export function RepoCard({repo}:{repo:IRepo}){

    const {addFavorite, removeFavorite} = useActions()
    const {favourites} = useAppSelector(state => state.github)

    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

    const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsFav(true)
        addFavorite(repo.html_url)
    }

    const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsFav(false)
        removeFavorite(repo.html_url)
    }

    return (
        <a href={repo.html_url} className="repo__card" target="_blank">
            <h2 className="repo__card-title">{repo.full_name}</h2>
            <p className="repo__card-info">
                Fork: <span>{repo.forks}</span>
                Watchers: <span>{repo.watchers}</span>
            </p>
            <p className="repo__card-description">{repo?.description}</p>
            { !isFav &&
                <button
                    className="repo__card-button _add"
                    onClick={addToFavorite}
                >2Добавить</button>
            }
            { isFav &&
                <button
                    className="repo__card-button _remove"
                    onClick={removeFromFavorite}
                >1Удалить</button>
            }



        </a>
    )
}