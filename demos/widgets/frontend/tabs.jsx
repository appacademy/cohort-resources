import React from 'react';
import Header from './header';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIdx: 0
        }

        this.toggleActiveTab = this.toggleActiveTab.bind(this);
    }

    toggleActiveTab(num) {
        this.setState({ activeIdx: num });
    }
    
    render() {
        let content = this.props.tabList[this.state.activeIdx].content;

        return (
            <div className='tabs'>
                <h1>Tabs</h1>
                <ul>
                    {this.props.tabList.map((tab, idx) => {
                        return (
                            <Header 
                                tab={tab}
                                idx={idx}
                                active={idx === this.state.activeIdx}
                                key={idx} 
                                toggleActiveTab={this.toggleActiveTab}
                            />
                        )
                    })}
                </ul>
                <article>{content}</article>
            </div>
        )
    }
}

export default Tabs;