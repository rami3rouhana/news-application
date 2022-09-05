import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'

import useStyles from './styles'
import NewsCard from '../NewsCard/NewsCard'

const NewsCards = ({ articles }) => {
    const classes = useStyles();

    if (articles) {
        return (
            <Grow in >
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {articles.map((article, i) => {
                        return (<Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                            <NewsCard article={article} index={i} />
                        </Grid>
                        )
                    })}
                </Grid>
            </Grow>
        )
    }
}

export default NewsCards