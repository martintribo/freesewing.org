import React, { useEffect } from 'react'
import useApp from '../../hooks/useApp'
import withLanguage from '../../components/withLanguage'
import AppWrapper from '../../components/app/wrapper'
import WideLayout from '../../components/layouts/wide'

import { FormattedMessage } from 'react-intl'
import Button from '@material-ui/core/Button'
import Subscribe from '../../components/subscribe'

const JoinPatronsPage = props => {
  // Hooks
  const app = useApp()

  // Effects
  useEffect(() => {
    app.setTitle(app.translate('app.becomeAPatron'))
    app.setCrumbs([
      {
        title: app.translate('app.patrons'),
        slug: '/patrons/'
      }
    ])
  }, [])

  // Styles
  const styles = {
    header: {
      minHeight: '300px',
      padding: '3rem 2rem',
      fontFamily: "'Roboto Condensed', sans-serif",
      position: 'relative',
      backgroundImage: "url('/flag.svg')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '90% -30%'
    },
    innerHeader: {
      maxWidth: '650px',
      padding: '1rem 2rem'
    },
    h1: {
      margin: '0 0 2rem 0',
      padding: 0,
      fontWeight: 900,
      color: '#fff'
    },
    h2: {
      borderColor: 'rgba(255,255,255,0.25)',
      margin: '0 0 1rem 0',
      color: '#fff'
    },
    stripe: {
      backgroundImage: "url('/support.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      minHeight: '300px',
      padding: '3rem 2rem',
      fontFamily: "'Roboto Condensed', sans-serif",
      marginBottom: '1rem'
    },
    pitch: {
      color: 'white',
      fontSize: '125%'
    }
  }

  return (
    <AppWrapper app={app}>
      <div style={styles.stripe}>
        <div style={styles.innerHeader}>
          <h1 style={styles.h1}>
            <FormattedMessage id="app.supportFreesewing" />
          </h1>
          <h2 style={styles.h2}>
            <FormattedMessage id="app.txt-tiers" />
          </h2>
          <p style={styles.pitch}>
            <FormattedMessage id="app.patronPitch" />
          </p>
          <Button style={styles.primaryButton} variant="contained" href="#tiers">
            <FormattedMessage id="app.pricing" />
          </Button>
        </div>
      </div>
      <WideLayout app={app} top>
        <Subscribe app={app} />
      </WideLayout>
    </AppWrapper>
  )
}

export default withLanguage(JoinPatronsPage)
