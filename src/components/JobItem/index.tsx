import * as C from './style';
import { ItemJob } from '../../types/ItemJob'

interface Props {
    item: ItemJob;
    filter: (value:string) => void
}

const JobItem = ({ item, filter }:Props) => {
    return (
        <C.Container>
            <section>
                <C.ContainerLeft>
                    <img src={item.logo} />
                </C.ContainerLeft>

                <C.ContainerRight>
                    <section>
                        <div>
                            <C.Company>{item.company}</C.Company>
                            {item.new &&  <C.New>new!</C.New>}
                            {item.featured && <C.Featured>featured</C.Featured>}
                        </div>

                        <div>
                            <C.TitleJob>{item.position}</C.TitleJob>
                        </div>

                        <div>
                            <ul>
                                <li>{item.postedAt}</li>
                                <li>{item.contract}</li>
                                <li>{item.location}</li>
                            </ul>
                        </div>
                    </section>
                </C.ContainerRight>
            </section>

            <section>
                <C.ContainerLanguages>

                    <input
                        readOnly
                        value={item.role}
                        type="button"
                        onClick={e => filter(e.currentTarget.value)}
                    />

                    <input
                        readOnly
                        value={item.level}
                        type="button"
                        onClick={e => filter(e.currentTarget.value)}
                    />

                    {item.languages.map((e,index)=>(
                        <input
                        key={index}
                        readOnly
                        value={e}
                        type="button"
                        onClick={e => filter(e.currentTarget.value)}
                    />
                    ))}
                </C.ContainerLanguages>
            </section>
        </C.Container>
    )
}

export default JobItem