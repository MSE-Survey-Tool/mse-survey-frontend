import React from 'react';
import 'styles/markdown.css';

// TODO: Replace links in text as well (starting with https:// or www.)

function VisualUserTextCard(props: {title: string; text: string}) {
    return (
        <div className='w-full p-4 bg-white rounded shadow-md lg:p-6 centering-col'>
            <div className='text-2xl text-black font-weight-600'>
                {props.title}
            </div>
            {props.text.replace(/\s*/, '').length > 0 && (
                <div
                    className='w-full mt-2 lg:mt-3 text-grey-900 markdown font-weight-500'
                    dangerouslySetInnerHTML={{
                        __html: ''.concat(
                            ...props.text
                                .replaceAll(/<[^>]*>/g, '')
                                .split('\n')
                                .map((s) => `<p>${s}</p>`),
                        ),
                    }}
                />
            )}
        </div>
    );
}

export default VisualUserTextCard;
