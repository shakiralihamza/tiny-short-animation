/* eslint-disable no-unused-vars,no-eval */
// noinspection ES6CheckImport,JSUnusedLocalSymbols,JSValidateTypes

import React from 'react';
import './Circle.css';
import useWebAnimations, {fadeIn, fadeOut} from "@wellyshen/use-web-animations";
import {Box, Grid, Typography} from "@mui/material";
import animals from "./animals";


const Circle = () => {
    const [selected, setSelected] = React.useState(0);
    const [hovered, setHovered] = React.useState(0);
    const [showingAnimalDetails, setShowingAnimalDetails] = React.useState(false);
    const [showingAnimal, setShowingAnimal] = React.useState(false);
    const [animalToShow, setAnimalToShow] = React.useState(null);
    const [img, setImg] = React.useState(null);
    const changeAnimalDuration = 200;

    //below is some reusable content

    const numberOfElements = 19;
    const translateLength = 230;
    const angle = 360 / numberOfElements;
    const keyframes = (i) => {
        return [{transform: `rotate(${i * angle}deg) translate(${translateLength}px)`}, {transform: `rotate(${i * angle + 360}deg) translate(${translateLength}px)`}];
    }
    const animalContentAnimationOptionsIn = {
        keyframes: [{marginTop: "10px", opacity: 0}, {marginTop: "0px", opacity: 1}],
        animationOptions: {
            duration: changeAnimalDuration + 400,
            easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
            fill: "forwards"
        }
    }
    const animalContentAnimationOptionsOut = {
        ...fadeOut, animationOptions: {
            duration: changeAnimalDuration, easing: "ease-in-out", fill: "forwards"
        }
    }
    const animationOptions = {
        delay: 0, duration: 80000, iterations: 1000,
    }
    const scratchyOptions = {
        keyframes: [{backgroundPosition: '0 0'}, {backgroundPosition: '0 0'}, {backgroundPosition: '20px -20px'}, {backgroundPosition: '20px -20px'}, {backgroundPosition: '40px -40px'}, {backgroundPosition: '40px -40px'}, {backgroundPosition: '60px -60px'}, {backgroundPosition: '60px -60px'}, {backgroundPosition: '0 0'}],
        animationOptions: {duration: 250, iterations: 10000, easing: "steps(8, end)"}
    }

    // below are the functions that handle user interaction

    const handleMouseOver = (i) => {
        if (!showingAnimalDetails) {
            animateAnimalContentOut();
            setHovered(i + 1);
            setTimeout(() => {
                setShowingAnimal(true)
                setImg(i);
                setAnimalToShow(animals[i]);
                animateAnimalContentIn();
            }, changeAnimalDuration);
        }
    }
    const handleElementClick = (index) => {
        setSelected(index + 1);
        hideElements();
        setHovered(0)
        showAnimalContent();
        setShowingAnimalDetails(true);
    }
    const handleBack = () => {
        bringBackElements()
        rotateElements()
        hideAnimalContent()
        setTimeout(() => {
            setShowingAnimalDetails(false);
        }, 1000)
    }

    // below are the functions that handle the animations

    const showAnimalContent = () => {
        animalContent.animate({
            keyframes: [{transform: "translateY(0px)"}, {transform: "translateX(-280px)"}], animationOptions: {
                duration: 1000, delay: 500, easing: "cubic-bezier(0.275, 0.82, 0.165, 1)", fill: "forwards"
            }
        });

        animalDetail.animate({
            keyframes: [{transform: "translateX(400px)"}, {transform: "translateX(140px)", opacity: 1}],
            animationOptions: {
                duration: 1000, delay: 600, easing: "cubic-bezier(0.275, 0.82, 0.165, 1)", fill: "forwards"
            }
        });
        closeButton.animate({
            keyframes: [{opacity: 0}, {opacity: 1}],
            animationOptions: {
                duration: 1000, delay: 700, easing: "cubic-bezier(0.275, 0.82, 0.165, 1)", fill: "forwards"
            }
        });
    }
    const hideAnimalContent = () => {
        animalContent.animate({
            keyframes: [{transform: "translateX(-280px)"}, {transform: "translateY(0px)"}], animationOptions: {
                duration: 1000, delay: 500, easing: "cubic-bezier(0.275, 0.82, 0.165, 1)", fill: "forwards"
            }
        });

        animalDetail.animate({
            keyframes: [{transform: "translateX(140px)"}, {opacity: 0}], animationOptions: {
                duration: 400, delay: 500, easing: "cubic-bezier(0.275, 0.82, 0.165, 1)", fill: "forwards"
            }
        });
        closeButton.animate({
            keyframes: [{opacity: 1}, {opacity: 0}],
            animationOptions: {
                duration: 500, delay: 200, easing: "cubic-bezier(0.275, 0.82, 0.165, 1)", fill: "forwards"
            }
        });
    }
    const hideElements = () => {
        for (let i = 0; i < numberOfElements; i++) {
            eval(`element${i + 1}.animate({
                keyframes: [
                    {opacity: 1},
                    {transform: \`rotate(${i * angle}deg) translateX(${translateLength}px)\`, opacity: 0.2},
                    {transform: \`rotate(${i * angle}deg) translateX(${translateLength + 600}px)\`, opacity: 0}
                ],
                animationOptions: {duration: 1000, easing: "ease-in", fill: "forwards"}
            })`);
        }
    }
    const bringBackElements = () => {
        for (let i = 0; i < numberOfElements; i++) {
            eval(`element${i + 1}.animate({
                keyframes: [{transform: \`rotate(${i * angle}deg) translate(${translateLength}px)\`, opacity: 1}],
                animationOptions: {duration: 1000, easing: "ease-in-out", fill: "forwards"}
            })`);
        }
    }
    const rotateElements = () => {
        for (let i = 0; i < numberOfElements; i++) {
            eval(`element${i + 1}.animate({
                keyframes: keyframes(i + 1), animationOptions: {...animationOptions, delay: 1000}
            })`);
        }
    }
    const animateAnimalContentIn = () => {
        animalImage.animate({...animalContentAnimationOptionsIn});
        animalName.animate({...animalContentAnimationOptionsIn});
        pieceNumber.animate({...animalContentAnimationOptionsIn});
        animalType.animate({
            keyframes: [{marginTop: "20px", opacity: 0}, {marginTop: "10px", opacity: 1}],
            animationOptions: {...animalContentAnimationOptionsIn.animationOptions, delay: 200}
        });

        animalNameScratchy.animate({...scratchyOptions});
    }
    const animateAnimalContentOut = () => {
        animalType.animate({...animalContentAnimationOptionsOut});
        animalImage.animate({...animalContentAnimationOptionsOut});
        animalName.animate({...animalContentAnimationOptionsOut});
        pieceNumber.animate({
            keyframes: [{marginTop: "0px"}, {marginTop: "20px", opacity: 0}],
            animationOptions: animalContentAnimationOptionsOut.animationOptions
        });
        animalNameScratchy.animate({...scratchyOptions});
    }

    // below are the references to the elements that will be animated
    const element1 = useWebAnimations({keyframes: keyframes(1), animationOptions: {...animationOptions}});
    const element2 = useWebAnimations({keyframes: keyframes(2), animationOptions: {...animationOptions}});
    const element3 = useWebAnimations({keyframes: keyframes(3), animationOptions: {...animationOptions}});
    const element4 = useWebAnimations({keyframes: keyframes(4), animationOptions: {...animationOptions}});
    const element5 = useWebAnimations({keyframes: keyframes(5), animationOptions: {...animationOptions}});
    const element6 = useWebAnimations({keyframes: keyframes(6), animationOptions: {...animationOptions}});
    const element7 = useWebAnimations({keyframes: keyframes(7), animationOptions: {...animationOptions}});
    const element8 = useWebAnimations({keyframes: keyframes(8), animationOptions: {...animationOptions}});
    const element9 = useWebAnimations({keyframes: keyframes(9), animationOptions: {...animationOptions}});
    const element10 = useWebAnimations({keyframes: keyframes(10), animationOptions: {...animationOptions}});
    const element11 = useWebAnimations({keyframes: keyframes(11), animationOptions: {...animationOptions}});
    const element12 = useWebAnimations({keyframes: keyframes(12), animationOptions: {...animationOptions}});
    const element13 = useWebAnimations({keyframes: keyframes(13), animationOptions: {...animationOptions}});
    const element14 = useWebAnimations({keyframes: keyframes(14), animationOptions: {...animationOptions}});
    const element15 = useWebAnimations({keyframes: keyframes(15), animationOptions: {...animationOptions}});
    const element16 = useWebAnimations({keyframes: keyframes(16), animationOptions: {...animationOptions}});
    const element17 = useWebAnimations({keyframes: keyframes(17), animationOptions: {...animationOptions}});
    const element18 = useWebAnimations({keyframes: keyframes(18), animationOptions: {...animationOptions}});
    const element19 = useWebAnimations({keyframes: keyframes(19), animationOptions: {...animationOptions}});

    const origamiHeadingBox = useWebAnimations({
        keyframes: [{marginTop: "20px"}, {marginTop: "0px"}],
        animationOptions: {duration: 500, delay: 200, fill: "forwards", easing: "ease-in-out"}
    });
    const origamiMainBox = useWebAnimations({
        keyframes: [{marginTop: "20px"}, {marginTop: "0px"}],
        animationOptions: {duration: 500, delay: 0, fill: "forwards", easing: "ease-in-out"}
    });
    const origamiMain = useWebAnimations({...scratchyOptions});

    const origamiText = useWebAnimations({...fadeIn, animationOptions: {duration: 500, delay: 500, fill: "forwards"}});
    const selectPiece = useWebAnimations({...fadeIn, animationOptions: {duration: 500, delay: 1000, fill: "forwards"}});

    const animalImage = useWebAnimations()
    const animalType = useWebAnimations()
    const animalName = useWebAnimations()
    const pieceNumber = useWebAnimations()
    const animalDetail = useWebAnimations()

    const animalContent = useWebAnimations()
    const animalNameScratchy = useWebAnimations()
    const closeButton = useWebAnimations()

    return (
        <Grid container sx={{height: '100vh', width: '100%'}} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={'auto'}>
                {Array.from({length: numberOfElements}, (v, i) => {
                    const element = `element${i + 1}`;
                    return (<div
                        className={`element ${hovered === i + 1 && 'selected'}`}
                        style={{zIndex: i + 1}}
                        onClick={() => handleElementClick(i)}
                        onMouseOver={() => {
                            handleMouseOver(i)
                        }}
                        ref={eval(element).ref}
                    >
                        <div className={'dot'}/>
                    </div>)
                })}
            </Grid>
            {!showingAnimal && selected === 0 ? (
                <Grid item xs={'auto'} sx={{position: 'absolute', textAlign: 'center'}}>
                    <Box ref={origamiHeadingBox.ref} sx={{marginTop: '20px'}}>
                        <Typography className={'origami-heading'}>
                            In Origami
                        </Typography>
                    </Box>
                    <Box ref={origamiMainBox.ref} sx={{marginTop: '20px'}}>
                        <Typography className={'origami'} variant={'h2'} ref={origamiMain.ref}>
                            {numberOfElements} Animals
                        </Typography>
                    </Box>
                    <Box ref={origamiText.ref} sx={{opacity: 0}}>
                        <Typography className={'text'} variant={'body2'}>
                            Made with origami
                        </Typography>
                    </Box>
                    <Box ref={selectPiece.ref} sx={{opacity: 0}}>
                        <Typography className={'select-piece'} variant={'body2'}
                                    sx={{fontSize: 12}}
                        >
                            Select a piece from the ring
                        </Typography>
                    </Box>
                </Grid>
            ) : (
                <>
                    <Grid item xs={'auto'} ref={animalContent.ref}
                          sx={{position: 'absolute', textAlign: 'center', mt: -5}}>

                        <Box ref={animalImage.ref} sx={{height: '200px'}}>
                            {
                                animals.map((animal, index) => (
                                    <img src={animal.image} alt={animal.name}
                                         style={{
                                             top: '30%',
                                             left: '50%',
                                             transform: 'translate(-50%, -50%)',
                                             height: '200px',
                                             visibility: img === index ? 'visible' : 'hidden',
                                             position: 'absolute',
                                         }}/>
                                ))
                            }

                        </Box>
                        <Box ref={pieceNumber.ref}>
                            <Typography className={'piece-number'}>
                                Piece {animalToShow.id}
                            </Typography>
                        </Box>
                        <Box ref={animalName.ref}>
                            <Typography className={'animal-name'} ref={animalNameScratchy.ref} variant={'h3'}>
                                {animalToShow.name}
                            </Typography>
                        </Box>
                        <Box sx={{marginTop: '10px', position: 'absolute', width: '100%'}} ref={animalType.ref}>
                            <Typography className={'animal-type'} variant={'body1'} textAlign={'center'}
                                        sx={{width: '100%'}}>
                                {animalToShow.type}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={'auto'} sx={{position: 'absolute', textAlign: 'center', opacity: 0}}
                          ref={animalDetail.ref}>
                        <Typography className={'animal-detail'}>
                            {animalToShow.details}
                        </Typography>
                    </Grid>
                    <Box className={'close-button'} onClick={handleBack} ref={closeButton.ref}/>
                </>
            )}
        </Grid>
    )
};

export default Circle;
