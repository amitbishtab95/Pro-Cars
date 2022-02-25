import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="lowest cost solar panels in america"
                description="Money-back guarentee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="order now"
                rightBtnText="learn more"
            />
            <Section
                title="solar for new roof"
                description="solar roof cost less than a new roof plus solar panels "
                backgroundImg="solar-roof.jpg"
                leftBtnText="order now"
                rightBtnText="learn more"
            />
            <Section
                title="Accessories"
                description=" "
                backgroundImg="accessories.jpg"
                leftBtnText="shop now"

            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height=100vh;
`