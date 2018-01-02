ReactDOM.render(
<h1>こんにちは。たぢさん。</h1>,
    document.getElementById('root')
);

var Request = window.superagent;
Request
    .get('color.json')
    .end(function(err, res){
        if (err) throw err;
        console.log(res.text);
    });


//コンポーネントのレンダリング
var MyDiv = React.createClass({
    displayName : '表示されるかな？',
    render: function(){
        return (
            <p>わたしはどこへ？</p>
        );
    }
});
ReactDOM.render(
    <MyDiv></MyDiv>,
    document.getElementById('mydiv')
);

//パラメータ渡し
var MyDiv2 = React.createClass({
    displayName: 'パラメータ渡し',
    render: function () {
        return(
            <p>パラメータは<span style={{color:'red'}}>{this.props.param}</span>です。</p>
        );
    }
});
ReactDOM.render(
    <MyDiv2 param="引数"></MyDiv2>,
    document.getElementById('mydiv2')
);

//ボタン
var MyButton = React.createClass({
    displayName: 'アラート',
    clickHandler: function () {
        alert('クリックされました。');
    },
    render: function () {
        return(
            <input type="button" value="クリック" onClick={this.clickHandler}/>
        );
    }
});
ReactDOM.render(
    <MyButton></MyButton>,
    document.getElementById('mybtn')
);

//State
var MySelect = React.createClass({
    selValue: '',
    displayName: 'セレクタ',
    //State初期化
    getInitialState: function () {
        return {val: ''};
    },
    selectChangeHandler: function (event) {
        this.selValue = event.target.value;
        //State更新
        this.setState({
            val: this.selValue
        });
    },
    render: function () {
        return(
            <div>
                <div>
                    <select onChange={this.selectChangeHandler}>
                        <option value='1'>Java</option>
                        <option value='2'>Ruby</option>
                        <option value='3'>Python</option>
                        <option value='4'>JavaScript</option>
                        <option value='5'>C#</option>
                    </select>
                </div>
                <p>VALUE: {this.state.val}</p>
            </div>
        );
    }
});
ReactDOM.render(
    <MySelect></MySelect>,
    document.getElementById('myselect')
)