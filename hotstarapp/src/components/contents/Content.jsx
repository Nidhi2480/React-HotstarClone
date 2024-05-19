import React, { useState, useEffect, useRef } from "react";
import Row from "../movielistrow/Row";
import Header from "../header/Header";
import Companies from "../companiesrow/Companies";
import Languagesrow from "../languagesrow/Languagesrow";
import './contents.css';

function Content({ changeBanner, isbanner }) {
    const [isShow, setIsShow] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const scrollHandler = () => {
            const target = targetRef.current;
            if (!target) return;

            const { top } = target.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            setIsShow(top - windowHeight + 100 <= 0);
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <div className="banner">
            <Header changeBanner={changeBanner} movie={isbanner}/>
            <div className="shadow"></div>
            <div className="rows">
                <Row rowName="Latest Shows" apiUrl="" smallRow={false} changeBanner={changeBanner} genre="latestshows"/>
                <Row rowName="Family" apiUrl="https://api.sampleapis.com/movies/family" smallRow={false} changeBanner={changeBanner} genre="family"/>
                <Companies />
                <Row rowName="Western" apiUrl="https://api.sampleapis.com/movies/western" smallRow={true} changeBanner={changeBanner} genre="western"/>
                <Row rowName="Classic" apiUrl="https://api.sampleapis.com/movies/classic" smallRow={false} changeBanner={changeBanner} genre="classic"/>
                <div className="show" ref={targetRef}></div>
                {isShow && (
                    <>
                        <Languagesrow/>
                        <Row rowName="Drama" apiUrl="https://api.sampleapis.com/movies/drama" smallRow={false} changeBanner={changeBanner} genre="drama"/>
                    </>
                )}
            </div>
        </div>
    );
}

export default Content;
