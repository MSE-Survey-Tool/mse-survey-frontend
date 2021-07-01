import React, {MouseEvent, useRef, useState} from 'react';
import Gif from '@assets/gifs/money.webp';
import {icons} from '@assets/icons';
import useEvent from '../../utilities/event-utils/use-event';

const BulletPoint = (props: {icon: React.ReactNode; text: string}) => (
    <div className='w-full flex-row-left gap-x-2'>
        <div className={'w-6 h-6 p-0.5 icon-landing-bullet'}>{props.icon}</div>
        <div className={'flex-max leading-6'}>{props.text}</div>
    </div>
);
export default function LandingSection3() {
    const ref = useRef<HTMLDivElement>(null);
    const [scrollState, setScrollState] = useState<
        'above' | 'within' | 'below'
    >('above');

    function handleScroll(e: Event) {
        if (ref.current) {
            const {y, height} = ref.current.getBoundingClientRect();
            if (y > 0) {
                setScrollState('above');
            } else if (height + y > window.innerHeight) {
                setScrollState('within');
            } else {
                setScrollState('below');
            }
        }
    }
    useEvent('scroll', handleScroll);

    return (
        <div
            className='w-full h-[200vh] border-b-4 border-gray-800 centering-col'
            ref={ref}
        >
            <div
                className={
                    'grid w-full px-8 ' +
                    'grid-cols-1 gap-x-0 gap-y-8 ' +
                    'lg:gap-y-0 lg:grid-cols-2 lg:gap-x-8 ' +
                    'xl:gap-x-12'
                }
            >
                <div className='w-full ml-auto lg:max-w-lg flex-col-left'>
                    <div className='space-y-5 flex-col-left'>
                        <div className='text-xl text-blue-100 uppercase'>
                            <strong>Pricing</strong> should be transparent ...
                        </div>
                        <div className='space-y-3 text-base text-gray-100 flex-col-left'>
                            <div>
                                As many surveys as you want - billing per
                                survey:
                            </div>
                            <BulletPoint
                                icon={icons.discount}
                                text='The first 100 submissions of any survey are free'
                            />
                            <BulletPoint
                                icon={icons.currencyEuro}
                                text='4ct. per submission beyond the free tier'
                            />
                        </div>
                    </div>
                    <div className='space-y-5 flex-col-left'>
                        <div className='text-xl text-blue-100 uppercase'>
                            <strong>Pricing</strong> should be transparent ...
                        </div>
                        <div className='space-y-3 text-base text-gray-100 flex-col-left'>
                            <div>As ma</div>
                            <BulletPoint
                                icon={icons.discount}
                                text='The first 100 submissions of any survey are free'
                            />
                            <BulletPoint
                                icon={icons.currencyEuro}
                                text='4ct. per submission beyond the free tier'
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full mr-auto lg:max-w-lg flex-col-left'>
                    <div className='w-full max-w-md mx-auto overflow-hidden rounded-lg'>
                        <img
                            src={Gif}
                            className='w-full h-auto'
                            alt='Monkey with a cash'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
