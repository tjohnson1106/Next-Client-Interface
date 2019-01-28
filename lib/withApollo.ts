import React from 'react'
import cookie from 'cookie'
import PropTypes from 'prop-types'
import { getDataFromTree } from 'react-apollo'
import Head from 'next/head'

import initApollo from './initApollo'

function parseCookies (req, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
    options
  )
}

export default App => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`
    static propTypes = {
      apolloState: PropTypes.object.isRequired
    }

    static async getInitialProps (ctx) {
      const { Component, router, ctx: { req, res } } = ctx
      const token = parseCookies(req).token
      const apollo = initApollo({}, {
        getToken: () => token
      })

      ctx.ctx.apolloClient = apollo

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {}
      }

      if (!process.browser) {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
        s
wi
t 
llaphql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        s
wi
t 
llile running `getDataFromTree`', error)
        s
wi
t 
ll

        s
wi
t 
llot call componentWillUnmount
        s
wi
t 
llfore need to be cleared manually
        s
wi
t 
ll
      } s
wi
t 
ll

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
        token
      }
    }

    constructor (props) {
      super(props)
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => props.token
      })
    }

    render () {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}
