define(["react"], function(React){
    return function(name, callback){
        var ConfirmReady = React.createClass({
            submit: function(){
                React.unmountComponentAtNode(document.getElementById('content'));
                callback();
            },
            render: function(){
                var nameMap = {
                    discrete: "Discrete Sliders",
                    twoaxis:  "Two Axis Valuator",
                    arcball: "Arcball"}
                return <div id="confirm" className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">
                            <div className="row">
                                <legend>Confirm</legend>
                                Are you ready to start the evaluation of {nameMap[this.props.name]}? Once you click confirm, the evaluation will start immediately.
                            </div>
                            <div className="row">
                              <button className="btn btn-default" onClick={this.submit}>Confirm</button>
                            </div>
                          </div>
                    </div>
                </div>
            }
        });

        React.render(
            <ConfirmReady name={name} />,
            document.getElementById("content")
        );
    }
});