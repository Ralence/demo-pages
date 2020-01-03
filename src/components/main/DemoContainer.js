import React from 'react';
import styled from 'styled-components';
import DemoItem from './DemoItem';
import demos from '../../data/demoSitesData';

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    min-height: 100vh;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #cccccc21;
`;

const DemoContainer = () => {
    return (
        <Container>
            {demos.map(item => (
                <DemoItem url={item.url} title={item.title} img={item.img} />
            ))}
        </Container>
    )
}

export default DemoContainer;
