'use client';

import {useCustomer} from 'boundless-commerce-components/dist/client';
import Button from '@mui/material/Button';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
// import LoginIcon from '@mui/icons-material/Login';
import {useRouter} from 'next/navigation';
import {useCallback} from 'react';
import headerStyles from './header.module.css';
import clsx from 'clsx';

export default function AuthBar() {
	const {customer, logout, customerIsInited} = useCustomer();
	const router = useRouter();
	const onLogoutClicked = useCallback(() => {
		if (!logout) {
			throw new Error('logout is empty. Did you wrap the app in BoundlessCart?');
		}

		logout();
		router.push('/');
	}, [router, logout]);

	const rootClasses = clsx(headerStyles['auth-bar'], 'my-1');

	if (!customerIsInited) {
		return <div className={rootClasses}/>;
	}

	if (customer) {
		return (
			<div className={rootClasses}>
				<Button
					style={{color:'#4d4dff', background: '#e8f0fe', textTransform:'none', padding:'.5rem 1rem'}}
					component={Link}
					href={'/customer/my-orders'}
					startIcon={<PersonIcon />}
				>{customer.email}</Button>
				<Button style={{color:'#e8a317', background: '#ffffdb', padding:'.5rem 1rem'}} onClick={onLogoutClicked} endIcon={<LogoutIcon />}>Logout</Button>
			</div>
		);
	}

	return (
		<div className={rootClasses}>
			{/* <Button
					style={{color:'red'}}
					component={Link}
					href={'/auth/login'}
					startIcon={<LoginIcon />}
				>Sign In</Button>
			<span>|</span> */}
			<Button
				style={{color:'#4d4dff', background: '#e8f0fe', padding:'.5rem 1rem'}}
				component={Link}
				href={'/auth/register'}
				startIcon={<PersonIcon />}
			>Sign Up</Button>
		</div>
	);
}
