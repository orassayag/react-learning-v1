'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexPage = function (_Component) {
    (0, _inherits3.default)(IndexPage, _Component);

    function IndexPage() {
        (0, _classCallCheck3.default)(this, IndexPage);

        return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(IndexPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'The Main Page of ', this.props.appName), _react2.default.createElement('p', null, 'Go to ', _react2.default.createElement(_link2.default, { href: '/auth' }, _react2.default.createElement('a', null, 'Auth'))), _react2.default.createElement('button', { onClick: function onClick() {
                    _index2.default.push('/auth');
                } }, 'Go to Auth'));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(context) {
            var promise = new _promise2.default(function (resolve, reject) {
                setTimeout(function () {
                    resolve({
                        appName: 'Super App'
                    });
                }, 1000);
            });
            return promise.then();
        }
    }]);

    return IndexPage;
}(_react.Component);

;

exports.default = IndexPage;