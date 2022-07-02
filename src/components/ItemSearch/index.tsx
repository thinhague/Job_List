import * as C from './style'

interface Props {
    item: string;
    deleteItem: (value:string) => void
}

const ItemSearch = ({ item, deleteItem }: Props) => {
    return (
        <C.Container>
            <label>{item}</label>
            <button onClick={() => deleteItem(item)}>
                X
            </button>
        </C.Container>
    )
}

export default ItemSearch