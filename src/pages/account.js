import React from 'react'
import { connect } from 'react-redux'
import { graphql, useStaticQuery, Link } from 'gatsby'
import PageLayout from '../components/PageLayout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import AccountStyles from './styles/account.module.scss'

const Account = ({user}) => {
    const {allContentfulData: {edges: data}} = useStaticQuery (graphql`
        query {
            allContentfulData{
                edges{
                    node{
                        title
                        text {
                            json
                        }
                        slug
                        owner
                    }
                }
            }
        }
    `)

    const storeData = () => {
        console.log('hello', data);
    }

    return (
        <PageLayout>
            <div className={`wrapper ${AccountStyles.wrapper}`}>
                {
                    user === 'default' ? (
                        <p>Please <Link to="/login">log in</Link></p>
                    ) : (
                        <div>
                            <h2>Welcome to your account page!</h2>
                            {
                                data.map(dataNode => {
                                    const { node: {title, text, owner, slug}} = dataNode;
                                    if (owner===user) {
                                        return (
                                            <Link to={`/account/${slug}`}>
                                                <div onClick={storeData} key={title} className={AccountStyles.data}>
                                                    <h3>{title}</h3>
                                                    {documentToReactComponents(text.json) }
                                                </div>
                                            </Link>
                                        )
                                    }
                                })
                            }
                        </div>
                    )
                }
            </div>
        </PageLayout>
    )
}

export default connect(
    ({user}) => ({user})
)(Account)