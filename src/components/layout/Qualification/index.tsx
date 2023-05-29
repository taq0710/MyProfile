import * as React from 'react';

export interface QualificationProps {
    isToggled: boolean;

}

export default function Qualification(props: QualificationProps) {
    const { isToggled } = props;

    return (
        <div id="section3" className="max-w-[1000px] mx-auto my-0 fl">
            <div className="mt-[5rem]">
                <div
                    className={`text-3xl font-bold text-center text-gray-600 ${isToggled ? 'text-yellow-200' : ''
                        }`}
                >
                    My Project
                </div>
                <div className="text-gray-500 text-center"></div>
            </div>
            <div></div>
        </div>
    );
}
