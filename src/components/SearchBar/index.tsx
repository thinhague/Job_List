import { useEffect } from 'react'
import * as C from './style';
import ItemSearch from '../ItemSearch';
import { ItemJob } from '../../types/ItemJob'

interface Props {
    search: string[];
    setSearch: React.Dispatch<React.SetStateAction<string[]>>;
    list: ItemJob[];
    setList: React.Dispatch<React.SetStateAction<ItemJob[]>>;
}

const SearchBar = ({ search, setSearch, setList, list }: Props) => {

    useEffect(() => {
        for(let i in search) {
            const item = search[i]
            setList(list.filter(e =>
                 e.role === item || 
                 e.level === item ||
                 e.languages[e.languages.indexOf(item)] === item))
        }
    },[search])
    
    const removeItemSearch = async (value:string) => {
        await fetch("./data.json",{
            headers: {
                Accept: "application/json",
            },
        })
        .then(res => res.json())
        .then(res => setList(res));
        setSearch(search.filter(e => e !== value))
    }

    const clear = () => {
        setSearch([])
        fetch("./data.json",{
            headers: {
              Accept: "application/json",
            },
          })
          .then(res => res.json())
          .then(res => setList(res));
    }

    return (
        <C.Container>
           {search.length > 0 ?
            <C.Bar>
            <C.ContainerLeft>
                {search.map((item, index) => (
                    <ItemSearch
                        key={index}
                        item={item}
                        deleteItem={removeItemSearch}
                    />
                ))}
            </C.ContainerLeft>

            <C.ContainerRight>
                <button onClick={clear}>Clear</button>
            </C.ContainerRight>

        </C.Bar>
        :
        null}

        </C.Container>
    )
}

export default SearchBar