import { useEffect, useState } from 'react';
import * as C from './App.styles';
import ImgHeader from './assets/bg-header-desktop.svg';
import ImgHeaderMobile from './assets/bg-header-mobile.svg';
import SearchBar from './components/SearchBar';
import JobItem from './components/JobItem';
import { ItemJob } from './types/ItemJob';
import  useWindowDimensions  from './hooks/useWindowDimensions';

const App = () => {
  useEffect(()=>{
    fetch("./data.json",{
        headers: {
          Accept: "application/json",
        },
      })
      .then(res => res.json())
      .then(res => setList(res));
    
  },[])

  const [list,setList] = useState<ItemJob[]>([])
  const [search, setSearch] = useState<string[]>([])
  const { width } = useWindowDimensions();
  
  const filter = (value:string) => {
    const validateSearch = search.some(item => item === value)
    if(validateSearch) return

    setSearch([...search, value])
    setList(list.filter(
      e => e.role === value ||
      e.level === value ||
      e.languages[e.languages.indexOf(value)] === value))
  }
  const image:string = width > 900 ? ImgHeader : ImgHeaderMobile
  return (
    <C.Container>
      <C.Header>
        <img src={image} alt='image' />
      </C.Header>

      {search.length > 0 &&
        <SearchBar
          search={search}
          setSearch={setSearch}
          setList={setList}
          list={list}
        />
      }

      {list.map((item, index) => (
        <JobItem key={index} item={item} filter={filter} />
      ))}
    </C.Container>
  );
}

export default App;