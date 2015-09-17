"use strict";

define(["react", "dist/mrt_question", "dist/timer"], function (React, MRTQuestion, Timer) {
    return function (callback) {
        var TEST_LIMIT = 10 * 60 * 1000;
        var answers = {};
        var Test = React.createClass({
            displayName: "Test",

            selectedAnswer: function selectedAnswer(qid, num, selected) {
                answers[qid + "_" + num] = selected;
            },
            render: function render() {
                var that = this;
                var qImages = [],
                    questions;

                for (var i = 1; i <= 24; i++) {
                    qImages.push("images/" + i + "a.png");
                }
                questions = qImages.map(function (src, i) {
                    return React.createElement(MRTQuestion, { key: "test_" + i, num: i + 1, imgSrc: src, selectedAnswer: that.selectedAnswer, qid: "test_" + i });
                });
                return React.createElement(
                    "div",
                    { id: "confirm", className: "container" },
                    React.createElement(
                        "nav",
                        { className: "navbar navbar-default navbar-fixed-top" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "navbar-header" },
                                React.createElement(
                                    "span",
                                    { className: "navbar-brand" },
                                    "MRT Test"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "navbar-collapse collapse" },
                                React.createElement(
                                    "ul",
                                    { className: "nav navbar-nav" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "span",
                                            { id: "timer", className: "navbar-brand" },
                                            "MRT Test"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    questions
                );
            }
        });

        React.render(React.createElement(Test, null), document.getElementById("content"));

        var timerCallback = function timerCallback() {
            React.unmountComponentAtNode(document.getElementById('content'));
            window.log.saveLog("mrt test results", answers);
            callback();
        };
        var timer = new Timer("#timer", TEST_LIMIT, timerCallback);
        timer.start();
    };
});
//# sourceMappingURL=mrt_test.js.map