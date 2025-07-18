import React, { useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useAutoplay } from './EmblaCarouseAutoplay';
import { useAutoplayProgress } from './EmblaCarouselAutoplayProgress';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import type {ProjectItem} from "../../types/ProjectItem.ts";
import ProjectCard from "../Card/ProjectCard";

type PropType = {
    slides: ProjectItem[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
    const progressNode = useRef<HTMLDivElement>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 })
    ]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
        useAutoplay(emblaApi);

    const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div className="embla__slide" key={index}>
                            <ProjectCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onAutoplayButtonClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <div
                    className={`embla__progress${showAutoplayProgress ? '' : ' embla__progress--hidden'}`}
                >
                    <div className="embla__progress__bar" ref={progressNode} />
                </div>

                <button className="embla__play" onClick={toggleAutoplay} type="button">
                    {autoplayIsPlaying ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
};

export default EmblaCarousel;
