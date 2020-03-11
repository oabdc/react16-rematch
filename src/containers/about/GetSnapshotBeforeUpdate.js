import React from 'react';
export default class GetSnapshotBeforeUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = { messages: [] };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                messages: [...this.state.messages, `msg:${this.state.messages.length}`],
            });
        }, 1000);
    }
    getSnapshotBeforeUpdate() {
      // 接收父组件传递过来的 props 和组件之前的状态，
      // 必须有返回值，返回值将作为第三个参数传递给 componentDidUpdate。
      // 必须和 componentDidUpdate 一起使用，否则会报错

      // 触发的时机 ：被调用于 render 之后、更新 DOM 和 refs 之前
      // 作用： 它能让你在组件更新 DOM 和 refs 之前，从 DOM 中捕获一些信息（例如滚动位置）
        // console.log(this.wrapper.current.scrollHeight); // 滚动窗口的高度
        return this.wrapper.current.scrollHeight;
    }
    componentDidUpdate(prevProps, prevState, prevScrollHeight) {
        // scrollHeight: 获取对象的滚动高度。
        // scrollTop 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离

        // 我们现在一直往数组尾部插入数据，但是滚动条没有滚到最底部最新插入的位置，
        // 好比一个聊天框，我们想看最新的消息，

        // 那么我们可以更新scrollTop，一直在增大，增大长度是，最新滚动高度减去之前的的滚动高度

        // 之前的的滚动高度可以通过getSnapshotBeforeUpdate去获取

        this.wrapper.current.scrollTop =
      this.wrapper.current.scrollTop +
      (this.wrapper.current.scrollHeight - prevScrollHeight);
    }
    render() {
        const style = {
            height: '100px',
            width: '200px',
            border: '1px solid red',
            overflow: 'auto',
        };
        return (
        <ul style={style} ref={this.wrapper}>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        );
    }
  }
