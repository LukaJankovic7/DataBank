import React from 'react' 
import PageLayout from '../components/PageLayout'
import { graphql, Link } from 'gatsby'
import '../index.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import DataTemplateStyles from './dataTemplate.module.scss'


export const query = graphql`
    query($slug: String!) {
        contentfulData(slug: {eq: $slug}) {
            title
            text {
                json
            }
            
            owner
            date(formatString:"MMMM DD, YYYY")
        }
    }
`
//to get media:
// media{
//     file{
//         url
//         fileName
//     }
// } 

const DataTemplate = ({data: {contentfulData: {title, text, media, owner, date}}}) => { 
    return (
        
        <PageLayout>
            
            <div className={`wrapper`}>
                <Link to='/account'><div className={DataTemplateStyles.arrowLeft}></div><p className={DataTemplateStyles.back}>Back</p></Link>
                <h2>{title}</h2>
                {documentToReactComponents(text.json)}
                <p>Published on: {date}, by {owner}</p>
            </div>
        </PageLayout>
    )
}

export default DataTemplate
