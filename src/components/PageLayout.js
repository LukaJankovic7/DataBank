import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../index.scss'
import LayoutStyles from './styles/layout.module.scss'
import { connect } from 'react-redux'


const PageLayout = ({children}) => {

    return (
            <div className={LayoutStyles.container}>
                <div className={LayoutStyles.content}>
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
    )
}

export default connect()(PageLayout)