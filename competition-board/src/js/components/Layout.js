import React from "react"

import { Table, Button, Divider } from "semantic-ui-react"
import { connect } from "react-redux"
import { fetchChecks } from "../actions/checkActions"
import Sound from "react-sound"


@connect((store) => {
    return {
        checks: store.check.checks,
    };
})


export default class Layout extends React.Component { 
    
    constructor() {
    super()
    this.state = {
        
        success: "https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/tick_green.png",
        failure: "http://www.onlygfx.com/wp-content/uploads/2016/09/red-denied-stamp-1.png",
        SportBet: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sportsbet_Logo.jpg"
            },
        Bet365: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "https://pbs.twimg.com/profile_images/875372540885118976/hVI5lP67.jpg"
            },
        CrownBet: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "https://www.aussiebetoffers.com/wp-content/uploads/2017/08/crownbet-sign-up-offer-bonus-bets-300x300.png"
            },
        Neds: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "https://bonus-bets.com.au/wp-content/uploads/2017/10/neds-logo.png"
            },
        WilliamHills: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "https://pbs.twimg.com/profile_images/797028677733253120/bW9oFXT-.jpg"
            },
        BetFair: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "http://dnu5embx6omws.cloudfront.net/photos/news/betfair-has-responded-to-a-price-increase-by-racing-nsw--1498115458_1352x900.jpg"
            },
        UniBet: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "https://volcanocity.com/wp-content/uploads/2017/04/unibet-sm.png"
            },
        LadBrokes: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "https://www.bettingexpert.com/assets/images/content/bookmakers/ladbrokes/Ladbrokes,P20banner.jpg.pagespeed.ce._FVpRuCYNP.jpg"
            },
        PalmerBet: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "http://is1.mzstatic.com/image/thumb/Purple118/v4/1c/7c/22/1c7c2265-ecec-57cc-1a29-b8e94739c3f1/source/1200x630bb.jpg"
            },
        TopBetta: {
            points: 0,
            playAble: true,
            sound: null,
            icon: "https://www.topbetta.com.au/apple-touch-icon-180x180.png"
            },
        }
   
        
    }
    
    componentWillMount() {
        this.props.dispatch(fetchChecks())
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.props.dispatch(fetchChecks()), 5000);
        
    }
    
    componentWillReceiveProps(newProps){
        let cstate = this.state
        for (var i in cstate){
            if (cstate[i].hasOwnProperty("points")){
                cstate[i].points = 0
            }
        }
        this.setState(cstate)
        
        const { checks } = newProps
        for (var i in checks){
            let name = checks[i].label.split(' ')[0]
            let status = checks[i].state
            this.checkStat(name,status)
        }
        
    }
 
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    checkStat(name, status) {
        
        let cstate = this.state
        if (status !== 1){
            if (cstate[name].playAble == true){
                cstate[name].sound = <Sound url="https://s1.vocaroo.com/media/download_temp/Vocaroo_s19aOFhdlXON.mp3" autoLoad="true" playStatus={Sound.status.PLAYING} ></Sound>
                cstate[name].playAble = false
                this.setState(cstate)
                }
            else{
                cstate[name].sound = null
                this.setState(cstate)   
            }}
        else{ 
            cstate[name].points += 1 
            if (cstate[name].playAble == false){cstate[name].playAble = true}
            this.setState(cstate)
    }}
    
    render(){    
        
        const { checks } = this.props; 
        var { Bet365, SportBet, CrownBet, Neds, WilliamHills, TopBetta, BetFair, UniBet, LadBrokes, PalmerBet } = this.state

        
        var allChecks = [] 
        let imgStyle = {
                borderRadius: "50%",
                width: "250",
                height: "250",
                margin: "auto"
            }
        
        let cstate = this.state
        
        for (var i in cstate){
            
            switch (i){
                
                case "Bet365":
                    if (Bet365.points < 1){
                        allChecks.push(<div class="imgContainer">{Bet365.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={Bet365.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={Bet365.icon}/></div>)
                    }
                    break;
                    
                case "SportBet":
                    if (SportBet.points < 1){
                        allChecks.push(<div class="imgContainer">{SportBet.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={SportBet.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={SportBet.icon}/></div>)
                    }
                    break;
                    
                case "CrownBet":
                    if (CrownBet.points < 4){
                        allChecks.push(<div class="imgContainer">{CrownBet.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={CrownBet.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={CrownBet.icon}/></div>)
                    }
                    break;
                    
                case "Neds":
                    if (Neds.points < 1){
                        allChecks.push(<div class="imgContainer">{Neds.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={Neds.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={Neds.icon}/></div>)
                    }
                    break;
                    
                case "WilliamHills":
                    if (WilliamHills.points < 4){
                        allChecks.push(<div class="imgContainer">{WilliamHills.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={WilliamHills.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={WilliamHills.icon}/></div>)
                    }
                    break;
                    
                    
                case "TopBetta": 
                    if (TopBetta.points < 1){
                        allChecks.push(<div class="imgContainer">{TopBetta.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={TopBetta.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={TopBetta.icon}/></div>)
                    }
                    break;
                    
                case "BetFair":
                    if (BetFair.points < 1){
                        allChecks.push(<div class="imgContainer">{BetFair.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={BetFair.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={BetFair.icon}/></div>)
                    }
                    break;
                    
                case "UniBet":
                    if (UniBet.points < 1){
                        allChecks.push(<div class="imgContainer">{UniBet.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={UniBet.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={UniBet.icon}/></div>)
                    }
                    break;
                    
                case "LadBrokes":
                    if (LadBrokes.points < 1){
                        allChecks.push(<div class="imgContainer">{LadBrokes.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={LadBrokes.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={LadBrokes.icon}/></div>)
                    }
                    break;
                    
                case "PalmerBet": 
                    if (PalmerBet.points < 1){
                        allChecks.push(<div class="imgContainer">{PalmerBet.sound}<img class="top" style={imgStyle} src={this.state.failure}/><img style={imgStyle} src={PalmerBet.icon}/></div>)
                    }
                    else{
                        allChecks.push(<div class="imgContainer"><img class="top" style={imgStyle} src={this.state.success}/><img style={imgStyle} src={PalmerBet.icon}/></div>)
                    }
                    
                    break; 
            }
                     
        }
        
        return (
            <div><div class="ui container" style={{overflow: "auto"}}> <h1 color="white"> Competitors Status </h1> <br> </br> <br> </br> {allChecks} </div></div>
            )
           
            
    }
}