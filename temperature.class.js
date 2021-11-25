class Temp extends React.Component {
    constructor(props){
        super(props)
        this.state = {cel: '0', far:'32'}
    }
    chgInputC(event) {
        console.log(event.target.value)
        this.setState({ cel: event.target.value, far: event.target.value*(9/5)+32})        
    }
    chgInputF(event) {
        console.log(event.target.value)
        this.setState({ far: event.target.value, cel: ((event.target.value-32)*5)/9 })
    }
    render(){
        let laClasse =""
        if (this.state.cel<100){
            laClasse = 'bleu'
        }
        else {
            laClasse = "rouge"
        }
        return(
            <div className={laClasse} id="temperatures">
                <div className="flex">
                    <p>Entre votre température en °C</p>
                    <input type="number" value={this.state.cel} onChange={this.chgInputC.bind(this)}/>
                </div>
                <div className="flex">
                <p>Entre votre température en °F</p>
                <input type="number" value={this.state.far} onChange={this.chgInputF.bind(this)}/>
                </div>
            {(this.state.cel < 100)?<p className="resultat">L'eau ne boue pas</p>:<p className="resultat">L'eau boue</p>}
            </div>
        )       
    }   
}
ReactDOM.render(<Temp/>, document.getElementById('temp'))