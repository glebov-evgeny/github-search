import {useSearchUsersQuery, useLazyGetUserReposQuery} from "../store/github/github.api";
import {useEffect, useState} from "react";
import {useDebounce} from "../hooks/debounce";
import {RepoCard} from "../components/RepoCard";

export function MainPage(){
    const [search, setSearch] = useState("")
    const debounced = useDebounce(search)
    const [dropdown, setDropdown] = useState(false)

    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })
    const [fetchRepos, {isLoading:areReposLoading, data: repos}] = useLazyGetUserReposQuery();

    useEffect(()=>{
        setDropdown(debounced.length > 3 && data?.length! > 0)
    }, [debounced, data])

    const clickHandler = (username:string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    return(
        <div className="main__content">
            {isError && <p className="main__error">Сетевая ошибка</p>}
            <div className="main__search">
                <input
                    type="text"
                    className="main__search-input"
                    placeholder="Поиск по репозиториям"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                {dropdown && <ul className="main__search-dropdown">
                    {isLoading && <p className="main__loading">Загрузка...</p>}
                    {data?.map(user => (
                        <li
                            className="main__search-option"
                            key={user.id}
                            onClick={()=>clickHandler(user.login)}>{user.login}</li>
                    ))}
                </ul>}
            </div>
            <div className="main__box">
                {areReposLoading && <p>Загрузка..</p>}
                {repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
            </div>
        </div>
    )
}