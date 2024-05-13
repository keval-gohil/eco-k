import Link from 'next/link';
import styles from './header/header.module.css';
import AuthBar from '@/components/header/authBar';

export default function Header() {
	return (
		<div className={'container'}>
			<header className={styles.header}>
				<div className={styles['logo-container']}>
					<Link href={'/'} className={styles.logo}>
						<b>ECO-<span style={{color:'#4d4dff'}}>K</span></b>
					</Link>
					<AuthBar />
				</div>
			</header>
		</div>
	);
}
