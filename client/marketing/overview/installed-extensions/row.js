/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { Link } from '@woocommerce/components';

class InstalledExtensionRow extends Component {

	getLinks() {
		const { docsUrl, settingsUrl, supportUrl, dashboardUrl } = this.props;
		const links = [];

		if ( docsUrl ) {
			links.push( {
				key: 'docs',
				href: docsUrl,
				text: __( 'Docs', 'woocommerce-admin' ),
			} );
		}
		if ( supportUrl ) {
			links.push( {
				key: 'support',
				href: docsUrl,
				text: __( 'Get support', 'woocommerce-admin' ),
			} );
		}
		if ( settingsUrl ) {
			links.push( {
				key: 'settings',
				href: docsUrl,
				text: __( 'Settings', 'woocommerce-admin' ),
			} );
		}
		if ( dashboardUrl ) {
			links.push( {
				key: 'dashboard',
				href: docsUrl,
				text: __( 'Dashboard', 'woocommerce-admin' ),
			} );
		}

		return (
			<ul className="woocommerce-marketing-installed-extensions-card__item-links">
				{ links.map( ( link ) => {
					return (
						<li key={ link.key }>
							<Link href={ link.href } type="external">{ link.text }</Link>
						</li>
					)
				} ) }
			</ul>
		)
	}

	getActiveButton() {
		return (
			<Button
				isDefault
			>
				{ __( 'Activate', 'woocommerce-admin' ) }
			</Button>
		)
	}

	getFinishSetupButton() {
		return (
			<Button
				isDefault
			>
				{ __( 'Finish setup', 'woocommerce-admin' ) }
			</Button>
		)
	}

	render() {
		const { name, description, status } = this.props;
		let actions = null;

		switch ( status ) {
			case 'installed':
				actions = this.getActiveButton();
				break;
			case 'activated':
				actions = this.getFinishSetupButton();
				break;
			case 'configured':
				actions = this.getLinks();
				break;
		}

		return (
			<div className="woocommerce-marketing-installed-extensions-card__item">
				<div className="woocommerce-marketing-installed-extensions-card__item-actions">
					{ actions }
				</div>
				<h4>{ name }</h4>
				<p className="woocommerce-marketing-installed-extensions-card__item-description">{ description }</p>
			</div>
		)
	}
}

InstalledExtensionRow.propTypes = {
	name: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	settingsUrl: PropTypes.string,
	docsUrl: PropTypes.string,
	supportUrl: PropTypes.string,
	dashboardUrl: PropTypes.string,
};

export default InstalledExtensionRow;
