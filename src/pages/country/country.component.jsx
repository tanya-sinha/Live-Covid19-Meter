import React from 'react';
import {connect} from 'react-redux';
import {fetchCountryAsync} from '../../redux/country/country.actions';
import CountryDetail from '../../components/country-detail/country-detail.component';

class CountryPage extends React.Component {
    componentDidMount() {
        const { fetchCountryAsync } = this.props;    
        fetchCountryAsync();
      }
    render() {
        return (
        <CountryDetail />
    )}
};

const mapDispatchToProps = (dispatch,ownProps) => ({
    fetchCountryAsync: () => dispatch(fetchCountryAsync(ownProps.match.params.countryname))
})
 

export default connect(null, mapDispatchToProps)(CountryPage);