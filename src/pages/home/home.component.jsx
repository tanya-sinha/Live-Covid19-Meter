import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import CountryLists from '../../components/country-list/country-list.component';

import { fetchCountryListAsync } from '../../redux/summary/summary.action';
import {LogoContainer, Title} from './home.style';

class HomePage extends React.Component {
    componentDidMount() {
      const { fetchCountryListAsync } = this.props;  
      fetchCountryListAsync();
    }
    render() {
        return (
            <div>
                <LogoContainer>
                    <Logo />                   
                </LogoContainer>
                <Title>COVID-19 CORONAVIRUS PANDEMIC</Title>                
                <CountryLists />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCountryListAsync: () => dispatch(fetchCountryListAsync())
});

export default connect(null, mapDispatchToProps)(HomePage);