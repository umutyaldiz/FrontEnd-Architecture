import React from 'react';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container my-4'>
                <div className='block p-4 bg-white dark:bg-d-2 rounded-md shadow-md'>
                    <div class="flex justify-between z-30">
                        <div class="flex items-center">
                            <h2 class="h-14 flex items-center font-black text-xl text-gray-700 dark:text-gray-300 dark:hover:text-white relative">
                                <span class="absolute top-0 left-0 w-1/3 border-4 border-blue-600"></span>
                                React Component Yükleniyor
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}