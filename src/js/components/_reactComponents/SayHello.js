import React from 'react';

export default class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Merhaba!' };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(this.state.message);
    }

    render() {
        return (
            <div className='container my-4'>
                <div className='block p-4 bg-white rounded-md shadow-md'>
                    <div class="flex justify-between dark:bg-d-2 z-30">
                        <div class="flex items-center">
                            <h2 class="h-14 flex items-center font-black text-xl text-gray-700 dark:text-gray-300 dark:hover:text-white relative">
                                <span class="absolute top-0 left-0 w-1/3 border-4 border-blue-600"></span>
                                React Component
                            </h2>
                        </div>
                    </div>
                    <div className='block'>
                        <button onClick={this.handleClick} className="flex items-center justify-center h-8 px-4 text-white text-sm bg-gray-700 dark:bg-d-3 rounded-md hover:bg-gray-500 transition-colors">
                            React Component = Merhaba!
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}