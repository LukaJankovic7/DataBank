import React from "react"
import { connect } from 'react-redux'
import PageLayout from '../components/PageLayout'
import IndexStyles from './styles/index.module.scss'

const LandingPage = ({user}) => {

    return (
        <PageLayout>
            <div className={`wrapper ${IndexStyles.wrapper}`}>
                <h2>Welcome to your personal data bank{user==='default' ? ('! Please log in') : (`, ${user}`)}</h2>
            </div>
        </PageLayout>
    )
}

export default connect(
    ({user}) => ({user})
)(LandingPage)
