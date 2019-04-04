import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'



interface SidebarProps{
    listItems: any[];
    actualPath: string;
}
interface SidebarState{
    
    
}
export class Sidebar extends React.Component<SidebarProps, SidebarState>{
    constructor(props:SidebarProps){
        super(props)
        this.state ={
        }
        this._handleListClick = this._handleListClick.bind(this)
    }
    private _handleListClick(key:number){
    }
    render(){
        console.log(this.props.actualPath)
        return (
            <ul id="sider" className='nav flex-column py-5'>
            
                {
                    this.props.listItems.map((item:any, key:any) => 
                        <li className={'nav-item h6 px-3 ' + (this.props.actualPath === item.path ? ' active':'')} key={key} onClick={()=>this._handleListClick(key)}>
                            <strong><Link className='nav-link' to={item.path}>{item.title}</Link></strong>
                        </li>)
                }
            </ul>
        )
    }
}
