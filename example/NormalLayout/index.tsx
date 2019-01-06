import *as React from 'react';
import { Dragact } from '../../src/lib/dragact'
import { DragactLayoutItem, GridItemProvided } from '../../src/lib/dragact-type'
import { Words ,SpanStyle} from './largedata';
import './index.css';


const fakeData = () => {
    var Y = 0;
    return Words.map((item, index) => {
        if (index % 4 === 0) Y++;

        return { ...item, GridX: index % 4 * 4, GridY: Y * 4, w: 4, h: 3, key: index + '' }
    })
}


export const Card: (any: any) => any = ({ item, provided }) => {
    
    return (
        <div
            className='layout-Item'
            {...provided.props}
            {...provided.dragHandle}
            style={{
                ...provided.props.style,
                background: `${provided.isDragging ? '#eaff8f' : 'white'}`
            }}
        >
            <div
                style={{ padding: 5, textAlign: 'center', color: '#595959' }}
            >
                <span>title</span>
                <div style={{ borderBottom: '1px solid rgba(120,120,120,0.1)' }} />
                {item.content}
            </div>
      

        {
            SpanStyle.map((style,index)=>{
                return <span
                className={"s-move-content-direction s-move-content-direction-"+style.pos }
                {...provided.resizeHandle}
                data-type="BR"
               
               style={{...style}}
            />

            })
        }

            
            
        </div>
    )
}


export class LayoutDemo extends React.Component<{}, {}> {
   // dragactNode: Dragact;
    render() {
        const margin: [number, number] = [5, 5];
        const dragactInit = {
            width: 600,
            col: 16,
            rowHeight: 40,
            margin: margin,
            className: 'normal-layout',
            layout: fakeData()
        }
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div>
                    <h1 style={{ textAlign: 'center' }}>
                        普通布局demo
                    </h1>
                    <Dragact
                        {...dragactInit}
                        placeholder={true}
                        // ref={node => node ? this.dragactNode = node : null}
                        style={{
                            background: '#003A8C'
                        }}
                    >
                        {(item: DragactLayoutItem, provided: GridItemProvided) => {
                            return <Card
                                item={item}
                                provided={provided}
                            />
                        }}
                    </Dragact>
                </div>
            </div>
        )
    }
}
