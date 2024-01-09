import {Component} from "react"
export default class FifthComponent extends Component{
    render(){
        return (<div className="FifthComponent">Fifth Component</div>);
    }
}
//There can only be one default export in any module, the rest shdnt be
export class SixthComponent extends Component{
    render(){
        return (<div className="SixthComponent">Sixth Component</div>);
    }
}