import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { bayIndex } from '../api/bay-auth.js'
import apiUrl from '../apiConfig'
import axios from 'axios'

class BayIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bays: null
    }
  }
  componentDidMount () {
    const { msgAlert, user } = this.props
    bayIndex(user)
      // .then(res => console.log(res.data.bay))
      .then(res => this.setState({ bays: res.data.bay }))
      .catch(error => {
        msgAlert({
          heading: 'Error',
          message: error.message,
          variant: 'danger'
        })
      })
  }

  loadBatch = () => {
    axios({
      url: `${apiUrl}/second14`,
      method: 'GET'
    })
      .then(res => this.setState({ bays: [...this.state.bay, res.data.bay] }))
      .then(() => console.log(`STATE: ${this.state.bay}`))
      .catch(console.error)
  }

  render () {
    const { bays } = this.state

    if (!bays) {
      return (
        <p>!bays</p>
      )
    }
    if (bays.length === 0) {
      return (
        <p>0 Bays to show</p>
      )
    }

    const baysJsx = bays.map(bay => (
      <article key={bay._id}>
        <Link to={`/bay/${bay._id}`}>
          <section className='thc'>
            <h3>{bay.title}</h3>by<h3>{bay.artist}</h3>
          </section>
        </Link>
        <section className='bhc'>
          {bay.description}
          <div style={{ display: 'flex' }}>
          </div>
        </section>
      </article>

    ))

    return (
      <Fragment>
        <div className='bannana' >
          {baysJsx}
        </div>
      </Fragment>
    )
  }
}

export default BayIndex

//             < ItemsInColl id={bay._id} />
